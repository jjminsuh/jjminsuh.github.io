/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Gatsby의 주요 소스 경로
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
