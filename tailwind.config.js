/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        'input-left': '5px 0px 0px 5px',
        'button-right': '0px 5px 5px 0px',
      }
    },
  },
  plugins: [],
}

