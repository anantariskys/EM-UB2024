/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary :{
          charcoalGray: "#202020",
        skyBlue: "#D6DAF7",
        tealBlue: "#007B8E",
        paleSalmon: "#ECD7CD",
        navbarText: "#00094D",
        white : "#f6f6f6"
        }
        
       
      },
      fontFamily: {
        'helvetica-extraBold': ['Helvetica ExtraBold', 'serif'],
        'helvetica-regular': ['Helvetica Regular', 'serif'],
        
      },
    },
  },
  plugins: [require("daisyui")],
}

