/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
        brand: ["Slackey", ...defaultTheme.fontFamily.sans],
        heading: ["Fira Sans Extra Condensed", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('/images/hero.jpeg')",
      },
    },
  },
  plugins: [],
};
