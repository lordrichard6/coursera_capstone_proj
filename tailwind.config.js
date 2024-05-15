/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#495e57',
        'secondary-color': '#F4CE15',
        'off-white': '#D0DFFF',
        'red': '#FF5A5A',
        'dark-1': '#000000',
        'dark-2': '#09090A',
        'dark-3': '#2F3349',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',

      }
    },
  },
  plugins: [],
}

