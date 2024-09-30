/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        chocolateBrown: '#c6b195',
        textBrown: '#402e1e',
        bgBrown: '#f0e9e2',
        bgGray: '#1e1e1e'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
});

