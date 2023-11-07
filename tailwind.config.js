/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        footerLinkFont: 'hsl(228, 45%, 44%)',
        textFontOrange: 'hsl(26, 100%, 55%)',
        textFontLightGrayish: 'hsl(219, 9%, 45%)',
        textFontLightBlue: 'hsl(220, 14%, 75%)',
        buttonBackgroundPrimary: 'hsl(223, 64%, 98%)',
        buttonBackgroundSecondary: 'hsl(26, 100%, 55%)',
        backgroundPaleOrange: 'hsl(25, 100%, 94%)',
        fullScreenGalleryBackgroundColor: 'hsl(0, 0%, 0%)',
        fullImageScreenBackgroundColor: 'rgba(0,0,0, 0.75)',
      },
      spacing: {
        '-20px': '-20px',
        '-12px': '-12px',
      },
    },
  },
  plugins: [],
};
