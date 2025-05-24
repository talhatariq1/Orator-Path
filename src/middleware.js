import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// ===== Route Matchers =====

// Define dashboard routes that should be protected
const isDashboardRoute = createRouteMatcher([
  '/dashboard(.*)', // Main dashboard and all sub-routes
]);

// Define admin routes that require special permissions
const isAdminRoute = createRouteMatcher([
  '/dashboard/admin(.*)', // Admin dashboard routes
]);

// Define public routes that should not be protected
const isPublicRoute = createRouteMatcher([
  '/',              // Home page
  '/sign-in(.*)',   // Sign-in pages
  '/sign-up(.*)',   // Sign-up pages
  '/sign-out',      // Sign-out page
  '/auth-redirect', // Special redirect handler page
]);

// Define API routes (can be protected separately)
const isApiRoute = createRouteMatcher([
  '/api(.*)',       // API routes
]);

// ===== Authentication Helper Functions =====

/**
 * Checks if a user is authenticated
 * @param {Object} auth - The auth object from Clerk
 * @returns {Promise<boolean>} - True if user is authenticated, false otherwise
 */
async function isAuthenticated(auth) {
  const { userId } = await auth();
  return !!userId;
}

/**
 * Checks if a user has a specific permission
 * @param {Object} auth - The auth object from Clerk
 * @param {string} permission - The permission to check
 * @returns {Promise<boolean>} - True if user has the permission, false otherwise
 */
async function hasPermission(auth, permission) {
  const { has } = await auth();
  return has({ permission });
}

/**
 * Checks if a user has a specific role
 * @param {Object} auth - The auth object from Clerk
 * @param {string} role - The role to check
 * @returns {Promise<boolean>} - True if user has the role, false otherwise
 */
async function hasRole(auth, role) {
  const { has } = await auth();
  return has({ role });
}

/**
 * Checks if the request is coming from the sign-in page
 * @param {Object} req - The request object
 * @returns {boolean} - True if the request is from the sign-in page
 */
function isFromSignInPage(req) {
  const referer = req.headers.get('referer') || '';
  return referer.includes('/sign-in');
}

// ===== Route Protection Utilities =====

/**
 * Protects a route based on authentication status
 * @param {Object} auth - The auth object from Clerk
 * @param {Object} req - The request object
 * @returns {Promise<Response|undefined>} - Redirect response or undefined
 */
async function protectRoute(auth, req) {
  if (!(await isAuthenticated(auth))) {
    // Check if we're already on the sign-in page or coming from it
    // This prevents redirect loops and unnecessary redirects
    if (req.url.includes('/sign-in') || isFromSignInPage(req)) {
      return;
    }

    const { redirectToSignIn } = await auth();
    return redirectToSignIn({ returnBackUrl: req.url });
  }
  return undefined;
}

/**
 * Protects a route based on a permission
 * @param {Object} auth - The auth object from Clerk
 * @param {Object} req - The request object
 * @param {string} permission - The required permission
 * @returns {Promise<Response|undefined>} - Redirect or unauthorized response, or undefined
 */
async function protectRouteWithPermission(auth, req, permission) {
  // First check if user is authenticated
  const authCheck = await protectRoute(auth, req);
  if (authCheck) return authCheck;

  // Then check for permission
  if (!(await hasPermission(auth, permission))) {
    // Return 403 Forbidden for authenticated users without permission
    return NextResponse.json(
      { error: "You don't have permission to access this resource" },
      { status: 403 }
    );
  }
  return undefined;
}

/**
 * Protects a route based on a role
 * @param {Object} auth - The auth object from Clerk
 * @param {Object} req - The request object
 * @param {string} role - The required role
 * @returns {Promise<Response|undefined>} - Redirect or unauthorized response, or undefined
 */
async function protectRouteWithRole(auth, req, role) {
  // First check if user is authenticated
  const authCheck = await protectRoute(auth, req);
  if (authCheck) return authCheck;

  // Then check for role
  if (!(await hasRole(auth, role))) {
    // Return 403 Forbidden for authenticated users without the role
    return NextResponse.json(
      { error: "You don't have the required role to access this resource" },
      { status: 403 }
    );
  }
  return undefined;
}

// ===== Middleware Implementation =====

export default clerkMiddleware(async (auth, req) => {
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
      return NextResponse.redirect(targetUrl);
    } catch (error) {
      console.error("Error processing redirect URL:", error);
      // Fallback to dashboard if there's an error
      const dashboardUrl = new URL('/dashboard', req.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  // Protect admin routes with admin permission
  if (isAdminRoute(req)) {
    const protectionResult = await protectRouteWithRole(auth, req, "org:admin");
    if (protectionResult) return protectionResult;
  }

  // Protect all dashboard routes
  else if (isDashboardRoute(req)) {
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
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  }

  // Protect API routes with authentication
  else if (isApiRoute(req)) {
    // Use the built-in auth.protect() for API routes
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};