/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
    // "./src/**/*.{js,ts,jsx,tsx}",
    // "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        harbourBridge: `url('/pages/images/20230319_syd-harbour-bridge-2.jpg')`,
      },
      colors: {
        success: "#d4edda",
        warning: "#f8d7da",
        info: "#cce5ff",
        disabled: "#e2e3e5",
        primary: {
          contrast: "#d1d5db", // text-slate-100
          50: "#edf8ff",
          100: "#e6f1ff",
          200: "#dce7ff",
          300: "#ccd6f6",
          400: "#a8b2d1",
          500: "#8892b0",
          light: "#606a86", // primary-600
          600: "#606a86",
          700: "#4c5772",
          800: "#2d3952",
          DEFAULT: "#0a192f", // blue slate
          900: "#0a192f", // default
          dark: "#000000", // black
        },
        secondary: {
          contrast: "#fef8e2", // yellow-50
          50: "#fef8e2",
          100: "#fdecb6",
          200: "#fce087",
          light: "#fbd557",
          300: "#fbd557",
          400: "#fbca37",
          500: "#fac125",
          DEFAULT: "#f87316", // orange
          600: "#fab420",
          700: "#f9a21d",
          800: "#f8911a",
          900: "#f87316", // default
          dark: "#a64900",
        },
        tertiary: {
          contrast: "#92400e", // amber-800 
          light: "#fffbeb", // amber-100
          50: "#fffbeb",
          DEFAULT: "#fef3c7", // amber-300
          100: "#fef3c7",
          200: "#fde68a", 
          300:"#fcd34d", // amber-300
          400: "#fbbf24", 
          dark: "#f59e0b", // amber-500
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
          700: "#b45309", // amber-700
          800: "#92400e", // amber-800
        },
        accent: {
          contrast: "#2d3952", // dark blue
          light: "#ffffff", // white
          DEFAULT: "#f1f5f9", // slate-100
          dark: "#718096", 
          700: "#718096", // slate-600
          800: "#4a5568", // slate-700
          900: "#2d3952", // slate-800
        },
        success: {
          contrast: "#004440", 
          light: "#d4edda",
          200: "#d4edda",
          400: "#10b981",
          DEFAULT: "#38a169",
          500: "#38a169",
          600: "#047857",
          dark: "#047857",
          800: "#004440",
        },
        danger: {
          contrast: "#7f1d1d", // red-900
          200: "#fecaca",
          light: "#fca5a5",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          DEFAULT: "#dc2626",
          600: "#dc2626",
          dark: "#b91c1c",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        }
      },
      fontFamily: {
        // bodyText: ["var(--font-bodytext)", ...fontFamily.sans],
        bodyText: "var(--font-bodytext)",
        // fancyText: ["var(--font-fancy)", ...fontFamily.serif],
        fancyText: "var(--font-fancytext)",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
};
