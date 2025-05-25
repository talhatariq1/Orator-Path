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
      className="flex items-center justify-center w-full px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-red-400 bg-red-900/20 border border-red-900/30 rounded-md hover:bg-red-900/30 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <span className="flex items-center">
          Signing out...
        </span>
      ) : (
        <span className="flex items-center">
          {children || 'Sign out'}
        </span>
      )}
    </button>
  );
};

export default CustomSignOutButton;
