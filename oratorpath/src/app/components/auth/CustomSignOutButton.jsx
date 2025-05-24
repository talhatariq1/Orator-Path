"use client";

import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';

/**
 * A custom sign-out button component that handles sign-out functionality
 * This component avoids the React hooks error by using a dedicated sign-out page
 */
const CustomSignOutButton = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = useCallback(() => {
    if (isLoading) return; // Prevent multiple clicks

    try {
      setIsLoading(true);

      // Navigate to the dedicated sign-out page
      // This avoids React hooks errors by handling sign-out in a dedicated page
      router.push('/sign-out');
    } catch (error) {
      console.error('Error navigating to sign-out page:', error);

      // If there's an error with navigation, try direct navigation
      window.location.href = '/sign-out';
    }
  }, [isLoading, router]);

  return (
    <button
      onClick={handleSignOut}
      disabled={isLoading}
      className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-red-400 bg-red-900/20 border border-red-900/30 rounded-md hover:bg-red-900/30 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Signing out...
        </span>
      ) : (
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          {children || 'Sign out'}
        </span>
      )}
    </button>
  );
};

export default CustomSignOutButton;
