/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1960px',
    },
    extend: {
      spacing: {
        18: '4.5rem',
      },
      colors: {
        white: '#FBFBFB',
        black: '#606060',
        primary: '#65D49F',
        secondary: '#62D67E',
        neutral: '#606060',
        accent: '#dddddd',
        'base-100': '#FBFBFB',
        info: '#9FC7F4',
        success: '#128C4D',
        warning: '#996D05',
        error: '#F9535B',
      },
      boxShadow: {
        topNav: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        bottomNav: '0 -10px 15px -3px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
};
