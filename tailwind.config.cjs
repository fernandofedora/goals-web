/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1EA38C',
          dark: '#127a68',
          light: '#2dd4bf'
        },
        accent: '#0ea5e9'
      }
    }
  },
  darkMode: 'class'
}
