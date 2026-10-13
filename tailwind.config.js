/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FAFAF8',
          100: '#F5F3EF',
          200: '#EBE7E0',
          300: '#DDD8CE',
        },
        charcoal: {
          800: '#2D2D2D',
          900: '#1A1A1A',
          950: '#111111',
        },
        gold: {
          400: '#D4A574',
          500: '#B8860B',
          600: '#96690A',
          700: '#7A5408',
        },
        sage: {
          400: '#6B9B7D',
          500: '#4A7C59',
          600: '#3D6849',
          700: '#2F5138',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
