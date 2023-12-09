/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        krona: ["Krona One", "sans-serif"],
        bun: ["Bungee Shade", "cursive"],
      },
    },
    backdropFilter: {
      none: "none",
      blur: "blur(100px)",
    },
  },
  plugins: [require("tailwindcss-filters")],
};