module.exports = {
  purge: ['./src/**/*.{tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: '#112340',
      secondary: '#FFFFFF',
      danger: '#721B23',
      success: '#1a9c51',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
