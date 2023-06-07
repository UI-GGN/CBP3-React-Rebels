/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        tw_dark: "#cc850a",
        tw_primary: "#003d4f",
        tw_secondary: "#f2617a"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        bitter: ["Bitter", "sans-serif"]
      }
    }
  },
  variants: {},
  plugins: []
};
