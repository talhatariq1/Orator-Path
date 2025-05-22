module.exports = {

"[project]/.next-internal/server/app/api/personalized-recommendations/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/personalized-recommendations/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongodb/mongoose.js [app-route] (ecmascript)");
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
    analysisDate: {
        type: Date,
        default: Date.now
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
    }
}, {
    timestamps: true
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"])();
        // Get the 3 most recent audio analyses for the user
        const analyses = await AudioAnalysis.find({
            clerkId: userId,
            // Ensure we have valid recommendation data
            'recommendations.performance_assessment': {
                $exists: true
            }
        }).sort({
            analysisDate: -1
        }).limit(3);
        // Process the data for the personalized recommendations widget
        const recommendationsData = processRecommendationsData(analyses);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(recommendationsData, {
            status: 200
        });
    } catch (error) {
        console.error('Error fetching personalized recommendations:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch personalized recommendations',
            recommendations: [],
            lastUpdated: "Never"
        }, {
            status: 200
        }); // Return 200 with empty data instead of 500
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
    analyses.forEach((analysis)=>{
        // Get priority improvements
        const priorityImprovements = analysis.recommendations?.performance_assessment?.priority_improvements || [];
        priorityImprovements.forEach((improvement)=>{
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
        nextSteps.forEach((step)=>{
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
        growthAreas.forEach((area)=>{
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
    // Sort by type (priority first, then next steps, then growth areas)
    uniqueRecommendations.sort((a, b)=>{
        const typeOrder = {
            priority: 0,
            next_step: 1,
            growth_area: 2
        };
        return typeOrder[a.type] - typeOrder[b.type];
    });
    return {
        recommendations: uniqueRecommendations,
        lastUpdated: formattedDate
    };
}
// Helper function to deduplicate recommendations
function deduplicateRecommendations(recommendations) {
    const seen = new Set();
    return recommendations.filter((rec)=>{
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
// Helper function to format date
function formatDate(date) {
    if (!date) return "Never";
    const d = new Date(date);
    // Check if date is valid
    if (isNaN(d.getTime())) return "Invalid date";
    // Format: "Jan 1, 2023 at 2:30 PM"
    return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0dd3c6cb._.js.map