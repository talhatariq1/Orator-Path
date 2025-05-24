import { getFontVariables } from './lib/fonts';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/fonts.css"; // Import the direct font loading CSS
import "./styles/grid-background.css";
import "./styles/speech-playground.css";
import "./styles/pricing-section.css";
import "./styles/navigation-responsive.css";
import "./styles/layout-transitions.css";
import "./styles/custom.css";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import Loader from "./components/Loader";
import NavigationBar from "./components/NavigationBar";
import FooterWrapper from "./components/FooterWrapper";
import { RedirectProvider } from "../lib/context/RedirectContext";

// Fonts are now imported from lib/fonts.js

export const metadata = {
  title: 'Orator Path',
  description: 'Improve your public speaking skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={getFontVariables()}>
      <body className="min-h-screen bg-black text-white">
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
      </body>
    </html>
  );
}

