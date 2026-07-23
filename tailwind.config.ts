import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050713',
        mist: '#e6f2ff',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(94, 234, 212, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
