module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ef4444",

          "secondary": "#060405",

          "accent": "#909618",

          "neutral": "#231D2A",

          "base-100": "#ffffff",

          "info": "#8A9FEA",

          "success": "#168855",

          "warning": "#F48C25",

          "error": "#F07D75",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
