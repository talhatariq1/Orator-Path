module.exports = {

"[project]/.next-internal/server/app/api/transcribe/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/transcribe/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
async function POST(req) {
    try {
        console.log("📡 Receiving file from frontend...");
        const formData = await req.formData();
        const file = formData.get("audio");
        if (!file) {
            console.error("❌ No file received in Next.js API!");
            return new Response(JSON.stringify({
                error: "No file provided"
            }), {
                status: 400
            });
        }
        console.log("🚀 Sending file to Flask backend...");
        const backendFormData = new FormData();
        backendFormData.append("audio", file, file.name);
        // Increase timeout to 5 minutes (300000ms)
        const controller = new AbortController();
        const timeoutId = setTimeout(()=>controller.abort(), 600000);
        const backendResponse = await fetch("http://127.0.0.1:5000/transcribe", {
            method: "POST",
            body: backendFormData,
            signal: controller.signal
        });
        clearTimeout(timeoutId); // Clear the timeout if fetch completes
        if (!backendResponse.ok) {
            const errorText = await backendResponse.text();
            console.error("Backend error response:", errorText);
            return new Response(JSON.stringify({
                error: errorText
            }), {
                status: backendResponse.status
            });
        }
        const result = await backendResponse.json();
        console.log("✅ Backend response:", result);
        return new Response(JSON.stringify(result), {
            status: backendResponse.status
        });
    } catch (error) {
        console.error("❌ Error in Next.js API:", error);
        // Better error message for timeouts
        if (error.name === 'AbortError' || error.code === 'UND_ERR_HEADERS_TIMEOUT') {
            return new Response(JSON.stringify({
                error: "Processing timed out. Your audio file may be too large or complex to process."
            }), {
                status: 504
            });
        }
        return new Response(JSON.stringify({
            error: error.message || "Internal Server Error"
        }), {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9bfdbe9a._.js.map