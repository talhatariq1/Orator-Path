import { Inter, Space_Grotesk, Noto_Serif } from "next/font/google";
import localFont from 'next/font/local';

// Use a system font fallback for Cinzel Decorative to avoid the Turbopack issue
// Instead of importing from Google Fonts
export const cinzelDecorative = {
  variable: "--font-cinzel-decorative",
  // This is an empty class that will be used as a placeholder
  // The actual font will be loaded via CSS
  className: ""
};

export const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

// Comment out Geist fonts to avoid the Turbopack issue
// We'll use system fonts as fallback
/*
export const geistSans = localFont({
  src: '../fonts/Geist-Regular.woff2',
  variable: "--font-geist-sans",
  display: "swap",
});

export const geistMono = localFont({
  src: '../fonts/GeistMono-Regular.woff2',
  variable: "--font-geist-mono",
  display: "swap",
});
*/

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Local Fonts
export const nathan = localFont({
  src: '../fonts/Nathan.otf',
  variable: '--font-nathan',
  display: 'swap',
});



// Helper to combine all font variables into a single className string
export function getFontVariables() {
  // Exclude geistSans and geistMono to avoid the Turbopack issue
  return `${inter.variable} ${spaceGrotesk.variable} ${nathan.variable} ${cinzelDecorative.variable} ${notoSerif.variable}`;
}
