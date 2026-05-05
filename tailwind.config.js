/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        crypto: {
          earth: "#403A1B",  
          ochre: "#A61F2B",   
          gold: "#F1B902",
          desert: "#DCC39A",
          sand: "#F9F4E8", 

          // new naturals
          moss: "#6F7D4C",
          ember: "#C54932",
          shale: "#5A5E63",
          dusk: "#84736D",
          coal: "#1f1f1f",
        }
      },

      fontFamily: {
        gothic: ["var(--font-quicksand)", "sans-serif"],     // Substitute for All Round Gothic
        futura: ["var(--font-montserrat)", "sans-serif"],   // Substitute for Futura PT
        courier: ["Courier New", "monospace"]               // For technical accents
      }
    }
  },
  plugins: []
};
