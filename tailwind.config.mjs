/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-serif)', 'Noto Serif', 'serif'],
        heading: ['var(--font-cinzel-decorative)', 'Cinzel Decorative', 'serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        nathan: ['var(--font-nathan)', 'Nathan', 'cursive'],
        courier: ['var(--font-courier-new)', 'Courier New', 'monospace'],
        cinzelDecorative: ['var(--font-cinzel-decorative)', 'Cinzel Decorative', 'serif'],
        notoSerif: ['var(--font-noto-serif)', 'Noto Serif', 'serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        spaceGrotesk: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "0% 50%" },
          "25%": { backgroundPosition: "50% 25%" },
          "50%": { backgroundPosition: "100% 50%" },
          "75%": { backgroundPosition: "50% 75%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        borderGlow: {
          "0%": { borderImage: "linear-gradient(90deg, #4C6DFF, #8A3AEA, #0EA5E9) 1" },
          "50%": { borderImage: "linear-gradient(90deg, #0EA5E9, #4C6DFF, #8A3AEA) 1" },
          "100%": { borderImage: "linear-gradient(90deg, #4C6DFF, #8A3AEA, #0EA5E9) 1" },
        },
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 5px rgba(76, 109, 255, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(138, 58, 234, 0.8)" },
          "100%": { boxShadow: "0 0 5px rgba(76, 109, 255, 0.5)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        shine: "shine 8s linear infinite", // Longer animation duration for smoother effect
        borderGlow: "borderGlow 6s linear infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "border-flow": "borderFlow 4s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      boxShadow: {
        glow: "0 0 15px rgba(76, 109, 255, 0.7)",
      },
      textShadow: {
        sm: "0 0 2px rgba(255,255,255,0.5)",
        DEFAULT: "0 0 4px rgba(255,255,255,0.5)",
        lg: "0 0 8px rgba(255,255,255,0.5)",
      },
    },
  },
  plugins: [
    // Add text shadow plugin
    function({ addUtilities, theme }) {
      const textShadows = theme('textShadow');
      const utilities = {};

      Object.entries(textShadows).forEach(([key, value]) => {
        const className = key === 'DEFAULT' ? '.text-shadow' : `.text-shadow-${key}`;
        utilities[className] = {
          textShadow: value,
        };
      });

      addUtilities(utilities);
    },
  ],
};