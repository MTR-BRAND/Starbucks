/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textDecorationThickness: {
        3: '3px',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}