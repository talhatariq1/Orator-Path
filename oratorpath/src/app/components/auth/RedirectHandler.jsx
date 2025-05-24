"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import AuthLoading from './AuthLoading';

/**
 * Component to handle redirects after authentication
 * This is a special component to handle cases where the user is stuck on a redirect page
 */
const RedirectHandler = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isLoaded, isSignedIn } = useAuth();
  const [message, setMessage] = useState("Processing authentication...");
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (!isLoaded) return;
    
    try {
      // Get the redirect URL from the query parameters
      let redirectUrl = searchParams.get('redirect_url') || '/dashboard';
      
      // Log the redirect URL for debugging
      console.log("RedirectHandler: Processing redirect to", redirectUrl);
      
      // Handle encoded URLs
      if (redirectUrl.startsWith('http')) {
        try {
          // Parse the URL to extract just the path
          const parsedRedirectUrl = new URL(redirectUrl);
          // Only use the pathname and search params from the redirect URL
          redirectUrl = parsedRedirectUrl.pathname + parsedRedirectUrl.search;
          console.log("RedirectHandler: Processed redirect URL:", redirectUrl);
        } catch (parseError) {
          console.error('RedirectHandler: Error parsing full redirect URL:', parseError);
          setError("Invalid redirect URL format");
          redirectUrl = '/dashboard'; // Fallback
        }
      }
      
      // If the user is signed in, redirect them
      if (isSignedIn) {
        setMessage(`You're signed in! Redirecting to ${redirectUrl}...`);
        
        // Use a small delay to ensure the UI has time to update
        const redirectTimer = setTimeout(() => {
          router.push(redirectUrl);
        }, 500);
        
        return () => clearTimeout(redirectTimer);
      } else {
        // If not signed in but we're on a redirect page, something went wrong
        setMessage("Authentication required. Redirecting to sign-in...");
        
        // Redirect back to sign-in
        const redirectTimer = setTimeout(() => {
          router.push(`/sign-in?redirect_url=${encodeURIComponent(redirectUrl)}`);
        }, 1000);
        
        return () => clearTimeout(redirectTimer);
      }
    } catch (error) {
      console.error("RedirectHandler: Error during redirect processing:", error);
      setError("Error processing redirect. Redirecting to dashboard...");
      
      // Fallback to dashboard
      const fallbackTimer = setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
      
      return () => clearTimeout(fallbackTimer);
    }
  }, [isLoaded, isSignedIn, router, searchParams]);
  
  return (
    <AuthLoading 
      message={error || message} 
      fullScreen={true} 
    />
  );
};

export default RedirectHandler;
