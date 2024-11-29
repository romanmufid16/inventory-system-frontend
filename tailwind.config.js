/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      },
      colors: {
        default: '#172B4D',
        primary: '#5E72E4',
        secondary: '#8392ab',
        info: '#11cdef',
        success: '#2dce89',
        danger: '#f3565c',
        gray: {
          100: '#f6f9fc',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#8898aa',
          700: '#525f7f',
          900: '#212529'
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}