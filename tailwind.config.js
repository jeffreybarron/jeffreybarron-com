/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./(components)/**/*.{js,ts,jsx,tsx}",
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
          light: "#606a86", // primary-600
          DEFAULT: "#0a192f", // blue slate
          dark: "#000000", // black
          contrast: "#d1d5db", // text-slate-100
          900: "#0a192f", // default
          800: "#2d3952",
          700: "#4c5772",
          600: "#606a86",
          500: "#8892b0",
          400: "#a8b2d1",
          300: "#ccd6f6",
          200: "#dce7ff",
          100: "#e6f1ff",
          50: "#edf8ff",
        },
        secondary: {
          light: "#ff7961",
          DEFAULT: "#f87316", // orange
          dark: "#ba000d",
          contrast: "#d1d5db", // text-slate-100
          900: "#f87316", // default
          800: "#f8911a",
          700: "#f9a21d",
          600: "#fab420",
          500: "#fac125",
          400: "#fbca37",
          300: "#fbd557",
          200: "#fce087",
          100: "#fdecb6",
          50: "#fef8e2",
        },
        tertiary: {
          light: "#fef8e2", // secondary-50
          DEFAULT: "#fdecb6", // secondary-100
          dark: "#fcd658", // secondary-300
          contrast: "#0a192f", // dark blue
        },
        accent: {
          light: "#ffffff", // white
          DEFAULT: "#f1f5f9", // slate-100
          dark: "#cbd5e1", // slate-300
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
