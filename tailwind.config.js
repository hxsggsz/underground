/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-red': '#780000',
        'light-red': '#A22C29',
        'just-white': '#D6D5C9',
        'just-grey': '#B9BAA3',
        'violet-contrast': '#240046', 
        'just-black': '#0A100D'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
],
}
