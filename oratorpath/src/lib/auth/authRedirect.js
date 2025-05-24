/**
 * Enhanced authentication redirection utilities
 * This file consolidates all redirection logic for authentication flows
 */

import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

/**
 * Checks if the current URL is a sign-in redirect
 * @returns {boolean} True if the current URL is a sign-in redirect
 */
export const isSignInRedirect = () => {
  if (typeof window === 'undefined') return false;

  const url = window.location.href;
  return url.includes('/sign-in') && url.includes('redirect_url');
};

/**
 * Extracts the redirect URL from the current URL
 * @returns {string} The redirect URL or '/dashboard' as default
 */
export const getRedirectUrl = () => {
  if (typeof window === 'undefined') return '/dashboard';

  try {
    const urlParams = new URLSearchParams(window.location.search);
    let redirectUrl = urlParams.get('redirect_url') || '/dashboard';

    // Handle encoded URLs
    if (redirectUrl.startsWith('http')) {
      try {
        // Parse the URL to extract just the path
        const parsedRedirectUrl = new URL(redirectUrl);
        // Only use the pathname and search params from the redirect URL
        redirectUrl = parsedRedirectUrl.pathname + parsedRedirectUrl.search;
        console.log("Processed redirect URL:", redirectUrl);
      } catch (parseError) {
        console.error('Error parsing full redirect URL:', parseError);
      }
    }

    return redirectUrl;
  } catch (error) {
    console.error('Error parsing redirect URL:', error);
    return '/dashboard';
  }
};

/**
 * Handles authentication redirects
 * If the user is already authenticated and on the sign-in page, redirect to dashboard
 *
 * @param {Object} router - Next.js router object
 * @param {boolean} isAuthenticated - Whether the user is authenticated
 */
export const handleAuthRedirect = (router, isAuthenticated) => {
  if (typeof window === 'undefined') return;

  const url = window.location.href;

  // If user is authenticated and on sign-in page, redirect to dashboard
  if (isAuthenticated && url.includes('/sign-in')) {
    const redirectUrl = getRedirectUrl();

    // Redirect to the appropriate page
    router.replace(redirectUrl);
  }
};

/**
 * Prevents sign-in page from showing during dashboard navigation
 * This function should be called in the useEffect hook of dashboard components
 *
 * @param {Object} router - Next.js router object
 */
export const preventSignInRedirect = (router) => {
  if (typeof window === 'undefined') return;

  const url = window.location.href;

  // If we're on the sign-in page with a redirect URL to dashboard, go directly to dashboard
  if (url.includes('/sign-in') && url.includes('redirect_url=') && url.includes('/dashboard')) {
    router.replace('/dashboard');
  }
};

/**
 * Hook to handle authentication redirects
 * Use this in layout components to manage authentication state and redirects
 *
 * @returns {Object} Authentication state and loading state
 */
export const useAuthRedirect = () => {
  const { isLoaded, isSignedIn, userId } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isLoaded) return;

    // If user is not signed in and trying to access protected routes
    if (!isSignedIn && !userId && pathname.startsWith('/dashboard')) {
      console.log("User not signed in, redirecting to sign-in with redirect to:", pathname);
      // Redirect to sign-in page with the current URL as redirect_url
      router.replace(`/sign-in?redirect_url=${encodeURIComponent(pathname)}`);
    }

    // If user is signed in and trying to access auth pages
    if (isSignedIn && userId && (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up'))) {
      // Get redirect URL from query params if available
      const redirectUrl = getRedirectUrl();
      console.log("User is signed in on auth page, redirecting to:", redirectUrl);

      // Check if the redirectUrl is a full URL (encoded)
      if (redirectUrl.startsWith('http')) {
        // Use our special redirect handler for complex redirects
        router.replace(`/auth-redirect?redirect_url=${encodeURIComponent(redirectUrl)}`);
      } else {
        // Use a small delay to ensure the UI has time to update
        const redirectTimer = setTimeout(() => {
          router.replace(redirectUrl);
        }, 100);

        return () => clearTimeout(redirectTimer);
      }
    }

    // Prevent sign-in redirect loops
    if (isSignedIn && userId && pathname.startsWith('/dashboard')) {
      preventSignInRedirect(router);
    }
  }, [isLoaded, isSignedIn, userId, pathname, router, searchParams]);

  return { isLoaded, isSignedIn, userId };
};

/**
 * Utility to create a redirect URL with the current path as the redirect target
 *
 * @param {string} currentPath - The current path
 * @returns {string} The sign-in URL with redirect parameter
 */
export const createSignInWithRedirect = (currentPath) => {
  return `/sign-in?redirect_url=${encodeURIComponent(currentPath)}`;
};

/**
 * Utility to handle sign-out redirection
 *
 * @param {Function} signOut - Clerk's signOut function
 * @param {Object} router - Next.js router object
 */
export const handleSignOut = async (signOut, router) => {
  try {
    await signOut();
    // Redirect to home page after sign out
    router.push('/');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
