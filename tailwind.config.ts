// tailwind.config.ts
import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#633CFF", // Primary Purple
          hover: "#BEADFF", // Purple (Hover Color)
          light: "#EFE8FF", // Light Purple
        },
        gray: {
          dark: "#333333", // Dark Grey
          DEFAULT: "#737373", // Grey
          light: "#D9D9D9", // Light Grey
          border: "#FAFAFA", // Border color
        },
        white: "#FFFFFF", // White
        red: "#FF3939", // Red
      },
    },
  },
  plugins: [],
};

export default config;
