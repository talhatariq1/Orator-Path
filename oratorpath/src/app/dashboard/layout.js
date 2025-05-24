"use client";

import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import Loader from "../components/Loader";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRedirect } from "../../lib/context/RedirectContext";

// Import dashboard-specific styles
import "../styles/dashboard-background.css";
import "../styles/dashboard/dashboard-typography.css";
import "../styles/layout-transitions.css";

// Use dynamic imports for client components
const HydrationErrorFix = dynamic(() => import('../components/client/HydrationErrorFix'));
const SVDAttributeRemover = dynamic(() => import('../components/client/SVDAttributeRemover'));
const AttributeDebugger = dynamic(() => import('../components/client/AttributeDebugger'));
const ScriptMonitor = dynamic(() => import('../components/client/ScriptMonitor'));
const DirectHydrationFix = dynamic(() => import('../components/client/DirectHydrationFix'));

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const { setIsRedirecting } = useRedirect(); // Get the setIsRedirecting function from context

  // Add a loading state to prevent flashing
  useEffect(() => {
    // Set loading to false after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    // Add dashboard-active class to body
    document.body.classList.add('dashboard-active');

    // Remove pattern-bg class from the root background element
    const patternBg = document.querySelector('.pattern-bg');
    if (patternBg) {
      patternBg.style.display = 'none';
    }

    // Reset the redirecting state when dashboard is loaded
    // This ensures navigation will be visible on subsequent navigations
    setIsRedirecting(false);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('dashboard-active');

      // Restore pattern-bg when leaving dashboard
      if (patternBg) {
        patternBg.style.display = 'block';
      }
    };
  }, [pathname, setIsRedirecting]);

  return (
    <div className="dashboard-root">
      <HydrationErrorFix />
      <ScriptMonitor />
      <AttributeDebugger />
      <SVDAttributeRemover />
      <DirectHydrationFix>
        <ClerkProvider appearance={{ baseTheme: dark }}>
          <div className="relative min-h-screen flex flex-col">
            {/* Dashboard-specific background */}
            <div className="dashboard-bg"></div>

            <ClerkLoading>
              <Loader />
            </ClerkLoading>

            <ClerkLoaded>
              {/* Apply fade-in transition to prevent flashing */}
              <div
                className={`transition-opacity duration-300 layout-transition ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                style={{
                  transitionDelay: isLoading ? '0ms' : '50ms',
                  willChange: 'opacity, transform'
                }}
              >
                <main className="relative z-10 flex-grow">
                  {children}
                </main>
              </div>
            </ClerkLoaded>
          </div>
        </ClerkProvider>
      </DirectHydrationFix>
    </div>
  );
}
