module.exports = {
  mode: 'jit',
  content: ['pages/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope'],
        'roboto': ['Roboto'],
      }
    },
  },
  plugins: [],
}
