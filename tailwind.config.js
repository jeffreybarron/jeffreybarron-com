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
        primaryBg: "#0a192f",
        secondaryBg: "#f87316",
        primary: "#d1d5db", // text-slate-100
        accent: "#f1f5f9",
        callout: "#fef3c7", //text-amber-100
        success: "#d4edda",
        warning: "#f8d7da",
        info: "#cce5ff",
        disabled: "#e2e3e5",

        // primary: {
        //   light: "#7b8bac",
        //   default: "#0a192f", // dark blue
        //   dark: "#d1d5db", // text-slate-100
        //   contrast: "#d1d5db", // text-slate-100
        // },
        // secondary: {
        //   light: "#ff7961",
        //   default: "#f87316", // orange
        //   dark: "#ba000d",
        //   contrast: "#d1d5db", // text-slate-100
        // },
        // tertiary: {
        //   // accent
        //   light: "#7b8bac",
        //   default: "#0a192f", // dark blue
        //   dark: "#d1d5db", // text-slate-100
        //   contrast: "#d1d5db", // text-slate-100
        // },
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
