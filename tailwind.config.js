/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    // "./src/**/*.{js,ts,jsx,tsx}",
    // "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        harbourBridge: `url('/IMG_2996.jpeg')`,
      },
      colors: {
        success: "#d4edda",
        warning: "#f8d7da",
        info: "#cce5ff",
        disabled: "#e2e3e5",
        primary: {
          light: "#7b8bac",
          DEFAULT: "#0a192f", // dark blue
          dark: "#000000", // black
          contrast: "#d1d5db", // text-slate-100
        },
        secondary: {
          light: "#ff7961",
          DEFAULT: "#f87316", // orange
          dark: "#ba000d",
          contrast: "#d1d5db", // text-slate-100
        },
        tertiary: {
          light: "#7b8bac",
          DEFAULT: "#fef3c7", // amber-100
          dark: "#d1d5db", // slate-100
          contrast: "#0a192f", // dark blue
        },
        accent: {
          light: "#7b8bac",
          DEFAULT: "#f1f5f9", // slate-100
          dark: "#d1d5db", // text-slate-100
          contrast: "#0a192f", // dark blue
        },
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
