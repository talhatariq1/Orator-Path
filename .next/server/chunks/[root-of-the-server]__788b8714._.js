module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/index.js [app-route] (ecmascript) <exports>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongodb/mongoose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$audioAnalysis$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/audioAnalysis.model.js [app-route] (ecmascript)");
;
;
;
;
async function GET() {
    try {
        // Get the current user from Clerk
        let user;
        try {
            user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["currentUser"])();
            if (!user) {
                console.log('No authenticated user found');
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Authentication required',
                    metrics: [],
                    lastUpdated: "Never",
                    isLatestSession: false
                }, {
                    status: 200
                }); // Return 200 with empty data
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
            }); // Return 200 with empty data
        }
        const userId = user.id;
        console.log('Fetching speech metrics for user:', userId);
        // Check if MongoDB URI is defined
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI environment variable is not defined');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Database configuration missing',
                metrics: [],
                lastUpdated: "Never",
                isLatestSession: false
            }, {
                status: 200
            }); // Return 200 with empty data
        }
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
            }); // Return 200 with empty data
        }
        // Get only the most recent audio analysis for the user
        try {
            const latestAnalysis = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$audioAnalysis$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                clerkId: userId
            }).sort({
                analysisDate: -1
            });
            console.log('Latest analysis found:', latestAnalysis ? 'Yes' : 'No');
            // Calculate speech metrics from the latest session only
            const speechMetrics = calculateSpeechMetricsFromLatestSession(latestAnalysis);
            console.log('Speech metrics calculated successfully');
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
            }); // Return 200 with empty data
        }
    } catch (error) {
        console.error('Error fetching speech metrics:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch speech metrics',
            metrics: [],
            lastUpdated: "Never",
            isLatestSession: false
        }, {
            status: 200
        }); // Return 200 with empty data
    }
}
function calculateSpeechMetricsFromLatestSession(latestAnalysis) {
    // Default metrics if no analysis is found
    if (!latestAnalysis) {
        return {
            metrics: [
                {
                    label: "Coherence",
                    value: 0,
                    description: "No data available"
                },
                {
                    label: "Speaking Rate",
                    value: 0,
                    description: "No data available"
                },
                {
                    label: "Pitch Variability",
                    value: 0,
                    description: "No data available"
                },
                {
                    label: "Volume",
                    value: 0,
                    description: "No data available"
                },
                {
                    label: "Vocabulary",
                    value: 0,
                    description: "No data available"
                }
            ],
            lastUpdated: "Never",
            isLatestSession: true
        };
    }
    // Format date for display
    const analysisDate = latestAnalysis.analysisDate || latestAnalysis.createdAt;
    const lastUpdated = analysisDate ? new Date(analysisDate).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }) : "Unknown";
    // 1. Coherence score from transcript analysis
    let coherenceScore = 0;
    let coherenceDescription = "";
    if (latestAnalysis.transcriptAnalysis?.coherence_score !== undefined) {
        coherenceScore = Math.round(latestAnalysis.transcriptAnalysis.coherence_score);
        if (coherenceScore >= 70) {
            coherenceDescription = "Your speech is highly coherent with well-connected ideas and logical flow.";
        } else if (coherenceScore >= 65) {
            coherenceDescription = "Your speech has good coherence with mostly connected ideas.";
        } else if (coherenceScore >= 60) {
            coherenceDescription = "Your speech has moderate coherence with some connected ideas.";
        } else {
            coherenceDescription = "Your speech could benefit from improved coherence and logical connections between ideas.";
        }
    } else {
        coherenceScore = 0;
        coherenceDescription = "No coherence data available from your latest practice session.";
    }
    // 2. Speaking Rate score
    let speakingRateScore = 0;
    let speakingRateDescription = "";
    if (latestAnalysis.voiceAnalysis?.speaking_rate !== undefined) {
        const speakingRate = latestAnalysis.voiceAnalysis.speaking_rate;
        // Convert speaking rate to a score (assuming ideal range is 120-160 words per minute)
        // Score is highest (100) when in the ideal range, and decreases as it deviates
        const idealLow = 120;
        const idealHigh = 160;
        if (speakingRate >= idealLow && speakingRate <= idealHigh) {
            speakingRateScore = 85; // Ideal range
        } else {
            // Calculate how far from ideal range
            const deviation = speakingRate < idealLow ? idealLow - speakingRate : speakingRate - idealHigh;
            const maxDeviation = 50; // Maximum deviation to consider
            speakingRateScore = Math.max(60, 85 - deviation / maxDeviation * 25);
        }
        speakingRateScore = Math.round(speakingRateScore);
        // Description based on speaking rate
        if (speakingRate < idealLow) {
            speakingRateDescription = `Your speaking rate is ${Math.round(speakingRate)} words per minute, which is slower than the ideal range of 120-160 wpm.`;
        } else if (speakingRate > idealHigh) {
            speakingRateDescription = `Your speaking rate is ${Math.round(speakingRate)} words per minute, which is faster than the ideal range of 120-160 wpm.`;
        } else {
            speakingRateDescription = `Your speaking rate is ${Math.round(speakingRate)} words per minute, which is within the ideal range of 120-160 wpm.`;
        }
    } else {
        speakingRateDescription = "No speaking rate data available from your latest practice session.";
    }
    // 3. Pitch Variability score
    let pitchVariabilityScore = 0;
    let pitchVariabilityDescription = "";
    if (latestAnalysis.voiceAnalysis?.pitch?.variability !== undefined) {
        const pitchVar = latestAnalysis.voiceAnalysis.pitch.variability;
        // Scale to a 0-100 score (pitch variability is typically a small decimal)
        pitchVariabilityScore = Math.round(Math.min(100, pitchVar * 10));
        if (pitchVariabilityScore >= 80) {
            pitchVariabilityDescription = "Your speech has excellent pitch variation, making it engaging and expressive.";
        } else if (pitchVariabilityScore >= 70) {
            pitchVariabilityDescription = "Your speech has good pitch variation, helping to maintain listener interest.";
        } else if (pitchVariabilityScore >= 60) {
            pitchVariabilityDescription = "Your speech has moderate pitch variation.";
        } else {
            pitchVariabilityDescription = "Your speech could benefit from more varied pitch to sound more engaging.";
        }
    } else {
        pitchVariabilityDescription = "No pitch variability data available from your latest practice session.";
    }
    // 4. Volume score
    let volumeScore = 0;
    let volumeDescription = "";
    if (latestAnalysis.voiceAnalysis?.volume?.average !== undefined) {
        const avgVolume = latestAnalysis.voiceAnalysis.volume.average;
        // Scale to a 0-100 score (volume is typically in a range like 0-1)
        volumeScore = Math.round(Math.min(100, avgVolume * 100));
        if (volumeScore >= 80) {
            volumeDescription = "Your speaking volume is excellent, clearly audible without being too loud.";
        } else if (volumeScore >= 70) {
            volumeDescription = "Your speaking volume is good, generally appropriate for effective communication.";
        } else if (volumeScore >= 60) {
            volumeDescription = "Your speaking volume is moderate, but could be more consistent.";
        } else {
            volumeDescription = "Your speaking volume could be improved for better clarity and impact.";
        }
    } else {
        volumeDescription = "No volume data available from your latest practice session.";
    }
    // 5. Vocabulary score
    let vocabularyScore = 0;
    let vocabularyDescription = "";
    if (latestAnalysis.textAnalysis?.text_statistics?.vocabulary_richness !== undefined) {
        const richness = latestAnalysis.textAnalysis.text_statistics.vocabulary_richness;
        // Scale to a 0-100 score (assuming richness is typically between 0-1)
        vocabularyScore = Math.round(Math.min(100, richness * 100));
        if (vocabularyScore >= 80) {
            vocabularyDescription = "You use a rich and diverse vocabulary in your speech.";
        } else if (vocabularyScore >= 70) {
            vocabularyDescription = "You use a good variety of words in your speech.";
        } else if (vocabularyScore >= 60) {
            vocabularyDescription = "You use a moderate variety of words in your speech.";
        } else {
            vocabularyDescription = "Your speech could benefit from a more diverse vocabulary.";
        }
    } else {
        vocabularyDescription = "No vocabulary data available from your latest practice session.";
    }
    // Return the metrics from the latest session
    return {
        metrics: [
            {
                label: "Coherence",
                value: coherenceScore,
                description: coherenceDescription
            },
            {
                label: "Speaking Rate",
                value: speakingRateScore,
                description: speakingRateDescription
            },
            {
                label: "Pitch Variability",
                value: pitchVariabilityScore,
                description: pitchVariabilityDescription
            },
            {
                label: "Volume",
                value: volumeScore,
                description: volumeDescription
            },
            {
                label: "Vocabulary",
                value: vocabularyScore,
                description: vocabularyDescription
            }
        ],
        lastUpdated,
        isLatestSession: true
    };
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__788b8714._.js.map