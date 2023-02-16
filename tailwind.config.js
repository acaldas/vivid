const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        neco: "url('/images/neco_dinocore.png'), linear-gradient(180deg, #0d0606 0%, #270202 100%)",
      },
      fontFamily: {
        sans: ["var(--font-vivid)", "sans"],
        exo: ["var(--font-exo)", "sans-serif"],
      },
      colors: {
        overlay: "rgba(0,0,0,0.5)",
        red: "#FF0000",
      },
      screens: {
        lg: "860px",
      },
      aspectRatio: {
        "3/2": "3 / 2",
      },
      fontSize: {
        lg: ["1.5rem", { lineHeight: "1.75rem", fontWeight: "500" }],
        xl: ["2rem", { lineHeight: "2.375rem", fontWeight: "800" }],
        h1: ["150px", { lineHeight: "8rem", fontWeight: "800" }],
        h2: ["124px", { lineHeight: "9.5rem", fontWeight: "600" }],
        h3: ["60px", { lineHeight: "4.5rem", fontWeight: "800" }],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss"), require("tailwind-scrollbar")],
};
