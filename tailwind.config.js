/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        tw_dark: '#cc850a',
        tw_primary: '#003d4f',
        tw_secondary: '#f2617a',
        tw_yellow: '#cc850a',
        tw_blue: '#003d4f',
        tw_pink: '#f2617a',
        tw_saphire_blue: '#47a1ad',
        tw_hover_light: '#f8f8ff',
        tw_placeholder: '#6c757d',
        tw_disable_input: '#e7e8ea',
        tw_yellow_light: '#d1cbc1',
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
