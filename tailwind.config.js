/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgb(255,255,255,0.18)",
        "cool-teal": "#016170",
        "cool-teal2": "#009393",
        "light-teal": "#00E0C6",
        "green_deep": "#0E9E2C",
        "green_one" : "#1BC23E",
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      
      screens: {
        'xsm': { 'min': '340px', 'max': '640px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}

