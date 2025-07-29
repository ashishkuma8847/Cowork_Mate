/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#F0F0F0",
        darkGray: "#555555",
        golden: "#EAA423",
        violet: "#765AFF",
        indigo: "#6A39F2",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #480CED 0%, #6A39F2 100%)',
      },
       fontFamily: {
        inter: ["'Inter', 'sans-serif'"],
      },
      screens: {
        'xs': '900px',    
        '3xl': '1600px',  
      },
    },
  },
  plugins: [],
}
