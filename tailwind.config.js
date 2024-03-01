/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        mw453: '453px',
        mw666: '666px',
      },
      margin: {
        ml18: '18%',
        ml5: '5%',
      },
      flexBasis: {
        fb42: '42%',
        fb16: '16%',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      primary: '#7e0f50',
      secondary: '#f9a70d',
      font: '#4d4d4d',
      disable: '#d6d6d6',
      grey: '#797979',
      tBlack: '#0000004d',
      lightBlue: '#46abd6',
      lightGreen: '#46D691',
    },
  },
  plugins: [],
};
