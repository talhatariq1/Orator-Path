(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__6f719e3e._.js", {

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
"[project]/src/app/dashboard-middleware.js [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// This file contains middleware functions for dashboard routes
/**
 * Adds preload headers to dashboard routes
 * This helps prevent flashing during hard reloads
 *
 * @param {Request} request - The incoming request
 * @returns {Response} - The modified response with preload headers
 */ __turbopack_context__.s({
    "addDashboardPreloadHeaders": (()=>addDashboardPreloadHeaders),
    "isDashboardRoute": (()=>isDashboardRoute),
    "isHardReload": (()=>isHardReload)
});
function addDashboardPreloadHeaders(request) {
    const url = new URL(request.url);
    const headers = new Headers();
    // Add preload headers for dashboard-specific resources
    headers.append('Link', '</dashboard-preload.html>; rel=preload; as=document');
    headers.append('Link', '</dashboard-critical.css>; rel=preload; as=style');
    headers.append('Link', '</dashboard-preload.js>; rel=preload; as=script');
    headers.append('Link', '</styles/dashboard-background.css>; rel=preload; as=style');
    // Add Content-Security-Policy header to allow inline styles and scripts
    headers.append('Content-Security-Policy', "style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';");
    // Add cache control headers to prevent caching of dashboard pages
    headers.append('Cache-Control', 'no-store, must-revalidate');
    headers.append('Pragma', 'no-cache');
    headers.append('Expires', '0');
    return headers;
}
function isDashboardRoute(pathname) {
    return pathname.startsWith('/dashboard');
}
function isHardReload(request) {
    const referer = request.headers.get('referer');
    return !referer || !referer.includes(request.url);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard-middleware.js [middleware-edge] (ecmascript)");
;
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
    '/sign-up(.*)'
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
    // Get the pathname from the URL
    const url = new URL(req.url);
    const pathname = url.pathname;
    // Special handling for dashboard routes to prevent flashing during hard reloads
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isDashboardRoute"])(pathname)) {
        // For hard reloads of dashboard pages, serve the preload HTML
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isHardReload"])(req)) {
            // Check if this is a request for an asset (JS, CSS, image, etc.)
            const isAssetRequest = /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/i.test(pathname);
            // Only serve the preload HTML for non-asset requests
            if (!isAssetRequest) {
                try {
                    // Use the built-in auth.protect() for standard dashboard routes
                    await auth.protect();
                    // If authenticated, serve the preload HTML
                    // This will be shown while the actual dashboard page loads
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"](null, {
                        status: 307,
                        headers: {
                            'Location': '/dashboard-preload.html',
                            'Cache-Control': 'no-store, must-revalidate',
                            'Pragma': 'no-cache',
                            'Expires': '0'
                        }
                    });
                } catch (error) {
                    console.error("Authentication error on dashboard hard reload:", error);
                    // If not authenticated, redirect to sign-in
                    const { redirectToSignIn } = await auth();
                    return redirectToSignIn({
                        returnBackUrl: req.url
                    });
                }
            } else {
                // For asset requests, add preload headers
                const headers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["addDashboardPreloadHeaders"])(req);
                const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
                // Copy all the preload headers to the response
                headers.forEach((value, key)=>{
                    response.headers.set(key, value);
                });
                return response;
            }
        }
    }
    // Skip public routes
    if (isPublicRoute(req)) {
        return;
    }
    // Check if the user is already authenticated
    const isUserAuthenticated = await isAuthenticated(auth);
    // If the user is already authenticated and trying to access sign-in page,
    // redirect them to dashboard to prevent the sign-in page from showing
    if (isUserAuthenticated && req.url.includes('/sign-in')) {
        const dashboardUrl = new URL('/dashboard', req.url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(dashboardUrl);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__6f719e3e._.js.map