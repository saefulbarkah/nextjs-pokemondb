/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "th-dark": "#1A1921",
        "th-white": "#DEDEDE",
        "th-cream": "#FFDB84",
        "th-blue": "#439EAC",
        "th-red": "#D82B33",
        "th-blue-dark": "#2C2939",
        "th-sky-dark": "#252a38",
        "th-darken": "#1B1A22",
        "th-sky": "#377DCB",
        "th-blue-hover": "#39485F",
      },
    },
  },
  plugins: [],
};
