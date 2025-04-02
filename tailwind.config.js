/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gray: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          400: '#9CA3AF',
          300: '#D1D5DB',
        },
        blue: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        primary: '#3B82F6',
        secondary: '#10B981',
      },
    },
  },
  plugins: [],
} 