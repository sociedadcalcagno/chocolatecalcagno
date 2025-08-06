/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        chocolate: {
          dark: '#2C1810',
          light: '#3D241B',
        },
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#B89530',
        },
      },
    },
  },
  plugins: [],
};