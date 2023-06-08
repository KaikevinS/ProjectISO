/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xxs: "0.6rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        custom: "rgba(228, 228, 228, 0.5)",
        custom2: "rgba(113,113,113, 1)",
        redColor: "rgba(209, 2, 52, 1)",
      },
      width: {
        128: "32rem",
        custom: "30rem",
        custom2: "37rem",
        custom3: "48rem",
      },
      height: {
        custom: "28rem",
        custom2: "37rem",
      },
      colors: {
        custom: "rgba(113,113,113, 1)",
        custom2: "rgba(82, 82, 82, 1)",
        redColor: "rgba(209, 2, 52, 1)",
        red: {
          main: "#D10234",
        },
        gray: {
          main: "#F8F8F8",
          disabledText: "#717171",
          divider: "#f4f4f4",
        },
        "black-main": "#212121",
        "dark-blue-1": "#1a468d",
        "dark-blue-2": "#2c5596",
        "dark-1": "#05050b",
        "soft-dark": "#1f2128",
        "blue-1": "#e7eef8",
        "neutral-1": "#c4cad3",
        "border-red": "rgba(255, 255, 255, 0.15)",
        "hover-sidebar": "rgba(255, 255, 255, 0.4)",
        "text-gray-custom": "#717171",

      },
      inset: {
        26: "100px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  darkMode: "class",
};
