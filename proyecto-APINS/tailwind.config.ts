import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        tierra: {
          800: "#5a401c",
          900: "#2d1f0e",
        },
        rio: {
          900: "#062727",
        },
        verde: {
          500: "#3a963a",
          600: "#2d782d",
          400: "#60b360",
          900: "#0b1f0b",
        },
        arena: {
          600: "#8a6030",
        },
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        display: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
