/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#FAFAFC",
          100: "#EFEFF6",
          200: "#DDDDE8",
          300: "#CACADD",
          400: "#B6B6CC",
          500: "#9D9DAD",
          600: "#7D7D8D",
          700: "#6C6C76",
          800: "#515158",
          900: "#30303D",
          950: "#1D1D1E",
        },
      },
      backgroundImage: {
        "main-header":
          "linear-gradient(90deg, #FF75C3 0%, #FFA647 20%, #FFE83F 40%, #9FFF5B 60%, #70E2FF 80%, #CD93FF 100%);",
        "project-card":
          "radial-gradient(420px circle at 50% 50%,rgba(255,255,255,0.05),transparent);",
      },
      // typography: ({ theme }) => ({

      // })
    },
  },
  plugins: [
    require("tailwind-gradient-mask-image"),
    require("@tailwindcss/typography"),
  ],
  darkMode: "class",
};
