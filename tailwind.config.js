/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["*.html"],
  theme: {
    extend: {

      colors: {
        // dark:{
        //   secondary: '#7928ca',
        //   accent: '#79ffe1',
        //   text: '#fff',
        //   'text-secondary': '#888',
        //   background: '#000',
        //   'background-secondary': '#111',
        //   'background-tertiary': '#171717',
        //   border: '#333'
        // }
      },
      fontFamily:{
        sans: ['Inter', 'sans-serif'],
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

