/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        footerLinkFont: 'hsl(228, 45%, 44%)',
      },
    },
  },
  plugins: [],
};
