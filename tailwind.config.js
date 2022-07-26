module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      primary: '#46AF7F',
      text: '#707070',
    },
    screens: {
      '6xl': { max: '1920px' },
      '5xl': { max: '1600px' },
      '4xl': { max: '1366px' },
      '3xl': { max: '1280px' },
      '2xl': { max: '1024px' },
      xl: { max: '768px' },
      lg: { max: '640px' },
      md: { max: '480px' },
      xs: { max: '320px' },
    },
    extend: {
      maxWidth: {
        screen: '100vw',
      },
    },
  },
  plugins: [],
};
