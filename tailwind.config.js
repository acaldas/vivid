module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      vivid: ["Vivid", "sans-serif"],
      exo: ["Exo2", "sans-serif"],
    },
    extend: {
      colors: {
        overlay: "rgba(0,0,0,0.15)",
      },
      screens: {
        lg: "860px",
      },
      aspectRatio: {
        "3/2": "3 / 2",
      },
    },
  },
  plugins: [],
};
