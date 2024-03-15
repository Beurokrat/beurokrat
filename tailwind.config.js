/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1400px',
    },
    extend: {
      colors: {
        primary: '#BAFF17',
        primaryHover: '#D9FF80',
        bkGrayLight: '#F2F2F2',
        bkGrayDark: '#696969',
        bkGray: '#E5E5E5'
      }
    },
  },
  plugins: [],
}