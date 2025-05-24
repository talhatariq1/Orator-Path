"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { dark } from '@clerk/themes'
import { usePathname } from "next/navigation";
import "../styles/navigation-responsive.css";
import { useRedirect } from "../../lib/context/RedirectContext";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Playground", href: "/#playground" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Pricing", href: "/#pricing" },
];

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDashboard, setIsDashboard] = useState(false);
  const pathname = usePathname(); // Get current pathname - used for active link styling
  const { isRedirecting } = useRedirect(); // Get redirection state from context

  // Check if we're in the dashboard, sign-in, or sign-up pages
  useEffect(() => {
    // Check if the pathname starts with /dashboard or is a sign-in/sign-up page
    const dashboardActive = pathname.startsWith('/dashboard');
    const isAuthPage = pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up');
    setIsDashboard(dashboardActive || isAuthPage);

    // Also check for the body class (for client-side navigation)
    const checkBodyClass = () => {
      const hasDashboardClass = document.body.classList.contains('dashboard-active');
      setIsDashboard(hasDashboardClass || isAuthPage);
    };

    // Initial check
    checkBodyClass();

    // Set up a MutationObserver to watch for class changes on the body
    const observer = new MutationObserver(checkBodyClass);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e, targetId) => {
    // Only apply smooth scroll on the homepage
    if (pathname !== '/') return;

    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Close mobile menu if open
      if (mobileMenuOpen) setMobileMenuOpen(false);

      // Smooth scroll to the target element
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Don't render the navigation bar if:
  // 1. We're in the dashboard, sign-in, or sign-up pages
  // 2. We're in the process of redirecting after login
  if (isDashboard || isRedirecting) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 py-2 bg-black/60 backdrop-blur-sm shadow-lg main-header`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center px-6 py-1">
        {/* Logo Section - positioned to the left */}
        <div className="flex-shrink-0 absolute left-6">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div 
              className="h-12 w-12 bg-contain bg-no-repeat bg-center relative"
              style={{
                backgroundImage: 'url(/logo.png)',
                filter: 'brightness(1.25) contrast(1.25)'
              }}
              role="img"
              aria-label="OratorPath Logo"
            >
              {/* Fallback SVG if background image fails to load */}
              <svg
                className="absolute inset-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="24" fill="#4F46E5"/>
                <path
                  d="M24 12C17.373 12 12 17.373 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 17.373 30.627 12 24 12ZM24 34C18.477 34 14 29.523 14 24C14 18.477 18.477 14 24 14C29.523 14 34 18.477 34 24C34 29.523 29.523 34 24 34Z"
                  fill="white"
                />
                <path
                  d="M24 16C19.582 16 16 19.582 16 24C16 28.418 19.582 32 24 32C28.418 32 32 28.418 32 24C32 19.582 28.418 16 24 16ZM24 30C20.686 30 18 27.314 18 24C18 20.686 20.686 18 24 18C27.314 18 30 20.686 30 24C30 27.314 27.314 30 24 30Z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">
              OratorPath
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center justify-center px-8 py-3 rounded-full shadow-md bg-black/40 nav-border-animation">
          {navLinks.map((link) => (
            <div key={link.label} className="px-4 z-10 relative">
              <Link
                href={link.href}
                className="text-gray-300 hover:text-white transition duration-200 cursor-pointer text-base font-medium"
                onClick={(e) => handleSmoothScroll(e, link.href.replace('/#', ''))}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div className="ml-2 z-10 relative">
            <SignedOut>
              <Link
                href="/sign-in"
                className="px-5 py-2 bg-gradient-to-r from-purple-500 to-rose-500
                           text-white rounded-full hover:opacity-90 transition hover:shadow-lg hover:shadow-purple-500/20
                           flex items-center gap-2 cursor-pointer font-medium"
              >
                Login
              </Link>
            </SignedOut>
            <SignedIn>
              {/* Show Dashboard button only when user is on root page */}
              <div className="flex items-center gap-3">
                {pathname === "/" && (
                  <Link
                    href="/dashboard"
                    className="px-5 py-2 bg-gradient-to-r from-purple-500 to-rose-500
                               text-white rounded-full hover:opacity-90 transition hover:shadow-lg hover:shadow-purple-500/20
                               flex items-center gap-2 cursor-pointer font-medium"
                  >
                    Dashboard
                  </Link>
                )}
                <UserButton
                  appearance={{
                     baseTheme: dark,
                    elements: {
                      userButtonAvatarBox: "w-9 h-9 border-2 border-purple-400 rounded-full",
                      userButtonTrigger: "focus:shadow-outline-purple",
                      userButtonPopoverCard: "bg-gray-900 border border-gray-800",
                      userButtonPopoverText: "text-white",
                      userButtonPopoverActionButtonText: "text-white",
                      userButtonPopoverFooterText: "text-gray-400"
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </nav>

        {/* Mobile Menu Button - positioned to the right */}
        <div className="flex items-center gap-2 lg:hidden absolute right-6">
          <SignedOut>
            <Link
              href="/sign-in"
              className="px-3 text-sm py-1 bg-gradient-to-r from-purple-500 to-rose-500
                         text-white rounded-full hover:opacity-90 transition
                         flex items-center gap-1 cursor-pointer"
            >
              Login
            </Link>
          </SignedOut>
          <SignedIn>
            {/* Show Dashboard button only when user is on root page - mobile version */}
            <div className="flex items-center gap-2">
              {pathname === "/" && (
                <Link
                  href="/dashboard"
                  className="px-3 text-sm py-1 bg-gradient-to-r from-purple-500 to-rose-500
                             text-white rounded-full hover:opacity-90 transition
                             flex items-center gap-1 cursor-pointer"
                >
                  Dashboard
                </Link>
              )}
              <UserButton
                appearance={{
                   baseTheme: dark,
                  elements: {
                    userButtonAvatarBox: "w-8 h-8 border-2 border-purple-400 rounded-full",
                    userButtonTrigger: "focus:shadow-outline-purple",
                    userButtonPopoverCard: "bg-gray-900 border border-gray-800",
                    userButtonPopoverText: "text-white",
                    userButtonPopoverActionButtonText: "text-white",
                    userButtonPopoverFooterText: "text-gray-400"
                  }
                }}
              />
            </div>
          </SignedIn>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white/70 hover:text-white/85 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/80 shadow-md nav-border-animation mx-4 my-2 rounded-xl mobile-menu">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition duration-200 cursor-pointer"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleSmoothScroll(e, link.href.replace('/#', ''));
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}