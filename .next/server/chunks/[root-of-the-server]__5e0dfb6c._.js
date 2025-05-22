module.exports = {

"[project]/.next-internal/server/app/api/user-stats/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/user-stats/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
;
;
// MongoDB connection function
const connect = async ()=>{
    __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].set('strictQuery', true);
    try {
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection.readyState === 1) {
            console.log('MongoDB already connected');
            return;
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(process.env.MONGODB_URI, {
            dbName: 'orator-path',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
};
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
            sessions: [],
            metrics: {
                overall: [],
                clarity: [],
                confidence: [],
                vocabulary: []
            }
        };
    }
    // Sort analyses by date (newest to oldest) to get the most recent 7 sessions
    const sortedAnalyses = [
        ...analyses
    ].sort((a, b)=>new Date(b.analysisDate) - new Date(a.analysisDate));
    // Get only the 7 most recent analyses
    const recentAnalyses = sortedAnalyses.slice(0, 7);
    // Reverse to display oldest to newest in the chart (left to right)
    recentAnalyses.reverse();
    // Format dates for labels in a more user-friendly way
    const sessions = recentAnalyses.map((analysis)=>{
        const date = new Date(analysis.analysisDate);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        // Format the time
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;
        // Format the date label
        let dateLabel;
        // Check if date is today
        if (date.toDateString() === today.toDateString()) {
            dateLabel = `Today, ${timeString}`;
        } else if (date.toDateString() === yesterday.toDateString()) {
            dateLabel = `Yesterday, ${timeString}`;
        } else {
            const dayDiff = Math.floor((today - date) / (1000 * 60 * 60 * 24));
            if (dayDiff < 7) {
                const dayNames = [
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat"
                ];
                dateLabel = `${dayNames[date.getDay()]}, ${timeString}`;
            } else {
                // For older dates, use month/day format with time
                dateLabel = `${date.getMonth() + 1}/${date.getDate()}, ${timeString}`;
            }
        }
        // Extract session-specific data
        const duration = analysis.voiceAnalysis?.duration || 0;
        const formattedDuration = duration < 60 ? `${Math.round(duration)}s` : `${Math.round(duration / 60)}m ${Math.round(duration % 60)}s`;
        // Calculate metrics for each tab
        // 1. Overall score from performance assessment
        const overallScore = analysis.recommendations?.performance_assessment?.overall_score || 0;
        // Log for debugging
        console.log(`Session overall score: ${overallScore} (raw value from database)`);
        // 2. Clarity score - now directly using coherence_score from transcriptAnalysis
        // Get coherence score (if available)
        let clarityScore = 0;
        if (analysis.transcriptAnalysis?.coherence_score !== undefined) {
            // Use the raw coherence_score value directly with one decimal place
            clarityScore = parseFloat(analysis.transcriptAnalysis.coherence_score.toFixed(1));
            // Log for debugging
            console.log(`Session coherence score: ${clarityScore} (raw value from database)`);
        } else {
            // Fallback to a percentage of overall score if coherence_score is not available
            // Scale appropriately for raw coherence scores (0-1 range)
            clarityScore = parseFloat((overallScore * 0.9 / 100).toFixed(1));
            console.log(`Using fallback coherence score: ${clarityScore} (scaled from overall: ${overallScore})`);
        }
        // 3. Confidence score - based on volume, pitch variability, and filler words
        let confidenceFactors = [];
        // Volume variability (if available)
        if (analysis.voiceAnalysis?.volume?.variability !== undefined) {
            const volumeScore = Math.min(100, analysis.voiceAnalysis.volume.variability * 100);
            confidenceFactors.push(volumeScore);
        }
        // Pitch variability (if available)
        if (analysis.voiceAnalysis?.pitch?.variability !== undefined) {
            const pitchScore = Math.min(100, analysis.voiceAnalysis.pitch.variability * 10);
            confidenceFactors.push(pitchScore);
        }
        // Filler words (inverse relationship - fewer is better)
        if (analysis.textAnalysis?.filler_words?.percentage !== undefined) {
            const fillerWordScore = Math.max(0, 100 - analysis.textAnalysis.filler_words.percentage * 100);
            confidenceFactors.push(fillerWordScore);
        }
        const confidenceScore = confidenceFactors.length > 0 ? Math.round(confidenceFactors.reduce((sum, score)=>sum + score, 0) / confidenceFactors.length) : Math.round(overallScore * 0.85); // Fallback to a percentage of overall score
        // 4. Vocabulary score - based on vocabulary richness and word count
        let vocabularyFactors = [];
        // Vocabulary richness (if available)
        if (analysis.textAnalysis?.text_statistics?.vocabulary_richness !== undefined) {
            const richnessScore = Math.min(100, analysis.textAnalysis.text_statistics.vocabulary_richness * 100);
            vocabularyFactors.push(richnessScore);
        }
        // Word count (more words generally means more vocabulary usage)
        if (analysis.textAnalysis?.text_statistics?.word_count !== undefined) {
            const wordCount = analysis.textAnalysis.text_statistics.word_count;
            const wordCountScore = Math.min(100, wordCount / 3); // Scale appropriately
            vocabularyFactors.push(wordCountScore);
        }
        const vocabularyScore = vocabularyFactors.length > 0 ? Math.round(vocabularyFactors.reduce((sum, score)=>sum + score, 0) / vocabularyFactors.length) : Math.round(overallScore * 0.95); // Fallback to a percentage of overall score
        return {
            date: dateLabel,
            timestamp: date.getTime(),
            duration: formattedDuration,
            durationSeconds: duration,
            overall: overallScore,
            clarity: clarityScore,
            confidence: confidenceScore,
            vocabulary: vocabularyScore,
            // Include any additional session-specific data
            wordCount: analysis.textAnalysis?.text_statistics?.word_count || 0,
            fillerWords: analysis.textAnalysis?.filler_words?.total_count || 0,
            topicsCovered: 1 // Default to 1 if we don't have actual topic data
        };
    });
    // Extract metrics for each tab
    const metrics = {
        overall: sessions.map((session)=>session.overall),
        clarity: sessions.map((session)=>session.clarity),
        confidence: sessions.map((session)=>session.confidence),
        vocabulary: sessions.map((session)=>session.vocabulary)
    };
    return {
        sessions,
        metrics
    };
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
// Helper function to get a user-friendly timeframe description
function getTimeframeDescription(analyses) {
    if (!analyses || analyses.length < 2) {
        return "All time";
    }
    // Sort analyses by date (newest to oldest)
    const sortedAnalyses = [
        ...analyses
    ].sort((a, b)=>new Date(b.analysisDate) - new Date(a.analysisDate));
    const newest = new Date(sortedAnalyses[0].analysisDate);
    const oldest = new Date(sortedAnalyses[sortedAnalyses.length - 1].analysisDate);
    const diffTime = Math.abs(newest - oldest);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
        return "Today";
    } else if (diffDays === 1) {
        return "Last 2 days";
    } else if (diffDays < 7) {
        return `Last ${diffDays + 1} days`;
    } else if (diffDays < 14) {
        return "Last week";
    } else if (diffDays < 30) {
        return "Last few weeks";
    } else if (diffDays < 60) {
        return "Last month";
    } else if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return `Last ${months} ${months === 1 ? 'month' : 'months'}`;
    } else {
        return "Last year+";
    }
}
function calculateUserStats(analyses) {
    // Default stats if no analyses are found
    if (!analyses || analyses.length === 0) {
        return {
            totalPracticeSessions: 0,
            averageScore: 0,
            speakingClarityScore: 0,
            totalPracticeTime: 0,
            changePercentages: {
                totalPracticeSessions: 0,
                averageScore: 0,
                speakingClarityScore: 0,
                totalPracticeTime: 0
            },
            timeframe: "All time",
            lastUpdated: "Never"
        };
    }
    // Total practice sessions
    const totalPracticeSessions = analyses.length;
    // Calculate average score from performance assessments
    const scoresArray = analyses.filter((analysis)=>analysis.recommendations?.performance_assessment?.overall_score).map((analysis)=>analysis.recommendations.performance_assessment.overall_score);
    const averageScore = scoresArray.length > 0 ? scoresArray.reduce((sum, score)=>sum + score, 0) / scoresArray.length : 0;
    // Log for debugging
    console.log('Overall scores (raw values):', scoresArray);
    console.log('Average overall score:', averageScore);
    // Calculate speaking clarity score
    // Now directly using coherence_score from transcript analysis as the primary clarity metric
    // Get all coherence scores from analyses
    const coherenceScores = analyses.filter((analysis)=>analysis.transcriptAnalysis?.coherence_score !== undefined).map((analysis)=>analysis.transcriptAnalysis.coherence_score);
    // Calculate the average coherence score
    let speakingClarityScore = 0;
    if (coherenceScores.length > 0) {
        // Calculate the average with one decimal place
        const sum = coherenceScores.reduce((total, score)=>total + score, 0);
        const avg = sum / coherenceScores.length;
        speakingClarityScore = parseFloat(avg.toFixed(1));
        // Log for debugging
        console.log('Coherence scores (raw values):', coherenceScores);
        console.log('Average coherence score:', speakingClarityScore);
    } else {
        // If no coherence scores are available, provide a reasonable default
        // based on the overall score if available, or a mid-range value
        const hasScores = analyses.some((analysis)=>analysis.recommendations?.performance_assessment?.overall_score !== undefined);
        if (hasScores) {
            // Use the average overall score as a basis, but scale appropriately for raw coherence scores
            speakingClarityScore = parseFloat((averageScore * 0.9 / 100).toFixed(1));
            console.log('No coherence scores available, using scaled average score:', speakingClarityScore);
        } else {
            // Default to a mid-range value to start with (appropriate for raw coherence scores)
            speakingClarityScore = 0.7; // Default to 0.7 as a reasonable starting point
            console.log('No scores available, using default clarity score:', speakingClarityScore);
        }
    }
    // Ensure the score is within a reasonable range for raw coherence scores
    speakingClarityScore = Math.max(0, Math.min(100, speakingClarityScore));
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
    // Log for debugging
    console.log('Recent average score:', recentAvg);
    console.log('Older average score:', olderAvg);
    console.log('Score change percentage:', scoreChange);
    // Calculate speaking clarity score change based on coherence scores
    // Compare coherence scores in recent vs older analyses
    let clarityScoreChange = 0;
    // Sort analyses by date (newest to oldest)
    const sortedAnalyses = [
        ...analyses
    ].sort((a, b)=>new Date(b.analysisDate) - new Date(a.analysisDate));
    if (analyses.length <= 3) {
        // For few analyses, use a simpler approach
        if (analyses.length === 1) {
            // With only one analysis, show a default positive change to encourage the user
            clarityScoreChange = 5; // 5% improvement as a default
        } else {
            // Get the most recent analysis
            const mostRecent = sortedAnalyses[0];
            // Get the older analyses
            const older = sortedAnalyses.slice(1);
            // Get coherence score for the most recent analysis
            let mostRecentCoherenceScore = 0;
            if (mostRecent.transcriptAnalysis?.coherence_score !== undefined) {
                mostRecentCoherenceScore = mostRecent.transcriptAnalysis.coherence_score;
            }
            // Calculate average coherence score for older analyses
            const olderCoherenceScores = older.filter((analysis)=>analysis.transcriptAnalysis?.coherence_score !== undefined).map((analysis)=>analysis.transcriptAnalysis.coherence_score);
            const olderCoherenceAvg = olderCoherenceScores.length > 0 ? olderCoherenceScores.reduce((sum, score)=>sum + score, 0) / olderCoherenceScores.length : 0;
            // Calculate change percentage
            if (olderCoherenceAvg > 0) {
                clarityScoreChange = Math.round((mostRecentCoherenceScore - olderCoherenceAvg) / olderCoherenceAvg * 100);
            } else if (mostRecentCoherenceScore > 0) {
                // If older average is 0 but we have a recent score, show positive change
                clarityScoreChange = 10; // 10% improvement as a default
            }
        }
    } else {
        // For more analyses, split into recent and older halves
        const midpoint = Math.floor(sortedAnalyses.length / 2);
        const recent = sortedAnalyses.slice(0, midpoint);
        const older = sortedAnalyses.slice(midpoint);
        // Get coherence scores for recent analyses
        const recentCoherenceScores = recent.filter((analysis)=>analysis.transcriptAnalysis?.coherence_score !== undefined).map((analysis)=>analysis.transcriptAnalysis.coherence_score);
        // Get coherence scores for older analyses
        const olderCoherenceScores = older.filter((analysis)=>analysis.transcriptAnalysis?.coherence_score !== undefined).map((analysis)=>analysis.transcriptAnalysis.coherence_score);
        // Calculate averages
        const recentCoherenceAvg = recentCoherenceScores.length > 0 ? recentCoherenceScores.reduce((sum, score)=>sum + score, 0) / recentCoherenceScores.length : 0;
        const olderCoherenceAvg = olderCoherenceScores.length > 0 ? olderCoherenceScores.reduce((sum, score)=>sum + score, 0) / olderCoherenceScores.length : 0;
        // Calculate change percentage
        if (olderCoherenceAvg > 0) {
            clarityScoreChange = Math.round((recentCoherenceAvg - olderCoherenceAvg) / olderCoherenceAvg * 100);
        } else if (recentCoherenceAvg > 0) {
            // If older average is 0 but we have a recent average, show positive change
            clarityScoreChange = 15; // 15% improvement as a default
        }
    }
    // Ensure we have a reasonable change value (not extreme)
    clarityScoreChange = Math.max(-50, Math.min(50, clarityScoreChange));
    // Force a non-zero change value for better user experience
    if (clarityScoreChange === 0 && speakingClarityScore > 0) {
        // If we have a clarity score but no change, show a small positive change
        clarityScoreChange = 5; // Default to 5% improvement
        // Log for debugging
        console.log('Speaking clarity score (coherence):', speakingClarityScore);
        console.log('Forced non-zero clarity change:', clarityScoreChange);
    }
    // Calculate total practice time in minutes
    let totalPracticeTime = 0;
    let previousPracticeTime = 0;
    // Calculate for recent analyses
    recentAnalyses.forEach((analysis)=>{
        if (analysis.voiceAnalysis?.duration) {
            // Convert seconds to minutes
            totalPracticeTime += analysis.voiceAnalysis.duration / 60;
        }
    });
    // Calculate for older analyses
    olderAnalyses.forEach((analysis)=>{
        if (analysis.voiceAnalysis?.duration) {
            // Convert seconds to minutes
            previousPracticeTime += analysis.voiceAnalysis.duration / 60;
        }
    });
    // Round to nearest minute
    totalPracticeTime = Math.round(totalPracticeTime);
    previousPracticeTime = Math.round(previousPracticeTime);
    // Calculate change in practice time
    const practiceTimeChange = previousPracticeTime > 0 ? Math.round((totalPracticeTime - previousPracticeTime) / previousPracticeTime * 100) : 0;
    // Total practice time (all time)
    const allTimePracticeTime = Math.round(analyses.reduce((total, analysis)=>{
        return total + (analysis.voiceAnalysis?.duration ? analysis.voiceAnalysis.duration / 60 : 0);
    }, 0));
    // Get the most recent analysis date for "last updated"
    const mostRecentAnalysis = [
        ...analyses
    ].sort((a, b)=>new Date(b.analysisDate) - new Date(a.analysisDate))[0];
    const lastUpdated = mostRecentAnalysis ? formatDate(new Date(mostRecentAnalysis.analysisDate)) : "Never";
    // Get a user-friendly timeframe description
    const timeframe = getTimeframeDescription(analyses);
    return {
        totalPracticeSessions,
        averageScore,
        speakingClarityScore,
        totalPracticeTime: allTimePracticeTime,
        changePercentages: {
            totalPracticeSessions: practiceSessionsChange,
            averageScore: scoreChange,
            speakingClarityScore: clarityScoreChange,
            totalPracticeTime: practiceTimeChange
        },
        timeframe,
        lastUpdated
    };
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5e0dfb6c._.js.map