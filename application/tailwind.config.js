/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:['class','[data-theme="night"]'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
      'minus-h': 'calc(100vh - 100px)',
    },
    
  colors:{
    'badge-secondary':'#CCC'
  },
  daisyui: {
    themes: ['dark'],
    base:true,
    darkTheme: "dark", 
  },
  },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}

