import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brandPink: '#F28ACD',
        brandPurple: '#AB57F4',
        brandText: '#28262C',
        brandBg: '#FFFFFF',
        rlText: '#28262C',
        rlPink: '#F28ACD',
        rlViolet: '#AB57F4',
      },
      backgroundImage: {
        'rl-gradient': 'linear-gradient(90deg, #F28ACD, #AB57F4)'
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.05)'
      },
      borderRadius: {
        full: '9999px'
      }
    }
  },
  plugins: []
} satisfies Config
