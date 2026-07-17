import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        abyss: "#041E30",      // deep ocean floor
        trench: "#062A42",     // section backgrounds
        ocean: "#0A4D68",      // deep ocean blue
        lagoon: "#20B2AA",     // turquoise
        shallows: "#7FDBD4",   // pale turquoise light
        sand: "#EFE7D8",
        foam: "#F7FBFC",       // near-white
        coral: "#FF6F59",      // accent
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        gauge: ["var(--font-gauge)"], // dive-computer mono
      },
      backgroundImage: {
        "light-rays":
          "linear-gradient(180deg, rgba(127,219,212,0.22) 0%, rgba(32,178,170,0.10) 32%, rgba(6,42,66,0) 70%)",
        descent:
          "linear-gradient(180deg, #0A4D68 0%, #062A42 55%, #041E30 100%)",
      },
      animation: {
        drift: "drift 9s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
