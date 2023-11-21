/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    extend: {
        colors: {
            "primary": "#5d2c09",
            "secondary": "#003459",
            "background-col": "#f9fafb",
            "text-col": "#0e1416"
        }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
