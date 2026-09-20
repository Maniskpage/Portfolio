/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#00E5FF',
          hover: '#33EBFF',
          dark: '#00B4D8',
          glow: 'rgba(0, 229, 255, 0.4)',
          violet: '#8B5CF6',
        },
        surface: {
          light: '#F8F9FA',
          lightElevated: '#FFFFFF',
          dark: '#08090A',
          darkElevated: '#0F1117',
          darkCard: '#13161F',
          darkBorder: '#1E222D',
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(0, 229, 255, 0.35)',
        'cyan-glow-sm': '0 0 15px -3px rgba(0, 229, 255, 0.25)',
        'violet-glow': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
