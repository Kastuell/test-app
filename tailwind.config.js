/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121313",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",

          md: "768px",

          lg: "1024px",

          xl: "1126px",
        },
      },
    },
  },
  plugins: [],
};
