module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        moderateBlue: "hsl(238, 40%, 52%)",
        softRed: "hsl(358, 79%, 66%)",
        lightGrayish: "hsl(239, 57%, 85%)",
        paleRed: "hsl(357, 100%, 86%)",
        darkBlue: "hsl(212, 24%, 26%)",
        grayishBlue: "hsl(211, 10%, 45%)",
        veryLightGray: "hsl(228, 33%, 97%)",
        lightGray: "hsl(223, 19%, 93%)",
      },
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
      gridRow: {
        form: "1fr 0.5fr",
      },
    },
  },
  plugins: [],
};
