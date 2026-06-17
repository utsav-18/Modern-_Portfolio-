/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050607',
          secondary: '#071013',
          tertiary: '#0b171a',
          card: 'rgba(255,255,255,0.03)',
        },
        accent: {
          primary: '#0ea5e9',
          secondary: '#22d3ee',
          tertiary: '#34d399',
          glow: 'rgba(34,211,238,0.22)',
        },
        surface: {
          DEFAULT: 'rgba(255,255,255,0.05)',
          hover: 'rgba(255,255,255,0.08)',
          border: 'rgba(255,255,255,0.08)',
          borderhover: 'rgba(255,255,255,0.15)',
        },
        text: {
          primary: '#f0f0ff',
          secondary: '#a0a0b8',
          muted: '#6b6b80',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34,211,238,0.16) 0%, transparent 70%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)',
        'mesh-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322d3ee' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'orb': 'orb 8s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        orb: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(10px, -15px) scale(1.05)' },
          '50%': { transform: 'translate(-5px, -20px) scale(0.95)' },
          '75%': { transform: 'translate(-10px, -5px) scale(1.02)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(34, 211, 238, 0.3)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 15px rgba(34, 211, 238, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(34, 211, 238, 0)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(34,211,238,0.12), 0 0 36px rgba(34,211,238,0.04)' },
          '50%': { boxShadow: '0 0 26px rgba(34,211,238,0.2), 0 0 52px rgba(52,211,153,0.08)' },
        },
      },
      boxShadow: {
        'glow': '0 0 34px rgba(34,211,238,0.12)',
        'glow-lg': '0 0 68px rgba(34,211,238,0.16)',
        'glow-xl': '0 0 96px rgba(34,211,238,0.18)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5)',
        'inner-light': 'inset 0 1px 0 rgba(255,255,255,0.08)',
        'glow-cyan': '0 0 28px rgba(14,165,233,0.16)',
        'glow-emerald': '0 0 28px rgba(52,211,153,0.14)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      screens: {
        'xs': '480px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
