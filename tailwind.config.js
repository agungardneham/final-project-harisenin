/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      screens: {
        xxxl: "1920px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".filter": {
          filter: "var(--tw-filter)",
        },
        ".drop-shadow-0-4-4-rgba-0": {
          "--tw-filter": "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
