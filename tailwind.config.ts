import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "dark"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(209 213 219)',
            lineHeight: '1.75',
            '--tw-prose-headings': 'rgb(251 191 36)',
            '--tw-prose-links': 'rgb(251 191 36)',
            '--tw-prose-bold': 'rgb(255 255 255)',
            '--tw-prose-quotes': 'rgb(251 191 36)',
            '--tw-prose-quote-borders': 'rgb(251 191 36)',
          },
        },
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
