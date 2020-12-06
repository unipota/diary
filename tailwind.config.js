module.exports = {
  purge: ['*.tsx', './pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {},
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif'],
    },
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
