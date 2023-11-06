/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        b1: "#121212",
        b2: "#34C94B",
        b3: "#FFFFFF",
      }
    },
  },
  plugins: [],
}