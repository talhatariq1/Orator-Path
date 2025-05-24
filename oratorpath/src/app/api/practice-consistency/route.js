import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import AudioAnalysis from '../../../lib/models/audioAnalysis.model';
import {
  connectToMongoDB,
  formatDateForDisplay,
  getFromCache,
  saveToCache,
  generateCacheKey,
  handleMongoQuery
} from '../../../lib/api/apiUtils';

export async function GET() {
  try {
    // Get the current user from Clerk
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const userId = user.id;
    console.log('Fetching practice consistency data for user:', userId);

    // Check cache first
    const cacheKey = generateCacheKey(userId, 'practice-consistency');
    const cachedData = getFromCache(cacheKey, 3 * 60 * 1000); // 3 minute cache

    if (cachedData) {
      console.log('Returning cached practice consistency data');
      return NextResponse.json(cachedData, { status: 200 });
    }

    // Connect to MongoDB with a shorter timeout
    const dbConnection = await connectToMongoDB(3000); // 3 second timeout
    if (!dbConnection.success) {
      console.error(`MongoDB connection failed after ${dbConnection.failureTime}ms:`, dbConnection.error);
      return NextResponse.json({
        error: `Database connection failed after ${dbConnection.failureTime}ms`,
        practiceData: [],
        streakInfo: {
          currentStreak: 0,
          longestStreak: 0
        },
        lastUpdated: "Never"
      }, { status: 200 });
    }

    console.log(`MongoDB connected in ${dbConnection.connectionTime}ms`);

    // Get the 3 most recent audio analyses for the user with retry logic
    const queryResult = await handleMongoQuery(
      async () => {
        const analyses = await AudioAnalysis.find({
          clerkId: userId,
          // Ensure we have valid data in the analysis
          transcriptAnalysis: { $exists: true },
          voiceAnalysis: { $exists: true }
        })
        .sort({ analysisDate: -1 })
        .limit(3)
        .lean(); // Use lean() for better performance

        return analyses;
      },
      'Failed to query audio analysis data',
      {
        maxRetries: 1,        // Retry once
        retryDelay: 300,      // 300ms delay before retry
        timeout: 2000         // 2 second timeout
      }
    );

    if (!queryResult.success) {
      console.error('Query error:', queryResult.error);
      return NextResponse.json({
        error: queryResult.error,
        practiceData: [],
        streakInfo: {
          currentStreak: 0,
          longestStreak: 0
        },
        lastUpdated: "Never"
      }, { status: 200 });
    }

    const analyses = queryResult.data;
    console.log(`Found ${analyses.length} analyses for practice consistency`);

    // Process the data for the practice consistency widget
    const practiceData = analyses.map(analysis => {
      // Extract date
      const date = formatDateForDisplay(analysis.analysisDate || analysis.createdAt);

      // Extract duration
      const duration = analysis.voiceAnalysis?.duration || 0;

      // Extract overall score
      const score = analysis.recommendations?.performance_assessment?.overall_score || 0;

      // Extract clarity (coherence score)
      const rawCoherence = analysis.transcriptAnalysis?.coherence_score;
      const clarity = rawCoherence !== undefined
        ? parseFloat(rawCoherence.toFixed(1))
        : 0;

      // Extract word count
      const wordCount = analysis.textAnalysis?.text_statistics?.word_count || 0;

      // Extract filler words count
      const fillerWords = analysis.textAnalysis?.filler_words?.total_count || 0;

      return {
        date,
        rawDate: analysis.analysisDate || analysis.createdAt,
        duration,
        score: Math.round(score),
        clarity,
        wordCount,
        fillerWords,
        id: analysis._id.toString()
      };
    });

    // Calculate streak information
    const streakInfo = calculateStreak(analyses);

    const responseData = {
      practiceData,
      streakInfo,
      lastUpdated: practiceData.length > 0 ? practiceData[0].date : "Never"
    };

    // Save to cache
    saveToCache(cacheKey, responseData);

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error('Error fetching practice consistency data:', error);
    return NextResponse.json({
      error: 'Failed to fetch practice consistency data',
      practiceData: [],
      streakInfo: {
        currentStreak: 0,
        longestStreak: 0
      },
      lastUpdated: "Never"
    }, { status: 200 }); // Return 200 with empty data instead of 500
  }
}

// Helper function to calculate streak information
function calculateStreak(analyses) {
  if (!analyses || analyses.length === 0) {
    return {
      currentStreak: 0,
      longestStreak: 0,
      lastPracticeDate: null
    };
  }

  // Sort analyses by date (newest first)
  const sortedAnalyses = [...analyses].sort((a, b) =>
    new Date(b.analysisDate || b.createdAt) - new Date(a.analysisDate || a.createdAt)
  );

  // Get the most recent practice date
  const lastPracticeDate = new Date(sortedAnalyses[0].analysisDate || sortedAnalyses[0].createdAt);

  // Check if the most recent practice is from today or yesterday
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const lastPracticeDay = new Date(lastPracticeDate);
  lastPracticeDay.setHours(0, 0, 0, 0);

  // If the last practice is older than yesterday, streak is 0
  if (lastPracticeDay.getTime() < yesterday.getTime()) {
    return {
      currentStreak: 0,
      longestStreak: calculateLongestStreak(sortedAnalyses),
      lastPracticeDate
    };
  }

  // Calculate current streak
  let currentStreak = 1;
  let currentDate = lastPracticeDay;

  // Create a map of practice dates for quick lookup
  const practiceDatesMap = new Map();
  sortedAnalyses.forEach(analysis => {
    const date = new Date(analysis.analysisDate || analysis.createdAt);
    date.setHours(0, 0, 0, 0);
    practiceDatesMap.set(date.getTime(), true);
  });

  // Count back from the last practice date to find consecutive days
  while (true) {
    const prevDay = new Date(currentDate);
    prevDay.setDate(prevDay.getDate() - 1);

    if (practiceDatesMap.has(prevDay.getTime())) {
      currentStreak++;
      currentDate = prevDay;
    } else {
      break;
    }
  }

  return {
    currentStreak,
    longestStreak: Math.max(currentStreak, calculateLongestStreak(sortedAnalyses)),
    lastPracticeDate
  };
}

// Helper function to calculate the longest streak
function calculateLongestStreak(sortedAnalyses) {
  if (sortedAnalyses.length <= 1) return sortedAnalyses.length;

  // Create an array of practice dates (only dates, no time)
  const practiceDates = sortedAnalyses.map(analysis => {
    const date = new Date(analysis.analysisDate || analysis.createdAt);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  });

  // Sort dates in ascending order
  practiceDates.sort((a, b) => a - b);

  // Remove duplicates (multiple practices on the same day)
  const uniqueDates = [...new Set(practiceDates)];

  let longestStreak = 1;
  let currentStreak = 1;

  for (let i = 1; i < uniqueDates.length; i++) {
    const prevDate = new Date(uniqueDates[i - 1]);
    const currDate = new Date(uniqueDates[i]);

    const dayDiff = (currDate - prevDate) / (1000 * 60 * 60 * 24);

    if (dayDiff === 1) {
      // Consecutive day
      currentStreak++;
      longestStreak = Math.max(longestStreak, currentStreak);
    } else if (dayDiff > 1) {
      // Break in streak
      currentStreak = 1;
    }
  }

  return longestStreak;
}
