module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito sans': ['nunito sans', 'sans-serif']
      },
      backgroundImage: {
        'landing-page': 'url("/src/assets/landing-background.jpg")',
        'landing-one': 'url("/src/assets/landing-background1.jpg")',
        'landing-two': 'url("/src/assets/landing-background2.jpg")',
        'landing-three': 'url("/src/assets/landing-background3.jpg")',
      },
    },
  },
  plugins: [],
}