/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        main: "#FFFFFF",
      },

      rotate: {
        60: "50deg",
      },

      backgroundImage: {
        myself: "url('../../public/Fred.jpg')",
      },

      backgroundSize: {
        70: "70%",
        80: "80%",
        90: "90%",
      },
    },
  },
  plugins: [],
}
