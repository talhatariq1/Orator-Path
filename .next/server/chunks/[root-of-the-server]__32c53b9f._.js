module.exports = {

"[project]/.next-internal/server/app/api/speech-metrics/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
__turbopack_context__.s({
    "connect": (()=>connect)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
let initialized = false;
const connect = async ()=>{
    __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].set('strictQuery', true);
    if (initialized) {
        console.log('MongoDB already connected');
        return;
    }
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(process.env.MONGODB_URI, {
            dbName: 'orator-path',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
        initialized = true;
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
};
console.log('MONGODB_URI:', process.env.MONGODB_URI);
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
"[project]/src/app/api/speech-metrics/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
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
// Helper function to format date in a user-friendly way
function formatDateForDisplay(date) {
    if (!date) return "Never";
    const dateObj = new Date(date);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    // Format time
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;
    // Check if date is today
    if (dateObj.getDate() === today.getDate() && dateObj.getMonth() === today.getMonth() && dateObj.getFullYear() === today.getFullYear()) {
        return `Today at ${timeString}`;
    }
    // Check if date is yesterday
    if (dateObj.getDate() === yesterday.getDate() && dateObj.getMonth() === yesterday.getMonth() && dateObj.getFullYear() === yesterday.getFullYear()) {
        return `Yesterday at ${timeString}`;
    }
    // For other dates
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    return `${monthNames[dateObj.getMonth()]} ${dateObj.getDate()} at ${timeString}`;
}
async function GET() {
    try {
        // Get the current user from Clerk
        let user;
        try {
            user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["currentUser"])();
            if (!user) {
                console.log('No authenticated user found');
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Authentication required',
                    metrics: [],
                    lastUpdated: "Never",
                    isLatestSession: false
                }, {
                    status: 200
                });
            }
        } catch (authError) {
            console.error('Error getting current user:', authError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Authentication error',
                metrics: [],
                lastUpdated: "Never",
                isLatestSession: false
            }, {
                status: 200
            });
        }
        const userId = user.id;
        console.log('Fetching speech metrics for user:', userId);
        // Connect to MongoDB
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"])();
            console.log('Connected to MongoDB successfully');
        } catch (dbError) {
            console.error('MongoDB connection error:', dbError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Database connection failed',
                metrics: [],
                lastUpdated: "Never",
                isLatestSession: false
            }, {
                status: 200
            });
        }
        // Get the most recent audio analysis for the user
        try {
            // Ensure we're getting the most recent analysis by sorting by analysisDate in descending order
            // Use createdAt as a fallback sort field to ensure we get the latest record
            const latestAnalysis = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$audioAnalysis$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                clerkId: userId,
                // Ensure we have valid data in the analysis
                transcriptAnalysis: {
                    $exists: true
                },
                voiceAnalysis: {
                    $exists: true
                }
            }).sort({
                analysisDate: -1,
                createdAt: -1
            });
            console.log('Latest analysis found:', latestAnalysis ? 'Yes' : 'No');
            // Log more details about the found analysis to help with debugging
            if (latestAnalysis) {
                console.log('Analysis ID:', latestAnalysis._id);
                console.log('Analysis Date:', latestAnalysis.analysisDate);
                console.log('Has transcript analysis:', !!latestAnalysis.transcriptAnalysis);
                console.log('Has voice analysis:', !!latestAnalysis.voiceAnalysis);
                console.log('Has text analysis:', !!latestAnalysis.textAnalysis);
            }
            if (!latestAnalysis) {
                console.log('No analysis found for user, returning default values');
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    metrics: [
                        {
                            label: "Coherence",
                            value: 0,
                            description: "No data available",
                            rawValue: 0
                        },
                        {
                            label: "Overall Score",
                            value: 0,
                            description: "No data available",
                            rawValue: 0
                        },
                        {
                            label: "Clarity",
                            value: 0.0,
                            description: "No data available",
                            rawValue: 0
                        },
                        {
                            label: "Vocabulary",
                            value: 0.00,
                            description: "No data available",
                            rawValue: 0
                        }
                    ],
                    // Overall score is now included as a metric
                    lastUpdated: "Never",
                    isLatestSession: true
                }, {
                    status: 200
                });
            }
            // Extract the actual timestamp from the database
            const analysisDate = latestAnalysis.analysisDate || latestAnalysis.createdAt;
            const formattedDate = formatDateForDisplay(analysisDate);
            console.log('Analysis date:', formattedDate);
            // Extract metrics from the latest session with detailed logging
            console.log('Extracting metrics from latest session...');
            // Extract coherence score
            const rawCoherenceScore = latestAnalysis.transcriptAnalysis?.coherence_score;
            console.log('Raw coherence score:', rawCoherenceScore);
            const coherenceScore = rawCoherenceScore !== undefined ? Math.round(rawCoherenceScore) : 0;
            console.log('Processed coherence score:', coherenceScore);
            // Extract speaking rate
            const rawSpeakingRate = latestAnalysis.voiceAnalysis?.speaking_rate;
            console.log('Raw speaking rate:', rawSpeakingRate);
            const speakingRate = rawSpeakingRate !== undefined ? parseFloat(rawSpeakingRate.toFixed(1)) : 0;
            console.log('Processed speaking rate:', speakingRate);
            // Extract pitch variability
            const rawPitchVariability = latestAnalysis.voiceAnalysis?.pitch?.variability;
            console.log('Raw pitch variability:', rawPitchVariability);
            const pitchVariability = rawPitchVariability !== undefined ? Math.round(Math.min(100, rawPitchVariability * 10)) : 0;
            console.log('Processed pitch variability score:', pitchVariability);
            // Extract clarity score (using readability data)
            const rawClarity = latestAnalysis.textAnalysis?.readability?.flesch_reading_ease;
            console.log('Raw clarity score:', rawClarity);
            const clarity = rawClarity !== undefined ? parseFloat(rawClarity.toFixed(1)) : 0;
            console.log('Processed clarity score:', clarity);
            // Extract vocabulary richness
            const rawVocabulary = latestAnalysis.textAnalysis?.text_statistics?.vocabulary_richness;
            console.log('Raw vocabulary richness:', rawVocabulary);
            const vocabulary = rawVocabulary !== undefined ? parseFloat(rawVocabulary.toFixed(2)) : 0;
            console.log('Processed vocabulary score:', vocabulary);
            // Extract overall score from performance assessment
            const overallScore = latestAnalysis.recommendations?.performance_assessment?.overall_score;
            console.log('Overall score from database:', overallScore);
            // Create the response object with metrics data
            console.log('Creating response object with metrics data');
            const speechMetrics = {
                metrics: [
                    {
                        label: "Coherence",
                        value: coherenceScore,
                        description: getCoherenceDescription(coherenceScore),
                        rawValue: rawCoherenceScore
                    },
                    {
                        label: "Overall Score",
                        value: overallScore !== undefined ? Math.round(overallScore) : 0,
                        description: getOverallScoreDescription(overallScore),
                        rawValue: overallScore
                    },
                    {
                        label: "Clarity",
                        value: clarity,
                        description: getClarityDescription(clarity),
                        rawValue: rawClarity
                    },
                    {
                        label: "Vocabulary",
                        value: vocabulary,
                        description: getVocabularyDescription(vocabulary),
                        rawValue: rawVocabulary
                    }
                ],
                // Overall score is now included as a metric
                lastUpdated: formattedDate,
                isLatestSession: true,
                rawDate: analysisDate,
                analysisId: latestAnalysis._id.toString(),
                source: "latest_practice_session" // Explicitly indicate the data source
            };
            console.log('Final metrics data:', JSON.stringify(speechMetrics.metrics));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(speechMetrics, {
                status: 200
            });
        } catch (queryError) {
            console.error('Error querying audio analysis:', queryError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to retrieve audio analysis data',
                metrics: [],
                lastUpdated: "Never",
                isLatestSession: false
            }, {
                status: 200
            });
        }
    } catch (error) {
        console.error('Error in speech metrics API:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch speech metrics',
            metrics: [],
            lastUpdated: "Never",
            isLatestSession: false
        }, {
            status: 200
        });
    }
}
// Helper function to calculate speaking rate score
function calculateSpeakingRateScore(speakingRate) {
    if (speakingRate === undefined) return 0;
    // Convert speaking rate to a score (assuming ideal range is 120-160 words per minute)
    const idealLow = 120;
    const idealHigh = 160;
    if (speakingRate >= idealLow && speakingRate <= idealHigh) {
        return 85; // Ideal range
    } else {
        // Calculate how far from ideal range
        const deviation = speakingRate < idealLow ? idealLow - speakingRate : speakingRate - idealHigh;
        const maxDeviation = 50; // Maximum deviation to consider
        return Math.max(60, 85 - deviation / maxDeviation * 25);
    }
}
// Helper functions for descriptions
function getCoherenceDescription(score) {
    if (score === 0) return "No coherence data available from your latest practice session.";
    if (score >= 70) return "Your speech is highly coherent with well-connected ideas and logical flow.";
    if (score >= 65) return "Your speech has good coherence with mostly connected ideas.";
    if (score >= 60) return "Your speech has moderate coherence with some connected ideas.";
    return "Your speech could benefit from improved coherence and logical connections between ideas.";
}
function getOverallScoreDescription(score) {
    if (score === undefined) return "No overall score data available from your latest practice session.";
    const roundedScore = Math.round(score);
    if (roundedScore >= 90) return `Your overall performance score is ${roundedScore}, which is excellent.`;
    if (roundedScore >= 80) return `Your overall performance score is ${roundedScore}, which is very good.`;
    if (roundedScore >= 70) return `Your overall performance score is ${roundedScore}, which is good.`;
    if (roundedScore >= 60) return `Your overall performance score is ${roundedScore}, which is satisfactory.`;
    if (roundedScore >= 50) return `Your overall performance score is ${roundedScore}, which needs some improvement.`;
    return `Your overall performance score is ${roundedScore}, which indicates significant room for improvement.`;
}
function getPitchVariabilityDescription(score) {
    if (score === 0) return "No pitch variability data available from your latest practice session.";
    if (score >= 80) return "Your speech has excellent pitch variation, making it engaging and expressive.";
    if (score >= 70) return "Your speech has good pitch variation, helping to maintain listener interest.";
    if (score >= 60) return "Your speech has moderate pitch variation.";
    return "Your speech could benefit from more varied pitch to sound more engaging.";
}
function getClarityDescription(score) {
    if (score === 0) return "No clarity data available from your latest practice session.";
    // Flesch Reading Ease score interpretation for clarity
    // 90-100: Very Easy
    // 80-89: Easy
    // 70-79: Fairly Easy
    // 60-69: Standard
    // 50-59: Fairly Difficult
    // 30-49: Difficult
    // 0-29: Very Confusing
    if (score >= 90) return `Your clarity score is ${score.toFixed(1)}, indicating very clear and easy to understand content.`;
    if (score >= 80) return `Your clarity score is ${score.toFixed(1)}, indicating clear and easy to understand content.`;
    if (score >= 70) return `Your clarity score is ${score.toFixed(1)}, indicating fairly clear content.`;
    if (score >= 60) return `Your clarity score is ${score.toFixed(1)}, indicating standard clarity.`;
    if (score >= 50) return `Your clarity score is ${score.toFixed(1)}, indicating somewhat unclear content.`;
    if (score >= 30) return `Your clarity score is ${score.toFixed(1)}, indicating unclear content that may be hard for some to understand.`;
    return `Your clarity score is ${score.toFixed(1)}, indicating very unclear content that may be challenging to understand.`;
}
function getVocabularyDescription(score) {
    if (score === 0) return "No vocabulary data available from your latest practice session.";
    // Convert score to a percentage for comparison (since we're now using the raw value)
    const scorePercentage = score * 100;
    if (scorePercentage >= 80) return `Your vocabulary richness score is ${score.toFixed(2)}, indicating a rich and diverse vocabulary.`;
    if (scorePercentage >= 70) return `Your vocabulary richness score is ${score.toFixed(2)}, showing a good variety of words.`;
    if (scorePercentage >= 60) return `Your vocabulary richness score is ${score.toFixed(2)}, indicating a moderate variety of words.`;
    return `Your vocabulary richness score is ${score.toFixed(2)}. Your speech could benefit from a more diverse vocabulary.`;
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__32c53b9f._.js.map