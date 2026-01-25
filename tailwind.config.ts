import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        magenta: {
          500: '#ec4899',
          600: '#db2777',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        lime: {
          400: '#a3e635',
          500: '#84cc16',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
