/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        meta: ['var(--font-meta)', 'sans-serif'],
      },
      colors: {
        forest: {
          50:  '#f3f7f3',
          100: '#e2ede2',
          200: '#c3dac3',
          300: '#96be97',
          400: '#639e65',
          500: '#3d7f3f',
          600: '#2d6330',
          700: '#254f27',
          800: '#1f4021',
          900: '#1a341b',
        },
        stone: {
          warm: '#f5f0e8',
          mid: '#e8dfd0',
          deep: '#8a7a68',
        },
        ink: '#1c1c1c',
      },
    },
  },
  plugins: [],
};
