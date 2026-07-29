import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#08090B",
        graphite: {
          DEFAULT: "#0D0F12",
          raised: "#14171B",
          line: "#22262C",
        },
        ink: "#F2F4F6",
        mist: {
          DEFAULT: "#9BA3AD",
          dim: "#666E77",
        },
        signal: {
          DEFAULT: "#3FE0F5",
          soft: "#7FEBFA",
          deep: "#1F8FE0",
          ember: "#FF8A4C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
        widest3: "0.4em",
      },
      transitionTimingFunction: {
        precise: "cubic-bezier(0.16, 1, 0.3, 1)",
        snap: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-10px,0)" },
        },
        emberRise: {
          "0%": { transform: "translate3d(0,0,0) scale(0.9)", opacity: "0" },
          "12%": { opacity: "1" },
          "100%": { transform: "translate3d(var(--drift-x, 6px), -140px, 0) scale(1.1)", opacity: "0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" },
        },
        pulseGlowFast: {
          "0%, 100%": { opacity: "0.75", transform: "scale(1.05)" },
          "50%": { opacity: "1", transform: "scale(1.22)" },
        },
        ringBurst: {
          "0%": { transform: "scale(0.55)", opacity: "0.9" },
          "100%": { transform: "scale(2.1)", opacity: "0" },
        },
        eyeFlicker: {
          "0%, 100%": { opacity: "0.9" },
          "45%": { opacity: "1" },
          "55%": { opacity: "0.6" },
        },
      },
      animation: {
        drift: "drift 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        pulseGlowFast: "pulseGlowFast 1.1s ease-in-out infinite",
        ringBurst: "ringBurst 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        eyeFlicker: "eyeFlicker 0.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
