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
        "soft-white": "#FDF7F2",
        espresso: "#5B3A29",
        latte: "#F2E3D3",
        honey: "#F0B07C",
        macaron: "#F9EEE8",
        rose: "#F4D4D3"
      },
      fontFamily: {
        display: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 45px rgba(0, 0, 0, 0.08)",
        subtle: "0 12px 24px rgba(105, 73, 49, 0.15)",
        floating: "0 30px 60px -30px rgba(91, 58, 41, 0.45)",
        glow: "0 0 0 1px rgba(255, 255, 255, 0.45), 0 18px 40px rgba(195, 142, 112, 0.2)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(249, 238, 232, 0.9), rgba(244, 212, 211, 0.55))",
        "section-radial": "radial-gradient(circle at top left, rgba(243, 208, 188, 0.45), transparent 60%)"
      }
    }
  },
  plugins: [forms, typography]
};

export default config;
