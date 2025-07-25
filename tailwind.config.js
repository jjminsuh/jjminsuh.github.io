/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}', // Gatsby의 주요 소스 경로
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            code: {
              backgroundColor: theme('colors.zinc.100'),
              color: theme('colors.pink.600'),
              padding: '0.25em 0.5em',
              borderRadius: theme('borderRadius.md'),
              fontWeight: '500',
              fontFamily: theme('fontFamily.mono'),
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },

            pre: {
              backgroundColor: theme('colors.zinc.900'),
              color: theme('colors.zinc.100'),
              padding: '0.75rem 1rem',
              borderRadius: theme('borderRadius.xl'),
              overflowX: 'auto',
              fontSize: theme('fontSize.sm'),
              lineHeight: theme('lineHeight.relaxed'),
              fontFamily: theme('fontFamily.mono'),
              position: 'relative',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: 0,
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
