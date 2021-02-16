const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        "22": "5.5rem",
      },
      margin: {
        "22": "5.5rem",
      },
    },
    colors: {
      gray: colors.trueGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      white: colors.white
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
      },
    },
    fontFamily: {
      'sans': ['Source Sans Pro', 'ui-sans-serif', 'system-ui'],
    }
  },
  variants: {
    extend: {
      display: ['hover', 'focus', 'group-hover'],
      width: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
