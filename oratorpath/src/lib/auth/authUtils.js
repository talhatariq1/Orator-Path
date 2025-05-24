/**
 * Authentication utility functions for client-side components
 */

/**
 * Checks if the current URL is a sign-in redirect
 * This helps prevent the sign-in page from showing up during dashboard navigation
 * 
 * @returns {boolean} True if the current URL is a sign-in redirect
 */
export const isSignInRedirect = () => {
  if (typeof window === 'undefined') return false;
  
  const url = window.location.href;
  return url.includes('/sign-in') && url.includes('redirect_url');
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
    // Get the redirect URL from the query parameters or use dashboard as default
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirect_url') || '/dashboard';
    
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
