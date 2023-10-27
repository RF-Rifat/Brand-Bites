/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#21afa1",

          secondary: "#f5fc1e",

          accent: "#69efb5",

          neutral: "#221e25",

          "base-100": "#e8e4ec",

          info: "#a3c5e1",

          success: "#74e79e",

          warning: "#f2ca6e",

          error: "#e88d7d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
