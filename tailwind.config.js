/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#f27f0d",
        "primary-dark": "#d96f18",
        "text-main": "#1b140d",
        "text-secondary": "#666666",
        "background-light": "#fcfaf8",
        "background-dark": "#221910",
        "surface-light": "#ffffff",
        "surface-dark": "#2d241b",
        "border-light": "#e7dbcf",
        "border-dark": "#4a3b2e",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "body": ["Manrope", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px" },
    },
  },
  plugins: [],
}
