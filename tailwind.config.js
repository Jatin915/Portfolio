/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Inter', 'sans-serif'],
      },


      keyframes: {
        bgFillUp: {
          '0%': { backgroundSize: '100% 0%' },
          '100%': { backgroundSize: '100% 100%' }
        },
        bgFillDown: {
          '0%': { backgroundSize: '100% 100%' },
          '100%': { backgroundSize: '100% 0%' }
        }
      },

      animation: {
        bgFillUp: 'bgFillUp 0.4s forwards',
        bgFillDown: 'bgFillDown 0.4s forwards'
      },
    },
  },
  plugins: [],
}

