/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS, TS, JSX, and TSX files in the src folder
    './pages/**/*.{js,ts,jsx,tsx}', // If you have a pages folder
    './components/**/*.{js,ts,jsx,tsx}', // If you have a components folder
  ],
  theme: {
    extend: {
      container: { center: true,
        padding: "15px",
      },
      colors:{
accent:"#f94c25"
      }
      
    },
  },
  plugins: [],
};
