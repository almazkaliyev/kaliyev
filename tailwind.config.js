module.exports = {
  purge: [
    './**/*.html',
    './**/*.tsx',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      textColor: {
        typo: 'var(--color-typo)',
        hint: 'var(--color-hint)',
        secondary: {
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
        },
      },
      backgroundColor: {
        primary: 'var(--color-background)',
      },
      borderColor: {
        primary: 'var(--color-typo)',
        secondary: 'var(--color-secondary-600)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
