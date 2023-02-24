/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#0b090c",
      },
      animation: {
        fadeInTop: "fadeInTop 0.4s ease-in-out",
        fadeInLeft: "fadeInLeft 0.4s ease-in-out",
      },
      keyframes: () => ({
        fadeInTop: {
          "0%": {
            transform: "translateY(-1vh)",
            opacity: "0",
          },
          "100%": {
            bottom: "0",
            opacity: "1",
          },
        },
        fadeInLeft: {
          "0%": {
            transform: "translateX(-1vh)",
            opacity: "0",
          },
          "100%": {
            bottom: "0",
            opacity: "1",
          },
        },
      }),
    },
  },
  plugins: [],
};
