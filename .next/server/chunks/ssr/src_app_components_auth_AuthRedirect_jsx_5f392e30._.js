module.exports = {

"[project]/src/app/components/auth/AuthRedirect.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AuthRedirect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__usePromisifiedAuth__as__useAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/client-boundary/PromisifiedAuthProvider.js [app-ssr] (ecmascript) <export usePromisifiedAuth as useAuth>");
"use client";
;
;
;
function AuthRedirect({ redirectTo = '/dashboard', ifAuthenticated = false, ifUnauthenticated = false, forceRedirect = false, delay = 100, children = null }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isLoaded, userId, isSignedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__usePromisifiedAuth__as__useAuth$3e$__["useAuth"])();
    const [isRedirecting, setIsRedirecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoaded) return; // Wait until auth is loaded
        const isAuthenticated = !!userId && isSignedIn;
        // Redirect based on authentication state
        if (ifAuthenticated && isAuthenticated || ifUnauthenticated && !isAuthenticated) {
            if (isRedirecting) return; // Prevent multiple redirects
            setIsRedirecting(true);
            console.log(`AuthRedirect: Redirecting to ${redirectTo} (auth state: ${isAuthenticated ? 'authenticated' : 'unauthenticated'})`);
            // Add a small delay to ensure the redirect happens after any auth state changes
            const timer = setTimeout(()=>{
                if (forceRedirect) {
                    // Use direct location change for more reliable redirect
                    window.location.href = redirectTo;
                } else {
                    // Try Next.js router first
                    try {
                        router.push(redirectTo);
                        // Fallback to direct location change if router doesn't redirect within 500ms
                        const fallbackTimer = setTimeout(()=>{
                            if (document.location.pathname !== new URL(redirectTo, document.location.origin).pathname) {
                                console.log("Router redirect didn't complete, using direct location change");
                                window.location.href = redirectTo;
                            }
                        }, 500);
                        return ()=>clearTimeout(fallbackTimer);
                    } catch (error) {
                        console.error("Error during router redirect:", error);
                        window.location.href = redirectTo;
                    }
                }
            }, delay);
            return ()=>clearTimeout(timer);
        }
    }, [
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
}}),
"[project]/src/app/components/auth/AuthRedirect.jsx [app-ssr] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/components/auth/AuthRedirect.jsx [app-ssr] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_app_components_auth_AuthRedirect_jsx_5f392e30._.js.map