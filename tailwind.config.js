/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        fraunces: "'Fraunces', serif",
      },
      colors: {
        cream: "#f2ebe3",
        darkcyan: {
          DEFAULT: "#3c8067",
          900: "#183329",
        },
        grayblue: "#6c7289",
      },
    },
  },
  plugins: [],
};
