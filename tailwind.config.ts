import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx,json}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF5EB",
        blush: "#F8D7DA",
        cocoa: "#8B5E34",
        caramel: "#C38E70",
        dough: "#DAB49D",
        "soft-white": "#FDF7F2"
      },
      fontFamily: {
        display: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 45px rgba(0, 0, 0, 0.08)",
        subtle: "0 12px 24px rgba(105, 73, 49, 0.15)"
      }
    }
  },
  plugins: [forms, typography]
};

export default config;
