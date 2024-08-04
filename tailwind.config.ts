import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#FFFFFF",
      main: "#7A40F2",
      primary: "#E3D7FE",
      secondary: "#8979AA",
      secondary2: '#8979AA',
      optional: "#FFF",
      222: "#222",
      h: "#282034",
      txt: "#45404C",
      destructive: "#FF3B30",
      stroke: "#DBD3EB",
    },
    backgroundColor: {
      secondary: "#7A40F2",
      primary: "#E3D7FE",
      white: "#FFFFFF",
      tertiary: "#FFF7DC",
      background: "#F7F5FF",
      main: "#7A40F2",
      mainAdditional: "#F9C614",
      stroke: "#DBD3EB",
      optional: "#FFF",
      h: "#282034",
    },
    screens: {
      "md-1400": "1400px",
      tablet: "1200px",
      mobile: "768px",
      smallMobile:"576",
      smallTablet:"992px"
    },
  },
  plugins: [nextui()],
};
export default config;
