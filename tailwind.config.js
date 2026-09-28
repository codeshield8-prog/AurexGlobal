/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Aurex brand system — red + charcoal + white
        aurex: {
          red: '#E50914',
          'red-dark': '#B30000',
          charcoal: '#1F1F1F',
          black: '#111111',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F7F7F7',
        },
        line: '#E5E5E5',
        muted: '#555555',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(17,17,17,0.04), 0 8px 24px -12px rgba(17,17,17,0.10)',
        card: '0 12px 40px -20px rgba(17,17,17,0.18)',
        redglow: '0 18px 40px -18px rgba(229,9,20,0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'signal-pulse': {
          '0%': { transform: 'scale(0.6)', opacity: '0.7' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        'dash-flow': {
          to: { strokeDashoffset: '-24' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease forwards',
        'signal-pulse': 'signal-pulse 3s ease-out infinite',
        'dash-flow': 'dash-flow 1.2s linear infinite',
      },
    },
  },
  plugins: [],
};
