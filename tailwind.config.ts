import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./util/**/*.{js,ts,jsx,tsx,mdx}",
    "*",
  ],
  theme: {
    extend: {
      colors: {
        core: {
          blue: "#0D2548",
          lightBlue: "#3577DA",
        },
        light: {
          grey: "#F8F9F9",
        },
        pillar: {
          labs: "#AABE3B",
          training: "#662482",
          frameworks: "#DC6526",
          knowledge: "#B71A5D",
        },
        shades: {
          grey: "#D2D4DA",
        },
      },

      backgroundImage: (theme) => ({
        "gradient-blue":
          "linear-gradient(74deg, #0A1B5F 4.93%, #0B203F 96.56%)",
      }),

      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          xl: "120px",
        },
      },

      fontFamily: {
        sans: ["Gotham", "sans-serif"],
      },

      fontSize: {
        hero: ["64px", "80px"],
        h1: ["42px", "52.5px"],
        h2: ["32px", "40px"],
        h3: ["24px", "33.6px"],
        h4: ["20px", "25px"],
        h5: ["18px", "30px"],
        p1: ["20px", "30px"],
        p2: ["16px", "24px"],
        "eyebrow-large": ["14px", "19.6px"],
      },

      boxShadow: {
        card: "0px 4px 30px 0px rgba(0, 0, 0, 0.17)",
      },
    },
  },
  plugins: [],
};
export default config;
