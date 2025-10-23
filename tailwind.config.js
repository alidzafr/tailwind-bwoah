/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      spacing: {
        'custom-spacing': '10px'
      },
      padding: {
        'custom-padding': '100px'
      },
      margin: {
        'custom-margin': '200px'
      }
    },
  },
  plugins: [],
}

