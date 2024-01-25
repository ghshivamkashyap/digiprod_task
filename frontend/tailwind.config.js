/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "400px",
        md: "500px",
        lg: "700px",
        xl: "900px",
        "2xl": "1050px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
