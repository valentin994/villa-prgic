/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    extend: {
        colors: {
            "primary": "#00171F",
            "secondary": "#003459",
            "piction-blue": "#00A8E8"
        }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
