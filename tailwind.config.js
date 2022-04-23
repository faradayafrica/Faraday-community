module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      poppins: "'Poppins', sans-serif",
      roboto: "'Roboto', sans-serif",
    },
    extend: {
      colors: {
        primary: "#05B851",
        textColor: "#3F3F41",
      },
      backgroundImage: {
        homeBanner: "url('./images/home-banner.svg')",
        footerBg: "url('./images/footer-bg.svg')",
      },
    },
  },
  plugins: [],
};
