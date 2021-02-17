module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "deep-purple": "#2c254a",
        "light-purple": "#655c93",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
