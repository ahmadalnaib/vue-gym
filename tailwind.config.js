/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "at-light-green":'#44ba9f',
        "at-green":'#2d6a4f',
        "light-grey":'#f5f5f5',
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    flex:{
      "1":'1 1 0%',
      "2":'2 2 0%',
    },
    container:{
      center:true,
      screens:{
      lg:"1024px",
      xl:"1280px",
      "2xl":"1536px"
      }
    }
  },
  plugins: [],
}

