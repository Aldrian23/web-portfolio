/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Main color from SCSS
        dark: "#020817", // Dark color from SCSS
        light: "#fafafa", // Light color from SCSS
        gray: "#565a64", // Gray color from SCSS
        amber: {
          400: "#fbbf24",
          500: "#f59e0b",
        },
        neutral: {
          600: "#525252",
          700: "#404040",
          800: "#262626",
        },
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        body: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
