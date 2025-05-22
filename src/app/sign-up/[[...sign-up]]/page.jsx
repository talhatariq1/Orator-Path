"use client";

import { SignUp } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import AuthLoading from '../../components/auth/AuthLoading';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a brief loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AuthLoading message="Preparing sign-up..." />;
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-3'>
      {/* OratorPath Logo */}
      <div className="mb-6">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/Logo.PNG"
            alt="Logo"
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

      {/* Clerk SignUp Component */}
      <SignUp
        signInUrl="/sign-in"
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
        Sign up to start your speaking journey with OratorPath.
      </p>
    </div>
  );
}
