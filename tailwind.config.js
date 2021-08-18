module.exports = {
  purge: [
    './**/*.html',
    './**/*.tsx',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#fafafa',
          900: '#262f38'
        },
        yellow: {
          500: '#f8806c',
          600: '#f25f46',
          700: '#f04e32',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
