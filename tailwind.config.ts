import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#0a0e27",
          darker: "#050815",
        },
        accent: {
          cyan: "#00f0ff",
          "cyan-dark": "#00c5d4",
        },
      },
      animation: {
        "typing": "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#00f0ff" },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 15px #00f0ff",
          },
          "100%": {
            boxShadow: "0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

