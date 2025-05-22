(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__e07e566a._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/src/middleware.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkMiddleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$routeMatcher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
;
// ===== Route Matchers =====
// Define dashboard routes that should be protected
const isDashboardRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$routeMatcher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createRouteMatcher"])([
    '/dashboard(.*)'
]);
// Define admin routes that require special permissions
const isAdminRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$routeMatcher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createRouteMatcher"])([
    '/dashboard/admin(.*)'
]);
// Define public routes that should not be protected
const isPublicRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$routeMatcher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createRouteMatcher"])([
    '/',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/sign-out',
    '/auth-redirect'
]);
// Define API routes (can be protected separately)
const isApiRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$routeMatcher$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createRouteMatcher"])([
    '/api(.*)'
]);
// ===== Authentication Helper Functions =====
/**
 * Checks if a user is authenticated
 * @param {Object} auth - The auth object from Clerk
 * @returns {Promise<boolean>} - True if user is authenticated, false otherwise
 */ async function isAuthenticated(auth) {
    const { userId } = await auth();
    return !!userId;
}
/**
 * Checks if a user has a specific permission
 * @param {Object} auth - The auth object from Clerk
 * @param {string} permission - The permission to check
 * @returns {Promise<boolean>} - True if user has the permission, false otherwise
 */ async function hasPermission(auth, permission) {
    const { has } = await auth();
    return has({
        permission
    });
}
/**
 * Checks if a user has a specific role
 * @param {Object} auth - The auth object from Clerk
 * @param {string} role - The role to check
 * @returns {Promise<boolean>} - True if user has the role, false otherwise
 */ async function hasRole(auth, role) {
    const { has } = await auth();
    return has({
        role
    });
}
/**
 * Checks if the request is coming from the sign-in page
 * @param {Object} req - The request object
 * @returns {boolean} - True if the request is from the sign-in page
 */ function isFromSignInPage(req) {
    const referer = req.headers.get('referer') || '';
    return referer.includes('/sign-in');
}
// ===== Route Protection Utilities =====
/**
 * Protects a route based on authentication status
 * @param {Object} auth - The auth object from Clerk
 * @param {Object} req - The request object
 * @returns {Promise<Response|undefined>} - Redirect response or undefined
 */ async function protectRoute(auth, req) {
    if (!await isAuthenticated(auth)) {
        // Check if we're already on the sign-in page or coming from it
        // This prevents redirect loops and unnecessary redirects
        if (req.url.includes('/sign-in') || isFromSignInPage(req)) {
            return;
        }
        const { redirectToSignIn } = await auth();
        return redirectToSignIn({
            returnBackUrl: req.url
        });
    }
    return undefined;
}
/**
 * Protects a route based on a permission
 * @param {Object} auth - The auth object from Clerk
 * @param {Object} req - The request object
 * @param {string} permission - The required permission
 * @returns {Promise<Response|undefined>} - Redirect or unauthorized response, or undefined
 */ async function protectRouteWithPermission(auth, req, permission) {
    // First check if user is authenticated
    const authCheck = await protectRoute(auth, req);
    if (authCheck) return authCheck;
    // Then check for permission
    if (!await hasPermission(auth, permission)) {
        // Return 403 Forbidden for authenticated users without permission
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "You don't have permission to access this resource"
        }, {
            status: 403
        });
    }
    return undefined;
}
/**
 * Protects a route based on a role
 * @param {Object} auth - The auth object from Clerk
 * @param {Object} req - The request object
 * @param {string} role - The required role
 * @returns {Promise<Response|undefined>} - Redirect or unauthorized response, or undefined
 */ async function protectRouteWithRole(auth, req, role) {
    // First check if user is authenticated
    const authCheck = await protectRoute(auth, req);
    if (authCheck) return authCheck;
    // Then check for role
    if (!await hasRole(auth, role)) {
        // Return 403 Forbidden for authenticated users without the role
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "You don't have the required role to access this resource"
        }, {
            status: 403
        });
    }
    return undefined;
}
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkMiddleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clerkMiddleware"])(async (auth, req)=>{
    // Skip public routes
    if (isPublicRoute(req)) {
        return;
    }
    // Check if the user is already authenticated
    const isUserAuthenticated = await isAuthenticated(auth);
    // If the user is already authenticated and trying to access sign-in or sign-up page,
    // redirect them to dashboard to prevent the auth pages from showing
    if (isUserAuthenticated && (req.url.includes('/sign-in') || req.url.includes('/sign-up'))) {
        // Check if there's a redirect_url parameter in the URL
        const url = new URL(req.url);
        let redirectUrl = url.searchParams.get('redirect_url') || '/dashboard';
        // Decode the redirect URL if it's encoded
        try {
            // Check if the redirectUrl is already a full URL
            if (redirectUrl.startsWith('http')) {
                // Parse the URL to extract just the path
                const parsedRedirectUrl = new URL(redirectUrl);
                // Only use the pathname and search params from the redirect URL
                redirectUrl = parsedRedirectUrl.pathname + parsedRedirectUrl.search;
            }
            // Create the target URL relative to the current domain
            const targetUrl = new URL(redirectUrl, req.url);
            console.log("Redirecting authenticated user to:", targetUrl.toString());
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(targetUrl);
        } catch (error) {
            console.error("Error processing redirect URL:", error);
            // Fallback to dashboard if there's an error
            const dashboardUrl = new URL('/dashboard', req.url);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(dashboardUrl);
        }
    }
    // Protect admin routes with admin permission
    if (isAdminRoute(req)) {
        const protectionResult = await protectRouteWithRole(auth, req, "org:admin");
        if (protectionResult) return protectionResult;
    } else if (isDashboardRoute(req)) {
        try {
            // Use the built-in auth.protect() for standard dashboard routes
            await auth.protect();
        } catch (error) {
            console.error("Authentication error:", error);
            // If there's an error during authentication, don't redirect if we're already
            // in the process of navigating between dashboard pages
            if (req.headers.get('referer')?.includes('/dashboard')) {
                // Don't redirect, let the client handle it
                return;
            }
            // Otherwise, proceed with normal protection
            const { redirectToSignIn } = await auth();
            return redirectToSignIn({
                returnBackUrl: req.url
            });
        }
    } else if (isApiRoute(req)) {
        // Use the built-in auth.protect() for API routes
        await auth.protect();
    }
});
const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__e07e566a._.js.map