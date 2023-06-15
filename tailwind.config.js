/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      daisyui: {
        themes: {
          mytheme: {
            primary: "#075985",

            secondary: "#164e63",

            accent: "#67cba0",

            neutral: "#181a2a",

            "base-100": "#ffffff",

            info: "#3abff8",

            success: "#36d399",

            warning: "#fbbd23",

            error: "#f87272",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
