"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { UserButton, useAuth } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import { useAuthRedirect } from "../../../lib/auth/authRedirect";
import AuthLoading from "../auth/AuthLoading";
import CustomSignOutButton from "../auth/CustomSignOutButton";
import SignOutErrorBoundary from "../auth/SignOutErrorBoundary";

import "../../styles/dashboard-background.css";
import "../../styles/dashboard/dashboard-typography.css";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const { isLoaded: authLoaded, userId } = useAuth();
  const { isLoaded, isSignedIn } = useAuthRedirect();

  // Handle dashboard state and UI effects
  useEffect(() => {
    // Add a class to the body to indicate we're in the dashboard
    document.body.classList.add('dashboard-active');

    // Hide the pattern background from the root layout
    const patternBg = document.querySelector('.pattern-bg');
    if (patternBg) {
      patternBg.style.display = 'none';
    }

    // Clean up when component unmounts
    return () => {
      document.body.classList.remove('dashboard-active');

      // Only restore pattern background if we're not navigating to another dashboard page
      if (patternBg && !window.location.pathname.includes('/dashboard')) {
        patternBg.style.display = 'block';
      }
    };
  }, []);

  // Show loading state while authentication is being checked
  if (!isLoaded || !authLoaded) {
    return <AuthLoading message="Loading dashboard..." />;
  }

  // If not signed in, the useAuthRedirect hook will handle the redirect
  if (!isSignedIn || !userId) {
    return <AuthLoading message="Checking authentication..." />;
  }
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // Tooltip ref for hover state
  const tooltipRef = useRef(null);
  const [tooltipText, setTooltipText] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  // Navigation structure with categories
  const navStructure = [
    {
      category: "Main",
      items: [
        {
          name: "Dashboard",
          href: "/dashboard",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Analysis",
      items: [
        {
          name: "Audio Analysis",
          href: "/dashboard/audio-analysis",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          ),
        },
        {
          name: "Video Analysis",
          href: "/dashboard/video-analysis",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Resources",
      items: [
        {
          name: "My Practices",
          href: "/dashboard/practices",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
          ),
        },
        // This is a hidden item that won't show in the sidebar but helps with active state detection
        {
          name: "Practice Details",
          href: "/dashboard/practice",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
          ),
          hidden: true, // This will be used to hide the item from the sidebar
        },
      ],
    },
  ];



  // Handle tooltip display
  const handleShowTooltip = (e, name) => {
    if (collapsed) {
      const rect = e.currentTarget.getBoundingClientRect();
      setTooltipText(name);
      setTooltipPosition({
        top: rect.top + window.scrollY + rect.height / 2,
        left: rect.right + window.scrollX + 10,
      });
      setTooltipVisible(true);
    }
  };

  const handleHideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <motion.div
      className="flex h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Dashboard Background */}
      <div className="dashboard-bg"></div>

      {/* Tooltip for collapsed sidebar */}
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 px-2 py-1 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm"
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`,
              transform: 'translateY(-50%)'
            }}
          >
            {tooltipText}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div
        className={`${
          collapsed ? "w-20" : "w-64"
        } bg-[#1A1B20]/90 backdrop-blur-md h-screen transition-all duration-300 border-r border-[#2C2D32]/80 relative shadow-lg shadow-purple-500/5`}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-10 bg-[#232429] rounded-full p-1 border border-purple-500/30 shadow-md z-10 hover:shadow-lg hover:shadow-purple-500/20 transition-shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 text-purple-500 transition-transform duration-300 ${
              collapsed ? "rotate-0" : "rotate-180"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>

        <div className="flex flex-col h-full">
          {/* Logo */}
          <div
            className={`flex items-center ${
              collapsed ? "justify-center py-6" : "px-6 py-6"
            }`}
          >
            {collapsed ? (
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.png"
                  alt="OratorPath Logo"
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/logo.png"
                    alt="OratorPath Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-gray-100 logo-text">
                  OratorPath
                </span>
              </Link>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-4 overflow-y-auto">
            {navStructure.map((category) => (
              <div key={category.category} className="space-y-2">
                {!collapsed && (
                  <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider sidebar-link-text">
                    {category.category}
                  </h3>
                )}

                {category.items.map((item) => {
                  // Skip hidden items in the sidebar
                  if (item.hidden) return null;

                  // Check if the current path starts with the item's href
                  // This helps with dynamic routes like /dashboard/practice/[id]
                  const isActive = pathname === item.href ||
                    (item.href !== '/dashboard' && pathname.startsWith(item.href + '/'));

                  return (
                    <motion.div key={item.name} whileHover={{ x: collapsed ? 0 : 3 }}>
                      <Link
                        href={item.href}
                        className={`flex items-center ${
                          collapsed ? "justify-center" : "px-4"
                        } py-3 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-purple-900/30 to-purple-800/20 text-purple-400 shadow-sm"
                            : "text-gray-400 hover:bg-gray-800/30"
                        }`}
                        onMouseEnter={(e) => handleShowTooltip(e, item.name)}
                        onMouseLeave={handleHideTooltip}
                      >
                        <motion.div
                          className={`${isActive ? "text-purple-400" : "text-gray-400"}`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {item.icon}
                        </motion.div>

                        {!collapsed && (
                          <span className="ml-3 font-medium sidebar-link-text">{item.name}</span>
                        )}

                        {!collapsed && isActive && (
                          <div className="ml-auto w-1.5 h-8 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full shadow-sm shadow-purple-500/20" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </nav>



          {/* User Profile */}
          <div className={`px-4 py-4 border-t border-[#2C2D32]/80 ${collapsed ? "flex flex-col justify-center items-center space-y-4" : "flex flex-col space-y-4"}`}>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              {collapsed ? (
                <UserButton
                  appearance={{
                    baseTheme: dark,
                    elements: {
                      userButtonPopoverCard: "bg-gray-900 border border-gray-800",
                      userButtonPopoverText: "text-white",
                      userButtonPopoverActionButtonText: "text-white",
                      userButtonPopoverFooterText: "text-gray-400"
                    }
                  }}
                />
              ) : (
                <>
                  <UserButton
                    appearance={{
                      baseTheme: dark,
                      elements: {
                        userButtonPopoverCard: "bg-gray-900 border border-gray-800",
                        userButtonPopoverText: "text-white",
                        userButtonPopoverActionButtonText: "text-white",
                        userButtonPopoverFooterText: "text-gray-400"
                      }
                    }}
                  />
                  <div className="ml-3 ">
                    <p className="text-sm font-medium text-white sidebar-link-text">User Profile</p>
                    <p className="text-xs text-gray-400 sidebar-link-text">Manage your account</p>
                  </div>
                </>
              )}
            </motion.div>

            {/* Custom Sign Out Button */}
            <div className={collapsed ? "w-full flex justify-center" : "w-full"}>
              <SignOutErrorBoundary>
                <CustomSignOutButton>
                  {collapsed ? "Sign Out" : "Sign Out"}
                </CustomSignOutButton>
              </SignOutErrorBoundary>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto flex flex-col">
        <main className="flex-grow">{children}</main>
      </div>
    </motion.div>
  );
};

export default DashboardLayout;
