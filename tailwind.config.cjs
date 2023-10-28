/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Anek Latin", defaultTheme.fontFamily.sans],
      },
      colors: {
        nwg: {
          sky: "#3083FF",
          deepsea: "#083B87",
        },
      },
      dropShadow: {
        nwgskyGlow: "0 2px 12px rgba(48, 131, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
