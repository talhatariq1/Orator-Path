module.exports = {

"[project]/.next-internal/server/app/api/daily-speaking-tip/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/lib/models/speakingTip.model.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const speakingTipSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    content: {
        type: String,
        required: true
    },
    dayOfWeek: {
        type: Number,
        required: true,
        min: 0,
        max: 6,
        unique: true,
        index: true
    },
    dayName: {
        type: String,
        required: true,
        enum: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
} // Adds createdAt and updatedAt timestamps automatically
);
// Create or retrieve the model
const SpeakingTip = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.SpeakingTip || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('SpeakingTip', speakingTipSchema);
const __TURBOPACK__default__export__ = SpeakingTip;
}}),
"[project]/src/app/api/daily-speaking-tip/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongodb/mongoose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$speakingTip$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/speakingTip.model.js [app-route] (ecmascript)");
;
;
;
// Default tips to use if database tips cannot be retrieved
const defaultTips = [
    {
        content: "When speaking, aim for clarity over complexity. Simple, well-articulated ideas often have more impact than verbose explanations.",
        dayOfWeek: 0,
        dayName: "Sunday"
    },
    {
        content: "Practice the 'pause technique' - strategic pauses create emphasis, give your audience time to absorb information, and help you appear more confident and thoughtful.",
        dayOfWeek: 1,
        dayName: "Monday"
    },
    {
        content: "Make eye contact with different sections of your audience. This creates connection and ensures everyone feels included in your message.",
        dayOfWeek: 2,
        dayName: "Tuesday"
    },
    {
        content: "Start with a strong hook - a surprising statistic, a compelling story, or a thought-provoking question can immediately capture your audience's attention.",
        dayOfWeek: 3,
        dayName: "Wednesday"
    },
    {
        content: "End your speeches with a clear call-to-action. Tell your audience exactly what you want them to do, think, or feel after listening to you.",
        dayOfWeek: 4,
        dayName: "Thursday"
    },
    {
        content: "Use the 'rule of three' in your presentations - grouping ideas in threes makes them more engaging, memorable, and effective.",
        dayOfWeek: 5,
        dayName: "Friday"
    },
    {
        content: "Record yourself speaking and analyze your body language. Your nonverbal communication often speaks louder than your words.",
        dayOfWeek: 6,
        dayName: "Saturday"
    }
];
// Function to seed the database with default tips if none exist
async function seedTipsIfNeeded() {
    try {
        // Check if tips already exist
        const existingTipsCount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$speakingTip$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments();
        if (existingTipsCount === 0) {
            console.log('No speaking tips found in database. Seeding with default tips...');
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$speakingTip$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].insertMany(defaultTips);
            console.log('Successfully seeded speaking tips database');
        } else {
            console.log(`Found ${existingTipsCount} speaking tips in database`);
        }
    } catch (error) {
        console.error('Error seeding speaking tips:', error);
    }
}
async function GET() {
    try {
        // Connect to MongoDB
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"])();
        // Seed tips if needed
        await seedTipsIfNeeded();
        // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
        const currentDayOfWeek = new Date().getDay();
        // Try to get the tip for the current day from the database
        let tip = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$speakingTip$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            dayOfWeek: currentDayOfWeek
        });
        // If no tip is found for the current day, use the default tip for that day
        if (!tip) {
            console.log(`No tip found for day ${currentDayOfWeek}, using default tip`);
            const defaultTip = defaultTips.find((t)=>t.dayOfWeek === currentDayOfWeek);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
            });
        }
        // Return the tip from the database
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
        });
    } catch (error) {
        console.error('Error fetching daily speaking tip:', error);
        // Fallback to default tip for the current day
        const currentDayOfWeek = new Date().getDay();
        const defaultTip = defaultTips.find((t)=>t.dayOfWeek === currentDayOfWeek);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
async function POST(req) {
    try {
        // Connect to MongoDB
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"])();
        const data = await req.json();
        // If the request includes a reset flag, delete all existing tips
        if (data.reset) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$speakingTip$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].deleteMany({});
            console.log('Deleted all existing speaking tips');
        }
        // If the request includes tips, insert them
        if (data.tips && Array.isArray(data.tips)) {
            // Validate tips
            const validTips = data.tips.filter((tip)=>tip.content && typeof tip.dayOfWeek === 'number' && tip.dayOfWeek >= 0 && tip.dayOfWeek <= 6 && tip.dayName);
            if (validTips.length > 0) {
                // Use updateOne with upsert for each tip to avoid duplicates
                for (const tip of validTips){
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$speakingTip$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].updateOne({
                        dayOfWeek: tip.dayOfWeek
                    }, {
                        $set: {
                            content: tip.content,
                            dayName: tip.dayName,
                            updatedAt: new Date()
                        }
                    }, {
                        upsert: true
                    });
                }
                console.log(`Updated ${validTips.length} speaking tips`);
            }
        } else if (!data.reset) {
            // If no tips provided and not resetting, seed with default tips
            await seedTipsIfNeeded();
        }
        // Return the current tips
        const currentTips = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$speakingTip$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find().sort({
            dayOfWeek: 1
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            tips: currentTips.map((tip)=>({
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: 'error',
            message: 'Failed to update speaking tips',
            error: error.message
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a4b486e9._.js.map