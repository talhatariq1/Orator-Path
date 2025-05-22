module.exports = {

"[project]/.next-internal/server/app/api/video-emotion/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/video-emotion/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get("video");
        if (!file) {
            return new Response(JSON.stringify({
                error: "No video file provided"
            }), {
                status: 400
            });
        }
        // Prepare form data for backend
        const backendFormData = new FormData();
        backendFormData.append("video", file, file.name);
        // Set timeout to 10 minutes for video processing
        const controller = new AbortController();
        const timeoutId = setTimeout(()=>controller.abort(), 600000);
        try {
            const backendResponse = await fetch("http://127.0.0.1:5001/analyze_video", {
                method: "POST",
                body: backendFormData,
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (!backendResponse.ok) {
                const errorData = await backendResponse.text();
                return new Response(JSON.stringify({
                    error: errorData
                }), {
                    status: backendResponse.status
                });
            }
            const result = await backendResponse.json();
            return new Response(JSON.stringify(result), {
                status: 200
            });
        } catch (fetchError) {
            if (fetchError.name === 'AbortError') {
                return new Response(JSON.stringify({
                    error: "Processing timed out. Your video file may be too large or complex to process."
                }), {
                    status: 504
                });
            }
            throw fetchError;
        }
    } catch (error) {
        return new Response(JSON.stringify({
            error: error.message || "Internal Server Error"
        }), {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__fb0cf827._.js.map