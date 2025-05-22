module.exports = {

"[project]/.next-internal/server/app/api/skills-gap/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/skills-gap/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
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
async function GET() {
    try {
        // Get the current user from Clerk
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["currentUser"])();
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Authentication required'
            }, {
                status: 401
            });
        }
        const userId = user.id;
        // Connect to MongoDB
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"])();
        // Get all audio analyses for the user, sorted by date (newest first)
        const analyses = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$audioAnalysis$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            clerkId: userId
        }).sort({
            analysisDate: -1
        });
        // Calculate skills gap data
        const skillsGapData = calculateSkillsGap(analyses);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(skillsGapData, {
            status: 200
        });
    } catch (error) {
        console.error('Error fetching skills gap data:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch skills gap data'
        }, {
            status: 500
        });
    }
}
function calculateSkillsGap(analyses) {
    // Default data if no analyses are found
    if (!analyses || analyses.length === 0) {
        return {
            skills: getDefaultSkillsData(),
            lastUpdated: "Never"
        };
    }
    // Get the most recent analysis
    const latestAnalysis = analyses[0];
    // Format the date for display
    const lastUpdated = formatDate(new Date(latestAnalysis.analysisDate));
    // Extract metrics from the latest analysis
    const coherenceScore = latestAnalysis.transcriptAnalysis?.coherence_score || 0;
    const speakingRate = latestAnalysis.voiceAnalysis?.speaking_rate || 0;
    const pitchVariability = latestAnalysis.voiceAnalysis?.pitch?.variability || 0;
    const vocabularyRichness = latestAnalysis.textAnalysis?.text_statistics?.vocabulary_richness || 0;
    const fillerWordsPercentage = latestAnalysis.textAnalysis?.filler_words?.percentage || 0;
    // Get improvement recommendations
    const priorityImprovements = latestAnalysis.recommendations?.performance_assessment?.priority_improvements || [];
    const nextSteps = latestAnalysis.recommendations?.development_plan?.next_steps || [];
    // Calculate target levels based on current performance
    // For each metric, we set a reasonable target that's challenging but achievable
    const coherenceTarget = Math.min(1.0, coherenceScore + 0.15);
    const speakingRateTarget = speakingRate < 120 ? 120 : speakingRate > 160 ? 160 : speakingRate;
    const pitchVariabilityTarget = Math.min(1.0, pitchVariability + 0.2);
    const vocabularyRichnessTarget = Math.min(1.0, vocabularyRichness + 0.1);
    const fillerWordsTarget = Math.max(0, fillerWordsPercentage - 0.05);
    // Create skills data array
    const skills = [
        {
            id: "coherence",
            name: "Speech Coherence",
            description: "How well your ideas connect logically in your speech",
            currentLevel: coherenceScore,
            targetLevel: coherenceTarget,
            recommendation: findRecommendation(priorityImprovements, nextSteps, "coherence", "clarity", "structure")
        },
        {
            id: "speaking-rate",
            name: "Speaking Rate",
            description: "Your pace of speech measured in words per minute",
            currentLevel: speakingRate / 160,
            targetLevel: speakingRateTarget / 160,
            recommendation: findRecommendation(priorityImprovements, nextSteps, "pace", "speed", "rate")
        },
        {
            id: "pitch-variability",
            name: "Vocal Expressiveness",
            description: "How varied your pitch is during speech, affecting engagement",
            currentLevel: pitchVariability,
            targetLevel: pitchVariabilityTarget,
            recommendation: findRecommendation(priorityImprovements, nextSteps, "pitch", "tone", "expression", "monotone")
        },
        {
            id: "vocabulary",
            name: "Vocabulary Richness",
            description: "The diversity and precision of your word choices",
            currentLevel: vocabularyRichness,
            targetLevel: vocabularyRichnessTarget,
            recommendation: findRecommendation(priorityImprovements, nextSteps, "vocabulary", "word choice", "language")
        },
        {
            id: "filler-words",
            name: "Filler Word Reduction",
            description: "Minimizing use of 'um', 'uh', and other filler words",
            currentLevel: 1 - fillerWordsPercentage,
            targetLevel: 1 - fillerWordsTarget,
            recommendation: findRecommendation(priorityImprovements, nextSteps, "filler", "hesitation", "um", "uh")
        }
    ];
    return {
        skills,
        lastUpdated
    };
}
// Helper function to find a relevant recommendation from priority improvements or next steps
function findRecommendation(priorityImprovements, nextSteps, ...keywords) {
    // First try to find a matching priority improvement
    for (const keyword of keywords){
        const matchingImprovement = priorityImprovements.find((improvement)=>improvement.category?.toLowerCase().includes(keyword.toLowerCase()) || improvement.issue?.toLowerCase().includes(keyword.toLowerCase()) || improvement.guidance?.toLowerCase().includes(keyword.toLowerCase()));
        if (matchingImprovement) {
            return matchingImprovement.guidance || matchingImprovement.impact || `Focus on improving your ${keyword} skills for better overall performance.`;
        }
    }
    // If no matching priority improvement, try next steps
    for (const keyword of keywords){
        const matchingStep = nextSteps.find((step)=>step.toLowerCase().includes(keyword.toLowerCase()));
        if (matchingStep) {
            return matchingStep;
        }
    }
    // Default recommendations if no matches found
    const defaultRecommendations = {
        coherence: "Practice organizing your thoughts before speaking. Use clear transitions between ideas and maintain a logical flow throughout your speech.",
        "speaking-rate": "Aim for a speaking rate of 120-160 words per minute. Practice with a metronome app to develop consistency in your pace.",
        "pitch-variability": "Vary your pitch to emphasize important points. Try reading dialogue from a book aloud, giving different characters distinct vocal patterns.",
        vocabulary: "Expand your vocabulary by learning 3-5 new words each week and incorporating them into your practice sessions.",
        "filler-words": "Record yourself speaking and count filler words. Practice pausing silently instead of using fillers like 'um' or 'uh'."
    };
    // Return the default recommendation for the first keyword
    return defaultRecommendations[keywords[0]] || "Practice this skill regularly and seek feedback from others to improve.";
}
// Helper function to get default skills data when no analyses are available
function getDefaultSkillsData() {
    return [
        {
            id: "coherence",
            name: "Speech Coherence",
            description: "How well your ideas connect logically in your speech",
            currentLevel: 0.6,
            targetLevel: 0.8,
            recommendation: "Practice organizing your thoughts before speaking. Use clear transitions between ideas and maintain a logical flow throughout your speech."
        },
        {
            id: "speaking-rate",
            name: "Speaking Rate",
            description: "Your pace of speech measured in words per minute",
            currentLevel: 0.7,
            targetLevel: 0.9,
            recommendation: "Aim for a speaking rate of 120-160 words per minute. Practice with a metronome app to develop consistency in your pace."
        },
        {
            id: "pitch-variability",
            name: "Vocal Expressiveness",
            description: "How varied your pitch is during speech, affecting engagement",
            currentLevel: 0.5,
            targetLevel: 0.7,
            recommendation: "Vary your pitch to emphasize important points. Try reading dialogue from a book aloud, giving different characters distinct vocal patterns."
        },
        {
            id: "vocabulary",
            name: "Vocabulary Richness",
            description: "The diversity and precision of your word choices",
            currentLevel: 0.65,
            targetLevel: 0.8,
            recommendation: "Expand your vocabulary by learning 3-5 new words each week and incorporating them into your practice sessions."
        },
        {
            id: "filler-words",
            name: "Filler Word Reduction",
            description: "Minimizing use of 'um', 'uh', and other filler words",
            currentLevel: 0.6,
            targetLevel: 0.85,
            recommendation: "Record yourself speaking and count filler words. Practice pausing silently instead of using fillers like 'um' or 'uh'."
        }
    ];
}
// Helper function to format dates in a user-friendly way
function formatDate(date) {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
        return "Today";
    } else if (diffDays === 1) {
        return "Yesterday";
    } else if (diffDays < 7) {
        return `${diffDays} days ago`;
    } else if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
        const years = Math.floor(diffDays / 365);
        return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__14ebf9c1._.js.map