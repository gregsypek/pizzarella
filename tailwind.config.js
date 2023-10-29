/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Martel Sans",
    },
    extend: {
      colors: {
        primary100: "#FFC107",
        primary200: "#dda400",
        accent100: "#fff3b0",
        accent200: "#FF5722",
        text100: "#5c5c5c",
        text200: "#333333",
        bg100: "#FDFDFD",
        bg200: "#f3f3f3",
        bg300: "#cacaca",
      },
      fontSize: {
        example: ["30rem", { lineHeight: "1" }],
      },
      height: {
        screen: "100dvh",
      },
      screens: {
        myCustom: "1192px",
      },
    },
  },
  plugins: [],
};
