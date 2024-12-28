/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scans all your components
  theme: {
    extend: {
      colors: {
        navy: "#1E293B", // Custom navy color
        black: "#0F172A", // Dark black color
      },
    },
  },
  plugins: [],
};