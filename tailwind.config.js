module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#531A85',
          light: '#6E3FB5',
          dark: '#31104E',
        },
        accent: {
          DEFAULT: '#00A9E0',
          light: '#5FDBFF',
        },
      },
    },
  },
  plugins: [],
};