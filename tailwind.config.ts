import type { Config } from "tailwindcss";

// Reads each color from a CSS custom property so values can swap per theme
// (see the `:root` / `[data-theme="light"]` blocks in globals.css) while
// every `bg-abyss`, `text-foam/70`, etc. utility keeps working unchanged.
function withOpacity(variable: string) {
  return ({ opacityValue }: { opacityValue?: string }) =>
    opacityValue === undefined
      ? `rgb(var(${variable}))`
      : `rgb(var(${variable}) / ${opacityValue})`;
}

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Tailwind supports color callbacks at runtime (for the `<alpha-value>`
        // trick) but its shipped types don't declare that form — cast needed.
        abyss: withOpacity("--color-abyss") as unknown as string,         // page background
        trench: withOpacity("--color-trench") as unknown as string,      // section backgrounds
        ocean: withOpacity("--color-ocean") as unknown as string,        // mid-depth blue
        lagoon: withOpacity("--color-lagoon") as unknown as string,      // turquoise accent
        shallows: withOpacity("--color-shallows") as unknown as string,  // secondary/hover text
        sand: withOpacity("--color-sand") as unknown as string,
        foam: withOpacity("--color-foam") as unknown as string,          // primary text
        coral: "#FF6F59",                                                // accent, same in both themes
        ink: "#041E30",                                                  // always-dark text for bright-surface buttons
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
          "linear-gradient(180deg, rgb(var(--color-ocean)) 0%, rgb(var(--color-trench)) 55%, rgb(var(--color-abyss)) 100%)",
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
