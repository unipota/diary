module.exports = {
  purge: ['*.tsx', './pages/**/*.js', './components/**/*.js'],
  darkMode: 'media',
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
    spacing: {},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
