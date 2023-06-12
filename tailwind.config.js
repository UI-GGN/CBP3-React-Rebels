/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        tw_dark: '#cc850a',
        tw_primary: '#003d4f',
        tw_secondary: '#f2617a',
        cyan: '#083344',
        'light-grey': '#F7FAFC',
        white: '#FFFFFF',
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
