module.exports = {
  mode:"jit",
  purge: ["./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',

      initial: '0 1 auto',

      inherit: 'inherit',
      none: 'none',

      '2': '0 0 32%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
