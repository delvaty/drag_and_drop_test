/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          "axiom-black": "#121212",
          "axiom-red": "#FF0000",
          "axiom-green": "#00FF00",
          "axiom-blue": "#0000FF",
          "axiom-dark-gray": "#2A2A2A",
          "axiom-light-gray": "#4A4A4A",
        },
        spacing: {
          "26": "6.5rem",
          "122": "30.5rem",
        },
      },
    },
    plugins: [],
  };
  