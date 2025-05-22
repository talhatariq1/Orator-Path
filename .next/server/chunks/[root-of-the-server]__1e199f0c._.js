module.exports = {

"[project]/.next-internal/server/app/api/practice-sessions/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/mongoose [external] (mongoose, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}}),
"[project]/src/lib/mongodb/mongoose.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Check if we're running on the client side
__turbopack_context__.s({
    "connect": (()=>connect),
    "getConnectionMetrics": (()=>getConnectionMetrics),
    "isConnected": (()=>isConnected)
});
const isClient = "undefined" !== 'undefined';
// Only import mongoose on the server side
const mongoose = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/mongoose [external] (mongoose, cjs)") : ("TURBOPACK unreachable", undefined);
// Connection state tracking
let initialized = false;
let connectionPromise = null;
let connectionStartTime = 0;
let connectionAttempts = 0;
let connectionEstablished = false;
let lastConnectionTime = 0;
const MAX_RECONNECT_ATTEMPTS = 5;
const RECONNECT_INTERVAL = 1000; // 1 second (reduced from 2 seconds)
const CONNECTION_HEALTH_CHECK_INTERVAL = 30000; // 30 seconds
const connect = async (forceNew = false)=>{
    // If we're on the client side, return a mock connection
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    try {
        mongoose.set('strictQuery', true);
        // If already connected, return immediately unless forceNew is true
        if (!forceNew && mongoose.connection.readyState === 1) {
            console.log('MongoDB already connected (readyState: 1)');
            return mongoose.connection;
        }
        // If connection is in progress and we're not forcing a new one, return the existing promise
        if (!forceNew && connectionPromise) {
            console.log('MongoDB connection already in progress, reusing promise');
            return connectionPromise;
        }
        // Start connection timer
        connectionStartTime = Date.now();
        // Create a new connection promise
        connectionPromise = new Promise(async (resolve, reject)=>{
            try {
                console.log(`Connecting to MongoDB (attempt ${connectionAttempts + 1})...`);
                // Configure connection options with optimized settings
                const connection = await mongoose.connect(process.env.MONGODB_URI, {
                    dbName: 'orator-path',
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    connectTimeoutMS: 3000,
                    socketTimeoutMS: 45000,
                    // Connection pool settings
                    maxPoolSize: 15,
                    minPoolSize: 3,
                    maxIdleTimeMS: 60000,
                    serverSelectionTimeoutMS: 5000,
                    heartbeatFrequencyMS: 10000
                });
                const connectionTime = Date.now() - connectionStartTime;
                lastConnectionTime = connectionTime;
                console.log(`MongoDB connected successfully in ${connectionTime}ms`);
                // Reset connection attempts on successful connection
                connectionAttempts = 0;
                initialized = true;
                connectionEstablished = true;
                // Set up connection event handlers
                mongoose.connection.on('error', (err)=>{
                    console.error('MongoDB connection error:', err);
                    connectionEstablished = false;
                });
                mongoose.connection.on('disconnected', ()=>{
                    console.log('MongoDB disconnected, will attempt to reconnect');
                    initialized = false;
                    connectionPromise = null;
                    connectionEstablished = false;
                    // Only attempt reconnect if we haven't exceeded max attempts
                    if (connectionAttempts < MAX_RECONNECT_ATTEMPTS) {
                        connectionAttempts++;
                        setTimeout(()=>{
                            connect(true).catch((err)=>console.error('Reconnection failed:', err));
                        }, RECONNECT_INTERVAL * Math.min(connectionAttempts, 3)); // Cap backoff at 3x
                    } else {
                        console.error(`Exceeded maximum reconnection attempts (${MAX_RECONNECT_ATTEMPTS})`);
                        // Reset attempts after a longer delay to allow for recovery
                        setTimeout(()=>{
                            connectionAttempts = 0;
                            connect(true).catch((err)=>console.error('Recovery connection failed:', err));
                        }, 10000); // Try again after 10 seconds
                    }
                });
                // Add connected event handler
                mongoose.connection.on('connected', ()=>{
                    console.log('MongoDB connection established');
                    connectionEstablished = true;
                });
                resolve(connection);
            } catch (error) {
                console.error('MongoDB connection error:', error);
                // Reset connection promise so we can try again
                connectionPromise = null;
                connectionEstablished = false;
                // Only attempt reconnect if we haven't exceeded max attempts
                if (connectionAttempts < MAX_RECONNECT_ATTEMPTS) {
                    connectionAttempts++;
                    const backoffTime = RECONNECT_INTERVAL * Math.min(connectionAttempts, 3); // Cap backoff at 3x
                    console.log(`Connection failed, will retry in ${backoffTime}ms (attempt ${connectionAttempts}/${MAX_RECONNECT_ATTEMPTS})`);
                    setTimeout(()=>{
                        connect(true).catch((err)=>console.error('Retry connection failed:', err));
                    }, backoffTime);
                } else {
                    // Reset attempts after a longer delay to allow for recovery
                    setTimeout(()=>{
                        connectionAttempts = 0;
                        connect(true).catch((err)=>console.error('Recovery connection failed:', err));
                    }, 10000); // Try again after 10 seconds
                }
                reject(error);
            }
        });
        return connectionPromise;
    } catch (error) {
        console.error('Error in connect function:', error);
        return Promise.resolve({
            readyState: 0,
            error: true
        });
    }
};
// Warmup connection - connect as soon as the module is imported
if ("TURBOPACK compile-time truthy", 1) {
    console.log('Warming up MongoDB connection...');
    connect().catch((err)=>console.error('Initial connection warmup failed:', err));
    // Set up a periodic health check to ensure connection stays alive
    setInterval(()=>{
        if (!connectionEstablished || mongoose && mongoose.connection.readyState !== 1) {
            console.log('MongoDB connection health check: reconnecting...');
            connect(true).catch((err)=>console.error('Health check reconnection failed:', err));
        } else {
            console.log('MongoDB connection health check: connection is healthy');
        }
    }, CONNECTION_HEALTH_CHECK_INTERVAL);
}
const isConnected = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } // Always return true on client side
    return mongoose.connection.readyState === 1;
};
const getConnectionMetrics = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return {
        readyState: mongoose ? mongoose.connection.readyState : 0,
        initialized,
        connectionEstablished,
        lastConnectionTime,
        connectionAttempts
    };
};
}}),
"[project]/src/lib/models/audioAnalysis.model.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Path: oratorpath/src/lib/models/audioAnalysis.model.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const audioAnalysisSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    // Store the Clerk ID to link to the User model/collection
    // You might already have a User model that stores clerkId as a unique identifier.
    // If your User model's main identifier is clerkId, you can store that directly.
    // If User model uses MongoDB's _id and you want a direct reference:
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User', // Assuming your user model is named 'User'
    //   required: true,
    // },
    // For simplicity with Clerk, storing clerkId directly is often easier.
    clerkId: {
        type: String,
        required: true,
        index: true
    },
    fileName: {
        type: String,
        required: false
    },
    transcription: {
        type: String,
        required: false
    },
    transcriptAnalysis: {
        raw_transcription: String,
        contextual_issues: Array,
        coherence_score: Number
    },
    voiceAnalysis: {
        duration: Number,
        pitch: {
            average: Number,
            min: Number,
            max: Number,
            variability: Number
        },
        volume: {
            average: Number,
            variability: Number
        },
        speaking_rate: Number,
        tempo: Number,
        pauses: {
            count: Number,
            average_duration: Number
        },
        voice_quality: {
            spectral_contrast: Number,
            spectral_centroid: Number,
            spectral_bandwidth: Number
        },
        gender_estimation: {
            likely_gender: String,
            confidence: Number
        },
        error: String
    },
    textAnalysis: {
        text_statistics: {
            word_count: Number,
            sentence_count: Number,
            average_words_per_sentence: Number,
            vocabulary_richness: Number
        },
        filler_words: {
            total_count: Number,
            percentage: Number,
            occurrences: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed
        },
        transition_words: {
            total_count: Number,
            percentage: Number,
            occurrences: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed
        },
        sentiment_analysis: {
            polarity: Number,
            subjectivity: Number,
            label: String
        },
        emotion_analysis: {
            primary_emotion: String,
            secondary_emotion: String,
            emotion_summary: String,
            emotion_distribution: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed,
            emotion_counts: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed
        },
        content_analysis: {
            most_common_words: Array,
            noun_verb_ratio: Number,
            repetitions: Array,
            hesitation_patterns: Number
        },
        readability: {
            flesch_reading_ease: Number,
            reading_level: String
        },
        named_entities: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed,
        error: String
    },
    recommendations: {
        recommendations: Array,
        performance_assessment: {
            overall_score: Number,
            performance_level: String,
            performance_description: String,
            strengths: Array,
            detailed_strengths: Array,
            growth_areas: Array,
            score_breakdown: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed,
            priority_improvements: Array
        },
        development_plan: {
            next_steps: Array,
            development_pathway: Array,
            tracking_template: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed
        }
    },
    analysisDate: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
} // Adds createdAt and updatedAt timestamps automatically
);
// Add an index on clerkId and analysisDate for efficient querying of user's history
audioAnalysisSchema.index({
    clerkId: 1,
    analysisDate: -1
});
const AudioAnalysis = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.AudioAnalysis || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('AudioAnalysis', audioAnalysisSchema);
const __TURBOPACK__default__export__ = AudioAnalysis;
}}),
"[project]/src/app/api/practice-sessions/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongodb/mongoose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$audioAnalysis$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/audioAnalysis.model.js [app-route] (ecmascript)");
;
;
;
;
async function GET(request) {
    // Log request ID for debugging
    const { searchParams } = new URL(request.url);
    const requestId = searchParams.get('requestId') || 'unknown';
    console.log(`Processing practice sessions request: ${requestId}`);
    try {
        // Get the current user from Clerk
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["currentUser"])();
        if (!user) {
            console.log(`Authentication failed for request: ${requestId}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Authentication required'
            }, {
                status: 401,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                }
            });
        }
        const userId = user.id;
        console.log(`User authenticated: ${userId} (request: ${requestId})`);
        // Parse query parameters
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const sortBy = searchParams.get('sortBy') || 'analysisDate';
        const sortOrder = searchParams.get('sortOrder') || 'desc';
        const searchQuery = searchParams.get('search') || '';
        const filterType = searchParams.get('filterType') || '';
        const minScore = searchParams.get('minScore') ? parseInt(searchParams.get('minScore')) : null;
        const maxScore = searchParams.get('maxScore') ? parseInt(searchParams.get('maxScore')) : null;
        const startDate = searchParams.get('startDate') || '';
        const endDate = searchParams.get('endDate') || '';
        // Connect to MongoDB
        console.log(`Connecting to MongoDB (request: ${requestId})`);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"])();
            console.log(`MongoDB connection successful (request: ${requestId})`);
        } catch (dbError) {
            console.error(`MongoDB connection error (request: ${requestId}):`, dbError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Database connection failed',
                details: dbError.message,
                sessions: []
            }, {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                }
            });
        }
        // Build the query
        const query = {
            clerkId: userId
        };
        // Add search functionality
        if (searchQuery) {
            query.$or = [
                {
                    fileName: {
                        $regex: searchQuery,
                        $options: 'i'
                    }
                },
                {
                    transcription: {
                        $regex: searchQuery,
                        $options: 'i'
                    }
                }
            ];
        }
        // Add date range filter
        if (startDate && endDate) {
            query.analysisDate = {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            };
        } else if (startDate) {
            query.analysisDate = {
                $gte: new Date(startDate)
            };
        } else if (endDate) {
            query.analysisDate = {
                $lte: new Date(endDate)
            };
        }
        // Add score range filter
        if (minScore !== null || maxScore !== null) {
            query['recommendations.performance_assessment.overall_score'] = {};
            if (minScore !== null) {
                query['recommendations.performance_assessment.overall_score'].$gte = minScore;
            }
            if (maxScore !== null) {
                query['recommendations.performance_assessment.overall_score'].$lte = maxScore;
            }
        }
        // Removed score-based filtering as per redesign
        // Calculate skip value for pagination
        const skip = (page - 1) * limit;
        // Determine sort direction
        const sortDirection = sortOrder === 'asc' ? 1 : -1;
        // Create sort object
        const sort = {};
        sort[sortBy] = sortDirection;
        // Get total count for pagination
        const totalCount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$audioAnalysis$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments(query);
        // Fetch practice sessions with pagination and sorting
        const sessions = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$audioAnalysis$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find(query).sort(sort).skip(skip).limit(limit);
        // Transform the data to include only necessary fields
        const transformedSessions = sessions.map((session)=>{
            // Format date
            const analysisDate = new Date(session.analysisDate || session.createdAt);
            const formattedDate = analysisDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            // Format time
            const formattedTime = analysisDate.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
            });
            // Calculate duration in minutes and seconds
            const durationSeconds = session.voiceAnalysis?.duration || 0;
            const minutes = Math.floor(durationSeconds / 60);
            const seconds = Math.floor(durationSeconds % 60);
            const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            // Get overall score
            const overallScore = session.recommendations?.performance_assessment?.overall_score || 0;
            // Get word count
            const wordCount = session.textAnalysis?.text_statistics?.word_count || 0;
            // Get speaking rate
            const speakingRate = session.voiceAnalysis?.speaking_rate || 0;
            // Get coherence score (clarity)
            const coherenceScore = session.transcriptAnalysis?.coherence_score || 0;
            // Get vocabulary richness
            const vocabularyRichness = session.textAnalysis?.text_statistics?.vocabulary_richness || 0;
            // Get filler words count
            const fillerWordsCount = session.textAnalysis?.filler_words?.total_count || 0;
            // Get emotion
            const primaryEmotion = session.textAnalysis?.emotion_analysis?.primary_emotion || '';
            // Get strengths and growth areas
            const strengths = session.recommendations?.performance_assessment?.strengths || [];
            const growthAreas = session.recommendations?.performance_assessment?.growth_areas || [];
            // Get performance level
            const performanceLevel = session.recommendations?.performance_assessment?.performance_level || '';
            return {
                id: session._id.toString(),
                title: session.fileName || `Practice Session ${formattedDate}`,
                date: formattedDate,
                time: formattedTime,
                timestamp: analysisDate.getTime(),
                duration: formattedDuration,
                durationSeconds: durationSeconds,
                score: Math.round(overallScore),
                wordCount: wordCount,
                speakingRate: speakingRate.toFixed(1),
                coherenceScore: coherenceScore.toFixed(2),
                vocabularyRichness: vocabularyRichness.toFixed(2),
                fillerWordsCount: fillerWordsCount,
                emotion: primaryEmotion,
                strengths: strengths,
                growthAreas: growthAreas,
                performanceLevel: performanceLevel,
                transcription: session.transcription || '',
                hasTranscript: !!session.transcription,
                hasVoiceAnalysis: !!session.voiceAnalysis,
                hasTextAnalysis: !!session.textAnalysis,
                hasRecommendations: !!session.recommendations
            };
        });
        // Calculate pagination info
        const totalPages = Math.ceil(totalCount / limit);
        const hasNextPage = page < totalPages;
        const hasPrevPage = page > 1;
        console.log(`Successfully fetched ${transformedSessions.length} sessions (request: ${requestId})`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            sessions: transformedSessions,
            pagination: {
                currentPage: page,
                totalPages,
                totalCount,
                hasNextPage,
                hasPrevPage
            }
        }, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
    } catch (error) {
        console.error(`Error fetching practice sessions (request: ${requestId}):`, error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch practice sessions',
            details: error.message,
            sessions: []
        }, {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__1e199f0c._.js.map