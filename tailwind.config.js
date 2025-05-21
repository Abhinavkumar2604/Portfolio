/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fdf6e9', // Warm light background
        secondary: '#8b5a2b', // Warm brown
        tertiary: '#ffffff', // White
        textPrimary: '#2d1810', // Dark brown
        textSecondary: '#6b4423', // Medium brown
        accent: {
          light: '#f5e6d3', // Light warm brown
          DEFAULT: '#a67c52', // Medium warm brown
          dark: '#5c4033', // Dark warm brown
        },
        success: '#4a7c59', // Forest green
        warning: '#d4a017', // Amber
        error: '#c17a74', // Muted red
        info: '#8b5a2b', // Brown
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(139, 90, 43, 0.3)', // Brown glow
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 