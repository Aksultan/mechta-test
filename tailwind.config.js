/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "6.25": "1.563rem" // 25px
      },
      color: {
        "primary": "#283044",
        "secondary": "#9498A2"
      }
    },
  },
  plugins: [],
}

