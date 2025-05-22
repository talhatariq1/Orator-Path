import { getFontVariables } from './lib/fonts';
import "./globals.css";
import "./styles/fonts.css"; // Import the direct font loading CSS
import "./styles/grid-background.css";
import "./styles/speech-playground.css";
import "./styles/pricing-section.css";
import "./styles/navigation-responsive.css";
import "./styles/layout-transitions.css";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import Loader from "./components/Loader";
import NavigationBar from "./components/NavigationBar";
import FooterWrapper from "./components/FooterWrapper";
import dynamic from "next/dynamic";
import { RedirectProvider } from "../lib/context/RedirectContext";

// Use the client component wrapper
const HydrationFix = dynamic(() => import('./components/client/HydrationFix'));
const SVDAttributeRemover = dynamic(() => import('./components/client/SVDAttributeRemover'));
const AttributeDebugger = dynamic(() => import('./components/client/AttributeDebugger'));
const HydrationErrorFix = dynamic(() => import('./components/client/HydrationErrorFix'));
const ScriptMonitor = dynamic(() => import('./components/client/ScriptMonitor'));
const DirectHydrationFix = dynamic(() => import('./components/client/DirectHydrationFix.js'));

// Fonts are now imported from lib/fonts.js

export const metadata = {
  title: 'Orator Path',
  description: 'Improve your public speaking skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={getFontVariables()}>
      <body className="min-h-screen bg-black text-white">
        <HydrationErrorFix />
        <ScriptMonitor />
        <AttributeDebugger />
        <SVDAttributeRemover />
        <DirectHydrationFix>
          <ClerkProvider appearance={{ baseTheme: dark }}>
            <RedirectProvider>
              {/* The dashboard layout will handle its own structure */}
              {/* This layout only applies to non-dashboard routes */}
              <div className="relative min-h-screen flex flex-col">
                <div className="fixed inset-0 -z-10 pattern-bg"></div>
                <NavigationBar />
                <ClerkLoading>
                  <Loader />
                </ClerkLoading>
                <ClerkLoaded>
                  <main className="relative z-10 flex-grow">
                    {children}
                  </main>
                  <div className="z-10">
                    <FooterWrapper />
                  </div>
                </ClerkLoaded>
              </div>
            </RedirectProvider>
          </ClerkProvider>
        </DirectHydrationFix>
      </body>
    </html>
  );
}

