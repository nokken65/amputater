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
      gray: {
        50: '#e8e8e8',
        200: '#a6a6a6',
        DEFAULT: '#707070',
        400: '#3e3e3e',
        600: '#272727',
      },
      red: '#ff7878',
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
      hlg: { raw: '(min-height: 640px)' },
    },
    dropShadow: {
      DEFAULT: '2px 3px 6px rgba(0, 0, 0, 0.25)',
    },
    extend: {
      maxWidth: {
        screen: '100vw',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
