/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sx: "330px",
      sm: "350px",
      md: "767px",
      lg: "993px",
      xl: "1250px",
      "2xl": "1550px"

      
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary': 'rgba(255, 255, 255)',
        'gray-dark': 'rgba(41, 45, 46)',
        'gray-light': 'rgba(58, 65, 66)',
        'gray-light-2': '#464f50',
        'secondary': 'rgba(179, 190, 193)',
        'green-dark': 'rgb(36, 238, 137)',
        'green-trans': 'rgba(49, 238, 136, 0.1)',
        'red-trans': 'rgba(252, 60, 60, 0.15)',
        'yellow-dark': 'rgb(159, 232, 113)',
        'gray-trans': '#1e1e1e57',
        'gray-trans-2': 'rgba(0, 0, 0, 0.1)',
        'white-trans': '#95929257',
        'black-trans': 'rgba(23, 26, 26)',
        'black-light': 'rgba(0, 0, 0, 0.6)',
        'hh': 'linear-gradient(90deg, #23ee8833, #23ee8800), rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(50.75% 170.25% at 87.06% 148.55%, rgba(252, 60, 60, 0.15) 0%, rgba(252, 60, 60, 0) 100%)',
        "custom-hover-dark": 'linear-gradient(90deg, #23ee8833, #e2f3eb0d)'
      },
      fontSize: {
        'xs': '.65rem',
      },
    },
  },
  plugins: [],
}