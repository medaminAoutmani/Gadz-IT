/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%': { opacity: '100%' },
          '50%': { opacity: '0%' },
        }
      }
    },
    screens: {
      'xs': '500px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}



