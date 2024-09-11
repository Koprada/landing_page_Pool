const colors = require('tailwindcss/colors');
  
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          indigo: colors.indigo,
          amber: colors.amber,
          sky: colors.sky,
          cyan: colors.cyan,
        }
      },
    },
    plugins: [],
  }

