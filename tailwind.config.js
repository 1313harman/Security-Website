/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", 'sans-serif'],  
        Square: ['Square721', 'sans-serif'],
      },
      colors: {
        customRed: 'rgb(255, 0, 0)',
        customBlack: 'rgb(0, 0, 0)',
        customWB: 'rgb(255, 255, 255)',
        customGray: 'rgb(196, 196, 196)',
        customBg: 'rgb(28, 27, 27)',
        customWhite: 'rgb(217, 217, 217)'
      },
    },
  },
  plugins: [],
}
