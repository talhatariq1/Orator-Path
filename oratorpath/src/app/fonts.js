import { Inter, Roboto_Mono } from 'next/font/google';

// Define the Inter font with specific subsets and display settings
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Define the Roboto Mono font for monospaced text
export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});
