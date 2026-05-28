import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: '#5A2D66',
          deep: '#3D1D47',
          light: '#7B4A8A',
          glow: 'rgba(90,45,102,0.18)',
        },
        rose: {
          DEFAULT: '#B85C7A',
          light: 'rgba(184,92,122,0.12)',
        },
        gold: {
          DEFAULT: '#D7A14A',
          light: '#E8C47A',
        },
        cream: {
          DEFAULT: '#F8F4EF',
          dark: '#F0E9E0',
        },
        warm: '#FDFBF8',
        mist: {
          DEFAULT: '#EEE7F2',
          dark: '#DDD0E8',
        },
        ink: '#1E1218',
        'soft-text': '#5E4B57',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': 'clamp(2.6rem, 4.8vw, 4.6rem)',
        'display-lg': 'clamp(2rem, 3.8vw, 3.4rem)',
        'display-md': 'clamp(1.6rem, 2.5vw, 2.2rem)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'shimmer': 'shimmer 2.5s ease infinite',
        'wave-flow': 'waveFlow 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.5)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        waveFlow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(155deg, #F8F4EF 0%, #EEE7F2 60%, #F0E9E0 100%)',
        'plum-gradient': 'linear-gradient(135deg, #3D1D47 0%, #2D1238 50%, #3D1D47 100%)',
        'rose-gold': 'linear-gradient(90deg, #B85C7A, #D7A14A)',
        'plum-rose': 'linear-gradient(90deg, #5A2D66, #B85C7A)',
      },
      boxShadow: {
        sm: '0 2px 12px rgba(35,23,31,0.06)',
        md: '0 8px 32px rgba(35,23,31,0.10)',
        lg: '0 20px 60px rgba(35,23,31,0.14)',
        xl: '0 32px 80px rgba(35,23,31,0.18)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
