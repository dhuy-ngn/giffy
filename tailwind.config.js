/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron'],
        logo: '"Press Start 2P"'
      },
      colors: {
        secondary: '#d40078',
        primary: '#2de2e6',
        accent: '#035ee8'
      },
      backgroundColor: '#F0DAAF'
    }
  },
  plugins: []
};
