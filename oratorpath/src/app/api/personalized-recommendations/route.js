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
    console.log('Fetching personalized recommendations for user:', userId);

    // Check cache first
    const cacheKey = generateCacheKey(userId, 'personalized-recommendations');
    const cachedData = getFromCache(cacheKey, 5 * 60 * 1000); // 5 minute cache

    if (cachedData) {
      console.log('Returning cached personalized recommendations data');
      return NextResponse.json(cachedData, { status: 200 });
    }

    // Connect to MongoDB with a shorter timeout
    const dbConnection = await connectToMongoDB(3000); // 3 second timeout
    if (!dbConnection.success) {
      console.error(`MongoDB connection failed after ${dbConnection.failureTime}ms:`, dbConnection.error);
      return NextResponse.json({
        error: `Database connection failed after ${dbConnection.failureTime}ms`,
        recommendations: [],
        lastUpdated: "Never"
      }, { status: 200 });
    }

    console.log(`MongoDB connected in ${dbConnection.connectionTime}ms`);

    // Get the 3 most recent audio analyses for the user with retry logic
    const queryResult = await handleMongoQuery(
      async () => {
        const analyses = await AudioAnalysis.find({
          clerkId: userId,
          // Ensure we have valid recommendation data
          'recommendations.performance_assessment': { $exists: true }
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
        recommendations: [],
        lastUpdated: "Never"
      }, { status: 200 });
    }

    const analyses = queryResult.data;
    console.log(`Found ${analyses.length} analyses with recommendation data`);

    // Process the data for the personalized recommendations widget
    const recommendationsData = processRecommendationsData(analyses);

    // Save to cache
    saveToCache(cacheKey, recommendationsData);

    return NextResponse.json(recommendationsData, { status: 200 });
  } catch (error) {
    console.error('Error fetching personalized recommendations:', error);
    return NextResponse.json({
      error: 'Failed to fetch personalized recommendations',
      recommendations: [],
      lastUpdated: "Never"
    }, { status: 200 }); // Return 200 with empty data instead of 500
  }
}

function processRecommendationsData(analyses) {
  if (!analyses || analyses.length === 0) {
    return {
      recommendations: [],
      lastUpdated: "Never"
    };
  }

  // Get the most recent analysis date
  const mostRecentAnalysis = analyses[0];
  const analysisDate = mostRecentAnalysis.analysisDate || mostRecentAnalysis.createdAt;
  const formattedDate = formatDate(analysisDate);

  // Collect all priority improvements and next steps from the analyses
  let allRecommendations = [];

  analyses.forEach(analysis => {
    // Get priority improvements
    const priorityImprovements = analysis.recommendations?.performance_assessment?.priority_improvements || [];

    priorityImprovements.forEach(improvement => {
      if (improvement && typeof improvement === 'object') {
        allRecommendations.push({
          type: 'priority',
          category: improvement.category || 'Speaking Improvement',
          issue: improvement.issue || '',
          guidance: improvement.guidance || '',
          impact: improvement.impact || '',
          source: 'priority_improvements',
          date: analysis.analysisDate || analysis.createdAt,
          analysisId: analysis._id.toString()
        });
      }
    });

    // Get next steps
    const nextSteps = analysis.recommendations?.development_plan?.next_steps || [];

    nextSteps.forEach(step => {
      if (step && typeof step === 'string') {
        // Parse the step if it's a string
        allRecommendations.push({
          type: 'next_step',
          category: 'Next Step',
          guidance: step,
          source: 'next_steps',
          date: analysis.analysisDate || analysis.createdAt,
          analysisId: analysis._id.toString()
        });
      } else if (step && typeof step === 'object') {
        // Handle if it's already an object
        allRecommendations.push({
          type: 'next_step',
          category: step.category || 'Next Step',
          guidance: step.description || step.guidance || '',
          source: 'next_steps',
          date: analysis.analysisDate || analysis.createdAt,
          analysisId: analysis._id.toString()
        });
      }
    });

    // Get growth areas
    const growthAreas = analysis.recommendations?.performance_assessment?.growth_areas || [];

    growthAreas.forEach(area => {
      if (area && typeof area === 'string') {
        // Parse the area if it's a string
        allRecommendations.push({
          type: 'growth_area',
          category: 'Growth Area',
          issue: area,
          guidance: generateGuidanceForGrowthArea(area),
          source: 'growth_areas',
          date: analysis.analysisDate || analysis.createdAt,
          analysisId: analysis._id.toString()
        });
      } else if (area && typeof area === 'object') {
        // Handle if it's already an object
        allRecommendations.push({
          type: 'growth_area',
          category: area.category || 'Growth Area',
          issue: area.description || area.issue || '',
          guidance: area.guidance || generateGuidanceForGrowthArea(area.description || area.issue || ''),
          source: 'growth_areas',
          date: analysis.analysisDate || analysis.createdAt,
          analysisId: analysis._id.toString()
        });
      }
    });
  });

  // Deduplicate recommendations based on content similarity
  const uniqueRecommendations = deduplicateRecommendations(allRecommendations);

  // Group recommendations by type
  const groupedRecommendations = {
    priority: [],
    next_step: [],
    growth_area: []
  };

  // Add recommendations to their respective groups
  uniqueRecommendations.forEach(rec => {
    if (groupedRecommendations[rec.type]) {
      groupedRecommendations[rec.type].push(rec);
    }
  });

  // Create a final array with recommendations grouped by type
  // Take at most 2 items from each type
  let finalRecommendations = [];

  // Add priority recommendations (up to 2)
  if (groupedRecommendations.priority.length > 0) {
    finalRecommendations.push(groupedRecommendations.priority[0]);
    if (groupedRecommendations.priority.length > 1) {
      finalRecommendations.push(groupedRecommendations.priority[1]);
    }
  }

  // Add next step recommendations (up to 2)
  if (groupedRecommendations.next_step.length > 0) {
    finalRecommendations.push(groupedRecommendations.next_step[0]);
    if (groupedRecommendations.next_step.length > 1) {
      finalRecommendations.push(groupedRecommendations.next_step[1]);
    }
  }

  // Add growth area recommendations (up to 2)
  if (groupedRecommendations.growth_area.length > 0) {
    finalRecommendations.push(groupedRecommendations.growth_area[0]);
    if (groupedRecommendations.growth_area.length > 1) {
      finalRecommendations.push(groupedRecommendations.growth_area[1]);
    }
  }

  console.log(`Processed ${finalRecommendations.length} recommendations for display`);

  return {
    recommendations: finalRecommendations,
    lastUpdated: formattedDate
  };
}

// Helper function to deduplicate recommendations
function deduplicateRecommendations(recommendations) {
  const seen = new Set();
  return recommendations.filter(rec => {
    // Create a key based on the content
    const key = `${rec.category}-${rec.issue}-${rec.guidance}`.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// Helper function to generate guidance for growth areas
function generateGuidanceForGrowthArea(area) {
  const areaLower = area.toLowerCase();

  // Map common growth areas to guidance
  if (areaLower.includes('pace') || areaLower.includes('speed') || areaLower.includes('rate')) {
    return "Practice varying your speaking pace. Record yourself and listen for sections that feel rushed or too slow.";
  }

  if (areaLower.includes('volume') || areaLower.includes('loudness')) {
    return "Work on volume control by practicing speaking at different volumes and recording yourself to find your optimal level.";
  }

  if (areaLower.includes('clarity') || areaLower.includes('articulation') || areaLower.includes('pronunciation')) {
    return "Improve clarity by practicing tongue twisters daily and recording yourself to identify unclear words or phrases.";
  }

  if (areaLower.includes('filler') || areaLower.includes('um') || areaLower.includes('uh')) {
    return "Reduce filler words by practicing pausing silently instead of saying 'um' or 'uh'. Record yourself and count filler words.";
  }

  if (areaLower.includes('vocabulary') || areaLower.includes('word choice')) {
    return "Expand your vocabulary by learning 3 new words each day and incorporating them into your practice sessions.";
  }

  if (areaLower.includes('confidence') || areaLower.includes('assertive')) {
    return "Build confidence by practicing power poses before speaking and focusing on maintaining good posture during delivery.";
  }

  // Default guidance
  return "Focus on this area by setting specific goals, practicing regularly, and seeking feedback from others.";
}

// Use the formatDateForDisplay function from apiUtils instead
function formatDate(date) {
  return formatDateForDisplay(date);
}
