import { NextResponse } from 'next/server';
import SpeakingTip from '../../../lib/models/speakingTip.model';
import {
  connectToMongoDB,
  getFromCache,
  saveToCache,
  generateCacheKey,
  handleMongoQuery
} from '../../../lib/api/apiUtils';

// Default tips to use if database tips cannot be retrieved
const defaultTips = [
  {
    content: "When speaking, aim for clarity over complexity. Simple, well-articulated ideas often have more impact than verbose explanations.",
    dayOfWeek: 0, // Sunday
    dayName: "Sunday"
  },
  {
    content: "Practice the 'pause technique' - strategic pauses create emphasis, give your audience time to absorb information, and help you appear more confident and thoughtful.",
    dayOfWeek: 1, // Monday
    dayName: "Monday"
  },
  {
    content: "Make eye contact with different sections of your audience. This creates connection and ensures everyone feels included in your message.",
    dayOfWeek: 2, // Tuesday
    dayName: "Tuesday"
  },
  {
    content: "Start with a strong hook - a surprising statistic, a compelling story, or a thought-provoking question can immediately capture your audience's attention.",
    dayOfWeek: 3, // Wednesday
    dayName: "Wednesday"
  },
  {
    content: "End your speeches with a clear call-to-action. Tell your audience exactly what you want them to do, think, or feel after listening to you.",
    dayOfWeek: 4, // Thursday
    dayName: "Thursday"
  },
  {
    content: "Use the 'rule of three' in your presentations - grouping ideas in threes makes them more engaging, memorable, and effective.",
    dayOfWeek: 5, // Friday
    dayName: "Friday"
  },
  {
    content: "Record yourself speaking and analyze your body language. Your nonverbal communication often speaks louder than your words.",
    dayOfWeek: 6, // Saturday
    dayName: "Saturday"
  }
];

// Function to seed the database with default tips if none exist
async function seedTipsIfNeeded() {
  try {
    // Use handleMongoQuery for better error handling
    const queryResult = await handleMongoQuery(async () => {
      // Check if tips already exist
      const existingTipsCount = await SpeakingTip.countDocuments();

      if (existingTipsCount === 0) {
        console.log('No speaking tips found in database. Seeding with default tips...');
        await SpeakingTip.insertMany(defaultTips);
        console.log('Successfully seeded speaking tips database');
        return true;
      } else {
        console.log(`Found ${existingTipsCount} speaking tips in database`);
        return false;
      }
    }, 'Failed to seed speaking tips');

    if (!queryResult.success) {
      console.error('Error seeding tips:', queryResult.error);
    }

    return queryResult.success;
  } catch (error) {
    console.error('Error seeding speaking tips:', error);
    return false;
  }
}

export async function GET() {
  try {
    // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
    const currentDayOfWeek = new Date().getDay();

    // Check cache first - daily tips can be cached for longer periods
    const cacheKey = generateCacheKey('global', 'daily-speaking-tip', { day: currentDayOfWeek });
    const cachedData = getFromCache(cacheKey, 12 * 60 * 60 * 1000); // 12 hour cache

    if (cachedData) {
      console.log('Returning cached daily speaking tip');
      return NextResponse.json(cachedData);
    }

    // Connect to MongoDB with a longer timeout for more reliability
    const dbConnection = await connectToMongoDB(5000); // 5 second timeout for daily tips
    if (!dbConnection.success) {
      console.error(`MongoDB connection failed after ${dbConnection.failureTime}ms:`, dbConnection.error);

      // Fallback to default tip
      const defaultTip = defaultTips.find(t => t.dayOfWeek === currentDayOfWeek);
      const defaultResponse = {
        tip: {
          content: defaultTip.content,
          dayOfWeek: defaultTip.dayOfWeek,
          dayName: defaultTip.dayName,
          isFromDefault: true
        },
        currentDay: currentDayOfWeek,
        dayName: defaultTip.dayName,
        status: 'error',
        message: `Database connection failed after ${dbConnection.failureTime}ms, using default tip`,
        source: 'default'
      };

      // Even default responses can be cached
      saveToCache(cacheKey, defaultResponse);

      return NextResponse.json(defaultResponse);
    }

    console.log(`MongoDB connected in ${dbConnection.connectionTime}ms`);

    // Seed tips if needed
    await seedTipsIfNeeded();

    // Try to get the tip for the current day from the database with retry logic
    const queryResult = await handleMongoQuery(
      async () => {
        return await SpeakingTip.findOne({ dayOfWeek: currentDayOfWeek }).lean();
      },
      'Failed to query speaking tip',
      {
        maxRetries: 2,        // Retry twice
        retryDelay: 500,      // 500ms delay before retry
        timeout: 3000         // 3 second timeout for better reliability
      }
    );

    if (!queryResult.success) {
      console.error('Query error:', queryResult.error);

      // Fallback to default tip
      const defaultTip = defaultTips.find(t => t.dayOfWeek === currentDayOfWeek);
      const errorResponse = {
        tip: {
          content: defaultTip.content,
          dayOfWeek: defaultTip.dayOfWeek,
          dayName: defaultTip.dayName,
          isFromDefault: true
        },
        currentDay: currentDayOfWeek,
        dayName: defaultTip.dayName,
        status: 'error',
        message: 'Failed to fetch tip from database, using default tip',
        source: 'default'
      };

      // Cache the error response too
      saveToCache(cacheKey, errorResponse);

      return NextResponse.json(errorResponse);
    }

    const tip = queryResult.data;

    // If no tip is found for the current day, use the default tip for that day
    if (!tip) {
      console.log(`No tip found for day ${currentDayOfWeek}, using default tip`);
      const defaultTip = defaultTips.find(t => t.dayOfWeek === currentDayOfWeek);

      const defaultResponse = {
        tip: {
          content: defaultTip.content,
          dayOfWeek: defaultTip.dayOfWeek,
          dayName: defaultTip.dayName,
          isFromDefault: true
        },
        currentDay: currentDayOfWeek,
        dayName: defaultTip.dayName,
        status: 'success',
        source: 'default'
      };

      // Cache the default response
      saveToCache(cacheKey, defaultResponse);

      return NextResponse.json(defaultResponse);
    }

    // Return the tip from the database
    const successResponse = {
      tip: {
        content: tip.content,
        dayOfWeek: tip.dayOfWeek,
        dayName: tip.dayName,
        id: tip._id.toString()
      },
      currentDay: currentDayOfWeek,
      dayName: tip.dayName,
      status: 'success',
      source: 'database'
    };

    // Cache the successful response
    saveToCache(cacheKey, successResponse);

    return NextResponse.json(successResponse);

  } catch (error) {
    console.error('Error fetching daily speaking tip:', error);

    // Fallback to default tip for the current day
    const currentDayOfWeek = new Date().getDay();
    const defaultTip = defaultTips.find(t => t.dayOfWeek === currentDayOfWeek);

    return NextResponse.json({
      tip: {
        content: defaultTip.content,
        dayOfWeek: defaultTip.dayOfWeek,
        dayName: defaultTip.dayName,
        isFromDefault: true
      },
      currentDay: currentDayOfWeek,
      dayName: defaultTip.dayName,
      status: 'error',
      message: 'Failed to fetch tip from database, using default tip',
      source: 'default'
    });
  }
}

// POST endpoint to initialize or update tips
export async function POST(req) {
  try {
    // Connect to MongoDB with a shorter timeout
    const dbConnection = await connectToMongoDB(3000); // 3 second timeout
    if (!dbConnection.success) {
      console.error(`MongoDB connection failed after ${dbConnection.failureTime}ms:`, dbConnection.error);
      return NextResponse.json({
        status: 'error',
        message: `Database connection failed after ${dbConnection.failureTime}ms`,
        error: dbConnection.error
      }, { status: 500 });
    }

    console.log(`MongoDB connected in ${dbConnection.connectionTime}ms`);

    const data = await req.json();

    // If the request includes a reset flag, delete all existing tips
    if (data.reset) {
      const deleteResult = await handleMongoQuery(async () => {
        const result = await SpeakingTip.deleteMany({});
        return result;
      }, 'Failed to delete existing tips');

      if (!deleteResult.success) {
        return NextResponse.json({
          status: 'error',
          message: 'Failed to reset speaking tips',
          error: deleteResult.error
        }, { status: 500 });
      }

      console.log('Deleted all existing speaking tips');
    }

    // If the request includes tips, insert them
    if (data.tips && Array.isArray(data.tips)) {
      // Validate tips
      const validTips = data.tips.filter(tip =>
        tip.content &&
        typeof tip.dayOfWeek === 'number' &&
        tip.dayOfWeek >= 0 &&
        tip.dayOfWeek <= 6 &&
        tip.dayName
      );

      if (validTips.length > 0) {
        const updateResult = await handleMongoQuery(async () => {
          // Use updateOne with upsert for each tip to avoid duplicates
          for (const tip of validTips) {
            await SpeakingTip.updateOne(
              { dayOfWeek: tip.dayOfWeek },
              {
                $set: {
                  content: tip.content,
                  dayName: tip.dayName,
                  updatedAt: new Date()
                }
              },
              { upsert: true }
            );
          }
          return validTips.length;
        }, 'Failed to update speaking tips');

        if (!updateResult.success) {
          return NextResponse.json({
            status: 'error',
            message: 'Failed to update speaking tips',
            error: updateResult.error
          }, { status: 500 });
        }

        console.log(`Updated ${updateResult.data} speaking tips`);
      }
    } else if (!data.reset) {
      // If no tips provided and not resetting, seed with default tips
      await seedTipsIfNeeded();
    }

    // Return the current tips
    const tipsResult = await handleMongoQuery(async () => {
      return await SpeakingTip.find().sort({ dayOfWeek: 1 }).lean();
    }, 'Failed to retrieve current tips');

    if (!tipsResult.success) {
      return NextResponse.json({
        status: 'error',
        message: 'Failed to retrieve current tips',
        error: tipsResult.error
      }, { status: 500 });
    }

    const currentTips = tipsResult.data;

    // Clear cache for all days of the week
    for (let day = 0; day <= 6; day++) {
      const cacheKey = generateCacheKey('global', 'daily-speaking-tip', { day });
      // No need to await this operation
      saveToCache(cacheKey, null);
    }

    return NextResponse.json({
      tips: currentTips.map(tip => ({
        id: tip._id.toString(),
        content: tip.content,
        dayOfWeek: tip.dayOfWeek,
        dayName: tip.dayName
      })),
      status: 'success',
      message: 'Speaking tips updated successfully'
    });

  } catch (error) {
    console.error('Error updating speaking tips:', error);

    return NextResponse.json({
      status: 'error',
      message: 'Failed to update speaking tips',
      error: error.message
    }, { status: 500 });
  }
}
