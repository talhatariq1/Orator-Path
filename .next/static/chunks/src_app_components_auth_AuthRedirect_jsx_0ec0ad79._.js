(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/auth/AuthRedirect.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AuthRedirect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__usePromisifiedAuth__as__useAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/client-boundary/PromisifiedAuthProvider.js [app-client] (ecmascript) <export usePromisifiedAuth as useAuth>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AuthRedirect({ redirectTo = '/dashboard', ifAuthenticated = false, ifUnauthenticated = false, forceRedirect = false, delay = 100, children = null }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isLoaded, userId, isSignedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__usePromisifiedAuth__as__useAuth$3e$__["useAuth"])();
    const [isRedirecting, setIsRedirecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthRedirect.useEffect": ()=>{
            if (!isLoaded) return; // Wait until auth is loaded
            const isAuthenticated = !!userId && isSignedIn;
            // Redirect based on authentication state
            if (ifAuthenticated && isAuthenticated || ifUnauthenticated && !isAuthenticated) {
                if (isRedirecting) return; // Prevent multiple redirects
                setIsRedirecting(true);
                console.log(`AuthRedirect: Redirecting to ${redirectTo} (auth state: ${isAuthenticated ? 'authenticated' : 'unauthenticated'})`);
                // Add a small delay to ensure the redirect happens after any auth state changes
                const timer = setTimeout({
                    "AuthRedirect.useEffect.timer": ()=>{
                        if (forceRedirect) {
                            // Use direct location change for more reliable redirect
                            window.location.href = redirectTo;
                        } else {
                            // Try Next.js router first
                            try {
                                router.push(redirectTo);
                                // Fallback to direct location change if router doesn't redirect within 500ms
                                const fallbackTimer = setTimeout({
                                    "AuthRedirect.useEffect.timer.fallbackTimer": ()=>{
                                        if (document.location.pathname !== new URL(redirectTo, document.location.origin).pathname) {
                                            console.log("Router redirect didn't complete, using direct location change");
                                            window.location.href = redirectTo;
                                        }
                                    }
                                }["AuthRedirect.useEffect.timer.fallbackTimer"], 500);
                                return ({
                                    "AuthRedirect.useEffect.timer": ()=>clearTimeout(fallbackTimer)
                                })["AuthRedirect.useEffect.timer"];
                            } catch (error) {
                                console.error("Error during router redirect:", error);
                                window.location.href = redirectTo;
                            }
                        }
                    }
                }["AuthRedirect.useEffect.timer"], delay);
                return ({
                    "AuthRedirect.useEffect": ()=>clearTimeout(timer)
                })["AuthRedirect.useEffect"];
            }
        }
    }["AuthRedirect.useEffect"], [
        isLoaded,
        userId,
        isSignedIn,
        ifAuthenticated,
        ifUnauthenticated,
        redirectTo,
        router,
        forceRedirect,
        delay,
        isRedirecting
    ]);
    // Return children if no redirect or while waiting for auth to load
    return children;
}
_s(AuthRedirect, "crSIQ3dPz+u93/QJh11SUQD8koA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__usePromisifiedAuth__as__useAuth$3e$__["useAuth"]
    ];
});
_c = AuthRedirect;
var _c;
__turbopack_context__.k.register(_c, "AuthRedirect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/auth/AuthRedirect.jsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/components/auth/AuthRedirect.jsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_app_components_auth_AuthRedirect_jsx_0ec0ad79._.js.map