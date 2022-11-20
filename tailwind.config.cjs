/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "890px",
      lg: "1000px",
      xl: "1400px",
    },
    extend: {
      content: {
        arrowRight: 'url("/images/icons8-forward-50.png")',
      },
    },
  },
  plugins: [],
};
