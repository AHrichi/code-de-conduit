/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        sans: ['Tajawal', 'sans-serif'], 
        heading: ['Cairo', 'sans-serif'] 
      },
      colors: { 
        primary: '#0f172a', 
        secondary: '#1e293b', 
        accent: '#0284c7', 
        danger: '#b91c1c', 
        warning: '#d97706', 
        success: '#15803d' 
      }
    },
  },
  plugins: [],
}
