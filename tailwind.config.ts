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
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
