/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { 
        sans: ['Tajawal', 'sans-serif'], 
        heading: ['Cairo', 'sans-serif'] 
      },
      colors: { 
        primary: 'var(--color-primary)', 
        secondary: 'var(--color-secondary)', 
        accent: 'var(--color-accent)', 
        danger: 'var(--color-danger)', 
        'danger-light': 'var(--color-danger-light)',
        warning: 'var(--color-warning)', 
        'warning-light': 'var(--color-warning-light)',
        success: 'var(--color-success)',
        'success-light': 'var(--color-success-light)',
        info: 'var(--color-info)',
        'info-light': 'var(--color-info-light)',
        card: 'var(--bg-card)',
        heading: 'var(--text-heading)',
        muted: 'var(--text-muted)',
        'border-color': 'var(--border-color)'
      }
    },
  },
  plugins: [],
}
