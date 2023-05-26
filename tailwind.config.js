/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.tsx',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        tw_dark: '#cc850a',
        tw_primary: '#003d4f',
        tw_secondary: '#f2617a',
        tw_hover_light: '#f8f8ff',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        bitter: ['Bitter', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
