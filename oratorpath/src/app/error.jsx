"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

/**
 * Global error page for the application
 * This will catch any uncaught errors and provide a user-friendly error page
 */
export default function GlobalError({ error, reset }) {
  const router = useRouter();

  // Log the error to console for debugging
  useEffect(() => {
    console.error('Global error caught:', error);

    // If the error is related to React hooks during sign-out, redirect to home
    if (error?.message?.includes('hooks') || error?.message?.includes('render')) {
      const redirectTimer = setTimeout(() => {
        router.push('/');
      }, 500);
      
      return () => clearTimeout(redirectTimer);
    }
  }, [error, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
        <h2 className="text-xl font-bold text-red-400 mb-4">Something went wrong</h2>
        <p className="text-gray-300 mb-4">
          We encountered an error while processing your request. Please try again or return to the home page.
        </p>
        
        {/* Show error message in development only */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-gray-900 p-3 rounded mb-4 text-sm text-gray-400 overflow-auto max-h-32">
            <p>{error?.message || 'Unknown error'}</p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={reset}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
          
          <Link
            href="/"
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors text-center"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
