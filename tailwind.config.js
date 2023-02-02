/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'our-black': '#232222'
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'blake':["Blake"]
      }
    },
  },
  plugins: [],
}