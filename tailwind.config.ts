import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "mainPurple": "#635FC7",
        "mainPurpleHover": "A8A4FF",
        "black": "#000112",
        "veryDarkGrey": "#20212C",
        "darkGrey": "#2B2C37",
        "lines": "#3E3F4E",
        "mediumGrey": "#828FA3",
        "linesLight": "#E4EBFA",
        "lightGrey": "#F4F7FD",
        "red": "#EA5555",
        "redHover": "#FF9898",
      },
      margin: {
        "m-5.5" : "22px"
      }
    },
    
  },
  plugins: [],
};
export default config;
