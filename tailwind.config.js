/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Manrope, system-ui"
      },
      colors: {
        darkGrayishBlue: "hsl(217, 19%, 35%)",
        darkBlue: "hsl(214, 17%, 51%)",
        grayishBlue: "hsl(212, 23%, 69%)",
        lightGrayishBlue: "hsl(210, 46%, 95%)"
      },
      fontSize: {
        base: "13px",
      }
    },
  },
  plugins: [],
}

