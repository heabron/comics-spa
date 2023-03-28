/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const fontFamily = defaultTheme.fontFamily
fontFamily['sans'] = ['"Jost"', ...fontFamily.sans]

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: fontFamily,
    extend: {
      colors: {
        marvelRed: '#ED1D24',
        chineseBlack: '#0C1520',
        yankeesBlue: '#1E303A',
        spanishGray: '#8E9599',
        whiteCoffee: '#EBDEDB',
        persianPlum: '#752126',
        watermelonRed: '#B13D4C',
        darkPastelRed: '#CC4224',
        safetyYellow: '#F3D403',
        celticBlue: '#2A75B3',
        thorBlue: '#03ADE9',
        thorYellow: '#FCE611',
      },
      fontFamily: {
        yesevaOne: ['"Yeseva One"', 'cursive'],
      },
      screens: {
        xs: '450px',
        smed: '640px',
        med: '768px',
      },
    },
  },
  plugins: [],
}
