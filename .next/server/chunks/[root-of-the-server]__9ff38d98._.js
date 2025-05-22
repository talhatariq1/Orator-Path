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
"[project]/src/app/api/user-stats/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/index.js [app-route] (ecmascript) <exports>");
(()=>{
    const e = new Error("Cannot find module '@/lib/mongodb/mongoose'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
;
;
;
// Define the schema directly to avoid import issues
const audioAnalysisSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
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
});
// Add an index on clerkId and analysisDate for efficient querying
audioAnalysisSchema.index({
    clerkId: 1,
    analysisDate: -1
});
// Use the schema to create or retrieve the model
const AudioAnalysis = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.AudioAnalysis || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('AudioAnalysis', audioAnalysisSchema);
async function GET() {
    try {
        // Get the current user from Clerk
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["currentUser"])();
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Authentication required'
            }, {
                status: 401
            });
        }
        const userId = user.id;
        // Connect to MongoDB
        await connect();
        // Get all audio analyses for the user
        const analyses = await AudioAnalysis.find({
            clerkId: userId
        }).sort({
            analysisDate: -1
        });
        // Calculate statistics
        const stats = calculateUserStats(analyses);
        // Get performance chart data
        const performanceData = calculatePerformanceData(analyses);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ...stats,
            performanceData
        }, {
            status: 200
        });
    } catch (error) {
        console.error('Error fetching user stats:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch user statistics'
        }, {
            status: 500
        });
    }
}
function calculatePerformanceData(analyses) {
    if (!analyses || analyses.length === 0) {
        return {
            labels: [],
            currentPeriod: [],
            previousPeriod: []
        };
    }
    // Sort analyses by date (oldest to newest)
    const sortedAnalyses = [
        ...analyses
    ].sort((a, b)=>new Date(a.analysisDate) - new Date(b.analysisDate));
    // Get the last 7 analyses (or fewer if there aren't 7)
    const recentAnalyses = sortedAnalyses.slice(-7);
    // Get the 7 analyses before that (or fewer if there aren't enough)
    const previousAnalyses = sortedAnalyses.slice(-14, -7);
    // Format dates for labels
    const labels = recentAnalyses.map((analysis)=>{
        const date = new Date(analysis.analysisDate);
        return `${date.getMonth() + 1}/${date.getDate()}`;
    });
    // Get scores for current period
    const currentPeriod = recentAnalyses.map((analysis)=>analysis.recommendations?.performance_assessment?.overall_score || 0);
    // Get scores for previous period (align with current period dates)
    const previousPeriod = [];
    for(let i = 0; i < labels.length; i++){
        previousPeriod.push(i < previousAnalyses.length ? previousAnalyses[i].recommendations?.performance_assessment?.overall_score || 0 : null);
    }
    return {
        labels,
        currentPeriod,
        previousPeriod
    };
}
function calculateUserStats(analyses) {
    // Default stats if no analyses are found
    if (!analyses || analyses.length === 0) {
        return {
            totalPracticeSessions: 0,
            averageScore: 0,
            vocabularyGrowth: 0,
            changePercentages: {
                totalPracticeSessions: 0,
                averageScore: 0,
                vocabularyGrowth: 0
            }
        };
    }
    // Total practice sessions
    const totalPracticeSessions = analyses.length;
    // Calculate average score from performance assessments
    const scoresArray = analyses.filter((analysis)=>analysis.recommendations?.performance_assessment?.overall_score).map((analysis)=>analysis.recommendations.performance_assessment.overall_score);
    const averageScore = scoresArray.length > 0 ? Math.round(scoresArray.reduce((sum, score)=>sum + score, 0) / scoresArray.length) : 0;
    // Calculate vocabulary growth
    // Get unique words across all analyses
    const allWords = new Set();
    analyses.forEach((analysis)=>{
        if (analysis.textAnalysis?.content_analysis?.most_common_words) {
            analysis.textAnalysis.content_analysis.most_common_words.forEach(([word])=>{
                allWords.add(word.toLowerCase());
            });
        }
    });
    const vocabularyGrowth = allWords.size;
    // Calculate change percentages (comparing to previous period)
    // For simplicity, we'll compare the most recent half of analyses to the older half
    const midpoint = Math.floor(analyses.length / 2);
    const recentAnalyses = analyses.slice(0, midpoint);
    const olderAnalyses = analyses.slice(midpoint);
    // Calculate change in practice sessions (based on frequency)
    // We'll use the time span as a normalizing factor
    let practiceSessionsChange = 0;
    if (recentAnalyses.length > 0 && olderAnalyses.length > 0) {
        const recentTimespan = (new Date(recentAnalyses[0].analysisDate) - new Date(recentAnalyses[recentAnalyses.length - 1].analysisDate)) / (1000 * 60 * 60 * 24);
        const olderTimespan = (new Date(olderAnalyses[0].analysisDate) - new Date(olderAnalyses[olderAnalyses.length - 1].analysisDate)) / (1000 * 60 * 60 * 24);
        if (recentTimespan > 0 && olderTimespan > 0) {
            const recentFrequency = recentAnalyses.length / recentTimespan;
            const olderFrequency = olderAnalyses.length / olderTimespan;
            practiceSessionsChange = Math.round((recentFrequency - olderFrequency) / olderFrequency * 100);
        }
    }
    // Calculate change in average score
    const recentScores = recentAnalyses.filter((analysis)=>analysis.recommendations?.performance_assessment?.overall_score).map((analysis)=>analysis.recommendations.performance_assessment.overall_score);
    const olderScores = olderAnalyses.filter((analysis)=>analysis.recommendations?.performance_assessment?.overall_score).map((analysis)=>analysis.recommendations.performance_assessment.overall_score);
    const recentAvg = recentScores.length > 0 ? recentScores.reduce((sum, score)=>sum + score, 0) / recentScores.length : 0;
    const olderAvg = olderScores.length > 0 ? olderScores.reduce((sum, score)=>sum + score, 0) / olderScores.length : 0;
    const scoreChange = olderAvg > 0 ? Math.round((recentAvg - olderAvg) / olderAvg * 100) : 0;
    // Calculate change in vocabulary (this is simplified)
    // In a real implementation, you would track vocabulary growth over time
    const vocabularyChange = 10; // Placeholder value
    return {
        totalPracticeSessions,
        averageScore,
        vocabularyGrowth,
        changePercentages: {
            totalPracticeSessions: practiceSessionsChange,
            averageScore: scoreChange,
            vocabularyGrowth: vocabularyChange
        }
    };
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9ff38d98._.js.map