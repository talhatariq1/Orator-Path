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
            <div className="relative h-12 w-12">
              <img
                src="/_next/static/media/logo.png"
                alt="OratorPath Logo"
                className="w-full h-full object-contain filter brightness-125 contrast-125"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
                loading="eager"
                decoding="async"
              />
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