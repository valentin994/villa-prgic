/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
        fontFamily:{
            "sans": ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif']
        },
    extend: {
        colors: {
            "primary": "#1010f4",
            "secondary": "#003459",
            "background-col": "#f9fafb",
            "text-col": "#0e1416",
            "accent": "#f97f06"
        }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
