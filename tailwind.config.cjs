/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Ubuntu", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      fontFamily: {
        lavishly: ["Lavishly Yours", "cursive"],
      },
    },
  },
};
