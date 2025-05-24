"use client";

import { SignIn } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import AuthLoading from '../../components/auth/AuthLoading';
import { useRedirect } from '../../../lib/context/RedirectContext';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  const { setIsRedirecting } = useRedirect(); // Get the setIsRedirecting function from context

  // Get the redirect URL from the query parameters
  const redirectUrl = searchParams.get('redirect_url') || '/dashboard';

  // Handle redirection if user is already signed in
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      console.log("User is already signed in, redirecting to:", redirectUrl);

      // Set the redirecting state to true to hide the navigation bar
      setIsRedirecting(true);

      // Check if the redirectUrl is a full URL (encoded)
      if (redirectUrl.startsWith('http')) {
        // Use our special redirect handler for complex redirects
        router.push(`/auth-redirect?redirect_url=${encodeURIComponent(redirectUrl)}`);
      } else {
        // Use a small delay to ensure the UI has time to update
        const redirectTimer = setTimeout(() => {
          router.push(redirectUrl);
        }, 100);

        return () => {
          clearTimeout(redirectTimer);
          // We don't reset isRedirecting here because we want it to stay true during the redirect
        };
      }
    }
  }, [isLoaded, isSignedIn, redirectUrl, router, setIsRedirecting]);

  // Simulate a brief loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Show loading state while checking auth or during initial load
  if (isLoading || !isLoaded) {
    return <AuthLoading message="Preparing sign-in..." />;
  }

  // If user is already signed in, show a loading state while redirecting
  if (isSignedIn) {
    return <AuthLoading message="You're signed in! Redirecting to dashboard..." />;
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-3'>
      {/* OratorPath Logo */}
      <div className="mb-6">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/images/logo.webp"
            alt="OratorPath Logo"
            width={48}
            height={48}
            className="h-12 w-auto filter brightness-125 contrast-125"
            style={{ objectFit: "contain" }}
            priority
          />
          <h1 className="text-2xl font-bold text-white">
            OratorPath
          </h1>
        </Link>
      </div>

      {/* Clerk SignIn Component */}
      <SignIn
        signUpUrl="/sign-up"
        appearance={{
          baseTheme: dark,
          elements: {
            logoImage: "hidden",
            logoBox: "hidden",
            headerTitle: "hidden",
            headerSubtitle: "hidden",
            card: "shadow-xl border border-gray-800",
            formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-sm normal-case",
            footerActionLink: "text-purple-400 hover:text-purple-300",
            formFieldInput: "focus:border-purple-500",
            identityPreviewEditButton: "text-purple-500 hover:text-purple-400"
          }
        }}
      />

      {/* Help text */}
      <p className="mt-6 text-gray-400 text-sm text-center max-w-md">
        Sign in to access your OratorPath dashboard and continue your speaking journey.
      </p>
    </div>
  );
}