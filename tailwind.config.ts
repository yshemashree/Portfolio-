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
        ivory: "#F7F3EA",
        cream: "#F1EADC",
        warmwhite: "#FBF8F2",
        navy: "#131C2E",
        indigo: {
          DEFAULT: "#22335A",
          deep: "#161F38",
        },
        sky: {
          DEFAULT: "#5C7FA6",
          muted: "#8AA3C0",
          pale: "#C9D8E6",
        },
        slate: {
          ink: "#2B2F36",
        },
        cloud: "#FDFCF9",
        graywarm: "#EDE7DA",
        tabby: "#C97A3D",
        tabbydeep: "#A85F2A",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.32em",
        widest3: "0.42em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
        silk: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
