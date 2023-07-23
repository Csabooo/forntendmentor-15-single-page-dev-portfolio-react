/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        heading_XL: [
          "88px",
          {
            lineHeight: "88px",
            letterSpacing: "-2.5px",
            fontWeight: "700",
          },
        ],
        heading_L: [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-1.5px",
            fontWeight: "700",
          },
        ],
        heading_M: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        body_L: [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "500",
          },
        ],
      },
    },
    colors: {
      black: "#151515",
      green: "#4EE1A0",
      dark_grey: "#242424",
      grey: "#d9d9d9",
      white: "#FFFFFF",
      red: "hsl(4, 100%, 67%)",
    },
  },

  plugins: [],
};
