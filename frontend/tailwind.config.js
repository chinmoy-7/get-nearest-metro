/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        train:"url('../public/landing.png')",
        signup:"url('../public/train.png')",
      }
    },
  },
  plugins: [],
}

