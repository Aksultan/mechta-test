/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "6.25": "1.563rem", // 25px
        "7.5": "1.875rem" // 30px
      },
      colors: {
        "primary": "#283044",
        "secondary": "#9498A2",
        "blue": "#65B3E4",
        "light-blue": "#78A1BB"
      },
      fontFamily: {
        'roboto': 'Roboto'
      },
      borderRadius: {
        "12.5": "3.125rem", // 50px
        "7.5": "1.875rem"  // 30px
      },
      backgroundImage: {
          "delivery": "url('/delivery-bg.svg')"
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
          {
              'bg-gradient': (angle) => ({
                  'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
              }),
          },
          {
              values: Object.assign(
                  theme('bgGradientDeg', {}),
                  {
                      10: '10deg', // bg-gradient-10
                      15: '15deg',
                      20: '20deg',
                      25: '25deg',
                      30: '30deg',
                      45: '45deg',
                      60: '60deg',
                      90: '90deg',
                      120: '120deg',
                      280: '280deg',
                  }
              )
          }
       )
    })
  ],
}

