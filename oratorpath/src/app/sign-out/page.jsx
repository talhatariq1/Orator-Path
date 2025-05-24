"use client";

import { useEffect, useState } from 'react';
import { useClerk } from '@clerk/nextjs';
import AuthLoading from '../components/auth/AuthLoading';

/**
 * Dedicated sign-out page that handles the sign-out process
 * This avoids React hooks errors by having a dedicated page for sign-out
 */
export default function SignOutPage() {
  const clerk = useClerk();
  const [status, setStatus] = useState('Signing you out...');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to handle sign-out
    const performSignOut = async () => {
      try {
        // Sign out the user
        await clerk.signOut();
        setStatus('Sign out successful! Redirecting...');
        
        // Redirect to home page after a short delay
        setTimeout(() => {
          // Use window.location.href for a full page refresh after sign-out is complete
          // This avoids React hook errors by completely unmounting all components
          window.location.href = '/';
        }, 1000);
      } catch (err) {
        console.error('Error during sign-out:', err);
        setError('There was an error signing you out. Redirecting to home page...');
        
        // Redirect to home page even if there's an error
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      }
    };

    // Start the sign-out process
    performSignOut();
  }, [clerk]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <AuthLoading 
        message={error || status} 
        fullScreen={true}
      />
    </div>
  );
}
