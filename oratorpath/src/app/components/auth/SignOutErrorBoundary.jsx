"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * A special error boundary component for sign-out operations
 * This component catches errors during sign-out and redirects to the dedicated sign-out page
 */
const SignOutErrorBoundary = ({ children }) => {
  const router = useRouter();
  const [hasError, setHasError] = useState(false);

  // Handle errors by redirecting to the dedicated sign-out page
  useEffect(() => {
    if (hasError) {
      // If an error occurs, redirect to the sign-out page
      try {
        router.push('/sign-out');
      } catch (error) {
        console.error('Error redirecting to sign-out page:', error);
        // Fallback to direct navigation if router fails
        window.location.href = '/sign-out';
      }
    }

    // Add a global error handler for uncaught errors during sign-out
    const handleError = (event) => {
      // Check if the error is related to React hooks
      if (event.error && event.error.message &&
          (event.error.message.includes('hooks') ||
           event.error.message.includes('render'))) {
        console.error('Caught sign-out error:', event.error);
        event.preventDefault(); // Prevent the error from bubbling up
        setHasError(true);
      }
    };

    window.addEventListener('error', handleError);

    // Also listen for unhandled promise rejections
    const handleRejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      if (event.reason && event.reason.message &&
          (event.reason.message.includes('hooks') ||
           event.reason.message.includes('render'))) {
        event.preventDefault();
        setHasError(true);
      }
    };

    window.addEventListener('unhandledrejection', handleRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, [hasError, router]);

  // If an error occurred, show nothing while redirecting
  if (hasError) {
    return null;
  }

  return children;
};

export default SignOutErrorBoundary;
