/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      "roboto": ['roboto', 'sans-serif']
    },
    extend: {
      colors: {
        "ignite-white": "#FFFFFF",
        "ignite-gray-100": "#E1E1E6",
        "ignite-gray-200": "#C4C4CC",
        "ignite-gray-300": "#8D8D99",
        "ignite-gray-400": "#7C7C8A",
        "ignite-gray-500": "#323238",
        "ignite-gray-600": "#29292E",
        "ignite-gray-700": "#202024",
        "ignite-gray-800": "#121214",

        "ignite-green-100": "#00B37E",
        "ignite-green-300": "#00875F",

        "ignite-red-500": "#F75A68",
      }
    },
  },
  plugins: [],
}
