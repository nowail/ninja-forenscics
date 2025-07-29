/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nf-green': '#10B981',
        'nf-blue': '#3B82F6',
        'nf-dark-blue': '#1E40AF',
        'nf-gray': '#6B7280',
        'nf-light-gray': '#F3F4F6',
      }
    },
  },
  plugins: [],
} 