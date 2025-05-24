import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { connectToMongoDB, handleMongoQuery } from '../../../../lib/api/apiUtils';
import AudioAnalysis from '../../../../lib/models/audioAnalysis.model';
import mongoose from 'mongoose';

/**
 * GET handler for fetching a single practice session by ID
 */
export async function GET(request, context) {
  // Generate a unique request ID for tracking
  const requestId = Math.random().toString(36).substring(2, 10);

  try {
    // Extract the session ID from params
    const params = await context.params;
    const sessionId = params.id;
    console.log(`[${requestId}] Practice session detail API request started for ID: ${sessionId}`);

    // Get the current user from Clerk
    const user = await currentUser();
    if (!user) {
      console.log(`[${requestId}] No authenticated user found`);
      return NextResponse.json({
        error: 'Authentication required',
        success: false
      }, { status: 401 });
    }

    const userId = user.id;
    console.log(`[${requestId}] User authenticated: ${userId}`);

    // Validate the practice session ID
    if (!sessionId || !mongoose.Types.ObjectId.isValid(sessionId)) {
      console.log(`[${requestId}] Invalid practice session ID: ${sessionId}`);
      return NextResponse.json({
        error: 'Invalid practice session ID',
        success: false
      }, { status: 400 });
    }

    // Connect to MongoDB with optimized settings
    const dbConnection = await connectToMongoDB(3000); // 3 second timeout
    if (!dbConnection.success) {
      console.log(`[${requestId}] MongoDB connection failed after ${dbConnection.failureTime}ms: ${dbConnection.error}`);
      return NextResponse.json({
        error: `Database connection failed after ${dbConnection.failureTime}ms`,
        success: false
      }, { status: 500 });
    }

    console.log(`[${requestId}] MongoDB connected in ${dbConnection.connectionTime}ms`);

    // Get the practice session by ID with enhanced retry logic
    const cacheKey = `practice-session-${userId}-${sessionId}`;
    console.log(`[${requestId}] Using cache key: ${cacheKey}`);

    const queryResult = await handleMongoQuery(
      async () => {
        // Find the practice session by ID and ensure it belongs to the current user
        console.log(`[${requestId}] Querying MongoDB for session ID: ${sessionId}`);
        const session = await AudioAnalysis.findOne({
          _id: sessionId,
          clerkId: userId
        }).lean(); // Use lean() for better performance

        return session;
      },
      'Failed to fetch practice session',
      {
        maxRetries: 2,        // Retry up to 2 times
        retryDelay: 300,      // 300ms delay before retry
        timeout: 3000,        // 3 second timeout
        cacheKey: cacheKey,
        useCache: true
      }
    );

    // Check if the query was successful
    if (!queryResult.success) {
      console.log(`[${requestId}] Error fetching practice session: ${queryResult.error}`);
      return NextResponse.json({
        error: 'Failed to fetch practice session',
        success: false
      }, { status: 500 });
    }

    // Check if the practice session exists
    const session = queryResult.data;
    if (!session) {
      console.log(`[${requestId}] Practice session not found: ${params.id}`);
      return NextResponse.json({
        error: 'Practice session not found',
        success: false
      }, { status: 404 });
    }

    // Format the practice session data
    const analysisDate = session.analysisDate || new Date();
    const formattedDate = analysisDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    const formattedTime = analysisDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    // Calculate duration in minutes and seconds
    const durationSeconds = session.voiceAnalysis?.duration || 0;
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Get overall score
    const overallScore = session.recommendations?.performance_assessment?.overall_score || 0;

    // Return the formatted practice session data with all analysis details
    return NextResponse.json({
      success: true,
      session: {
        id: session._id.toString(),
        title: session.fileName || `Practice Session ${formattedDate}`,
        date: formattedDate,
        time: formattedTime,
        timestamp: analysisDate.getTime(),
        duration: formattedDuration,
        durationSeconds: durationSeconds,
        score: Math.round(overallScore),
        overallScore: overallScore,
        analysisDate: formattedDate + ' ' + formattedTime,
        // Include full analysis data
        transcription: session.transcription || '',
        transcriptAnalysis: session.transcriptAnalysis || {},
        voiceAnalysis: session.voiceAnalysis || {},
        textAnalysis: session.textAnalysis || {},
        recommendations: session.recommendations || {}
      }
    }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    });
  } catch (error) {
    console.log(`[${requestId}] Error processing practice session request:`, error.message || 'Unknown error');
    return NextResponse.json({
      error: 'Failed to fetch practice session',
      success: false
    }, { status: 500 });
  }
}
