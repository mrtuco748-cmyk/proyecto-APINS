import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tierra: {
          50: "#fdf6e3",
          100: "#f5e6c8",
          200: "#e8d4a8",
          300: "#d4b878",
          400: "#c49a50",
          500: "#a07830",
          600: "#8b6428",
          700: "#6d4f20",
          800: "#5a401c",
          900: "#2d1f0e",
        },
        rio: {
          50: "#e6f7f7",
          100: "#b3e8e8",
          200: "#80d9d9",
          300: "#4dc4c4",
          400: "#26a8a8",
          500: "#1a8888",
          600: "#156d6d",
          700: "#105353",
          800: "#0b3d3d",
          900: "#062727",
        },
        verde: {
          50: "#f0f7f0",
          100: "#d8ecd8",
          200: "#b0d9b0",
          300: "#88c688",
          400: "#60b360",
          500: "#3a963a",
          600: "#2d782d",
          700: "#215a21",
          800: "#163d16",
          900: "#0b1f0b",
        },
        arena: {
          50: "#faf6f0",
          100: "#f0e6d0",
          200: "#e0ccaa",
          300: "#d0b280",
          400: "#c09960",
          500: "#a87a40",
          600: "#8a6030",
          700: "#6c4b25",
          800: "#4e3818",
          900: "#2d1f0e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
