/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundOpacity: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '100': '1',
      },
    },
    fontFamily: {
      signature: ["Great Vibes"]
    }
  },
  plugins: [],
}
