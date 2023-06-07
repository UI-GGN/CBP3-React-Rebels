/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'tw-blue': '#003d4f',
        'tw-pink': '#f2617a',
      },
    },
  },
  variants: {},
  plugins: [],
};
