/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          250: '#dde2e8',
          450: '#8a9bb5',
          555: '#6a7b96',
          550: '#6b7b96',
          650: '#4a5a72',
          750: '#334155',
          755: '#303d4e',
          805: '#1e2a3a',
          850: '#1a2535',
          855: '#172233',
        },
        indigo: {
          455: '#7c8cff',
          650: '#5555dd',
          750: '#4338ca',
        },
        rose: {
          150: '#ffd6dc',
          455: '#ff6b7a',
          650: '#c02030',
        },
        emerald: {
          455: '#34d399',
        },
        amber: {
          550: '#d97706',
        },
      },
      scale: {
        97: '0.97',
        99: '0.99',
      },
      spacing: {
        safe: 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
}
