/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vert1: '#A0ECB1',       
        vert2: '#32D657',       

        rouge1: '#F7D4D3',      
        rouge2: '#DD524C',      

        fond: '#F8FAFC',        
        gris1: '#E3E8EF',       
        gris2: '#97A3B6',       
        gris3: '#00000033',  

        bleu: '#3662E3',

        orange1: '#F5E8D5',
        orange2: '#F5D565',
        orange3: '#E9A23B',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
