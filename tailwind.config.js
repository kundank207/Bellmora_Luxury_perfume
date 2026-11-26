/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          ivory: '#F8F5EF',
          cream: '#F3EEE5',
          gold: {
            DEFAULT: '#C6A46A',
            muted: '#D9C29A',
            light: '#F4ECE1',
            dark: '#A68449',
          },
          espresso: {
            DEFAULT: '#3B2D25',
            dark: '#261D18',
            light: '#524036',
          },
          grey: {
            DEFAULT: '#81776D',
            light: '#B2ABA4',
            dark: '#595048',
          },
          white: '#FFFFFF',
          beige: '#EAE1D5',
          sand: '#F2EDE4',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'Inter', 'sans-serif'],
        cinzel: ['Cinzel', 'serif']
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(59, 45, 37, 0.08), 0 4px 6px -2px rgba(59, 45, 37, 0.03)',
        'luxury-hover': '0 20px 40px -15px rgba(59, 45, 37, 0.15), 0 6px 12px -3px rgba(59, 45, 37, 0.05)',
        'gold-glow': '0 0 25px rgba(198, 164, 106, 0.25)',
      }
    },
  },
  plugins: [],
}
