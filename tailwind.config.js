module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1600px',
        // Custom breakpoints for better mobile support
        'mobile': {'max': '767px'},
        'tablet': {'min': '768px', 'max': '1023px'},
        'desktop': {'min': '1024px'},
        'touch': {'raw': '(hover: none)'},
        'mouse': {'raw': '(hover: hover)'},
      },
      fontFamily: {
        'nunito sans': ['nunito sans', 'sans-serif']
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      minHeight: {
        'touch': '44px',
        'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
      },
      minWidth: {
        'touch': '44px',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        mobileFadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        }
      },
      animation: {
        'pulse': 'pulse 4s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'mobileFadeIn': 'mobileFadeIn 0.4s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.5s ease-out forwards',
        'slideInRight': 'slideInRight 0.5s ease-out forwards',
      },
      backgroundImage: {
        'landing-page': 'url("/src/assets/landing-background1.webp")',
        'landing-one': 'url("/src/assets/landing-background1.webp")',
        'landing-two': 'url("/src/assets/landing-background2.webp")',
        'landing-three': 'url("/src/assets/landing-background3.webp")',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '21/9': '21 / 9',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        // Responsive font sizes
        'mobile-sm': 'clamp(0.875rem, 2.5vw, 1rem)',
        'mobile-base': 'clamp(1rem, 3vw, 1.125rem)',
        'mobile-lg': 'clamp(1.125rem, 3.5vw, 1.25rem)',
        'mobile-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
        'mobile-2xl': 'clamp(1.5rem, 5vw, 2rem)',
        'mobile-3xl': 'clamp(1.875rem, 6vw, 2.5rem)',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ease-in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    },
  },
  plugins: [],
}