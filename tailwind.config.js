/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    container: {
      center: true,
      padding: '50px',
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

