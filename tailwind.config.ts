import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'orange': 'hsl(26, 100%, 55%)',
      'pale-orange': 'hsl(25, 100%, 94%)',
       'very-dark-blue': 'hsl(220, 13%, 13%)',
       'dark-grayish-blue': 'hsl(219, 9%, 45%)',
      'grayish-blue': 'hsl(220, 14%, 75%)',
       'light-grayish-blue': 'hsl(223, 64%, 98%)',
       'whiter': 'hsl(0, 0%, 100%)',
       'black-75':'hsl(0, 0%, 0%)',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
