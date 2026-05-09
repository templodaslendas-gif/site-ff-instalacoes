/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          mid: '#0d1f3c',
          light: '#152847',
        },
        brand: {
          DEFAULT: '#1a6cf5',
          vivid: '#2979ff',
          glow: '#4a9eff',
        },
      },
    },
  },
  plugins: [],
}
