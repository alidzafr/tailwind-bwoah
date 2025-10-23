/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        'ijo-royo': '#15803d'
      }
    },
    fontFamily: {
      'roboto': 'Roboto',
      'bitcount': 'Bitcount Grid Single'
    },
    extend: {
      spacing: {
        'custom-spacing': '10px'
      },
      padding: {
        'custom-padding': '100px'
      },
      margin: {
        'custom-margin': '200px'
      },
      width: {
        'custom-width': '50rem'
      }
    },
  },
  plugins: [],
}

