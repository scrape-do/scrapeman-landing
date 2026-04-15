/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0f',
          surface: '#111118',
          elevated: '#16161f',
        },
        border: {
          DEFAULT: '#1e1e2e',
          strong: '#2d2d3d',
        },
        accent: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
          violet: '#a78bfa',
        },
        ink: {
          1: '#f8f8ff',
          2: '#a1a1aa',
          3: '#71717a',
        },
        positive: {
          DEFAULT: '#22c55e',
          bg: '#22c55e15',
        },
        negative: {
          DEFAULT: '#ef4444',
          bg: '#ef444415',
        },
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['GeistMono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      animation: {
        'gradient-drift': 'gradient-drift 8s ease-in-out infinite alternate',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        blink: 'blink 1s step-end infinite',
        'pulse-green': 'pulse-green 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-drift': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 0 0 0 #22c55e30' },
          '50%': { boxShadow: '0 0 0 8px #22c55e00' },
        },
      },
    },
  },
  plugins: [],
};
