module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito sans': ['nunito sans', 'sans-serif']
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        'pulse': 'pulse 4s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-out forwards',
      },
      backgroundImage: {
        'landing-page': 'url("/src/assets/landing-background1.jpg")',
        'landing-one': 'url("/src/assets/landing-background1.jpg")',
        'landing-two': 'url("/src/assets/ai-background.jpg")',
        'landing-three': 'url("/src/assets/landing-background3.jpg")',
      },
    },
  },
  plugins: [],
}