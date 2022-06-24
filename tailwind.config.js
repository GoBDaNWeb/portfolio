/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter'],
      },
      backgroundImage: {
        'intercourse': "url('./assets/intercourse.jpg')",
        'crypto': "url('./assets/crypto.jpg')",
        'todosh': "url('./assets/todosh.jpg')",
        'weather': "url('./assets/weather.jpg')",
        'kiwi': "url('./assets/kiwi.jpg')",
        'movies': "url('./assets/movies.jpg')",
      }
    },
  },
  plugins: [],
}