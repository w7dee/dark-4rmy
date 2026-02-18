/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: { wide2: "0.22em" },
      boxShadow: { glow: "0 0 40px rgba(255,0,0,0.18)" }
    },
  },
  plugins: [],
}
