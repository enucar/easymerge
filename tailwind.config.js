/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1565C0',
          50: '#99C3F4',
          100: '#86B9F2',
          200: '#62A3EE',
          300: '#3D8EEA',
          400: '#1978E5',
          500: '#1565C0',
          600: '#0F4A8D',
          700: '#0A305B',
          800: '#041528',
          900: '#000000',
          950: '#000000',
        },
        secondary: '#42A5F5',
        accent: {
          DEFAULT: '#FFCA28',
          50: '#FFF7E0',
          100: '#FFF2CB',
          200: '#FFE8A2',
          300: '#FFDE7A',
          400: '#FFD451',
          500: '#FFCA28',
          600: '#EFB400',
          700: '#B78A00',
          800: '#7F5F00',
          900: '#473500',
          950: '#2B2000',
        },
        text: '#212121',
      },
    },
  },
  plugins: [],
};
