module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'current',
        'rbRed': '#da3832',
        'rbBlue': '#419dd4',
        'rbWhite': '#f7f7f7',
        'rbYellow': '#ffe15e',
      },
    },
    fontFamily: {
      sans: ["Fira Sans", 'sans-serif'],
    },
  },
  plugins: [],
}