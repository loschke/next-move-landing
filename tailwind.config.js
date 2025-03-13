/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fa4a37', // Combined color
        queonext: '#fa186b', // queonext brand color
        moveelevator: '#F97901', // Move:Elevator brand color
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, var(--queonext), var(--moveelevator))',
      },
      fontFamily: {
        sans: ['FF Clan Pro', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        ultra: '900',
      },
    },
  },
  plugins: [],
}
