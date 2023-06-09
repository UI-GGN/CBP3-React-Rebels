/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        tw_yellow: '#cc850a',
        tw_blue: '#003d4f',
        tw_pink: '#f2617a',
        tw_saphire_blue: '#47a1ad',
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
