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
        background: "var(--background)",
        foreground: "var(--foreground)",

        mitti: {
          bodyColor: "#f6f4ed",
          paragraphColor: "#555",
          secondaryTextColor: "#645832",
          borderColor: "#d3cfc1",
          transparent: "#fff0",
          darkBodyColor: "#ebe6d7",
          //   {
          //     --
          //     --black: #333;
          //     --
          //     --;
          //     --;
          //     --whitesmoke: whitesmoke;
          //     --;
          //     --;
          // }
        },
      },
    },
  },
  plugins: [],
};
export default config;
