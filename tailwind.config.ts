import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "primary-foreground": "var(--primary-foreground)",
        border: "var(--border-color)",
        secondary: "var(--secondary-color)",
        paragraph: "var(--paragraph-color)",
        social: "var(--social-color)",
      },
      borderRadius: {
        default: "var(--border-radius)",
        card: "var(--card-border-radius)",
        button: "var(--button-border-radius)",
      },
      fontFamily: {
        gabarito: ["var(--font-family)"],
      },
    },
  },
  plugins: [],
};

export default config;
