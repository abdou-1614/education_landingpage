module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
     'default': 'hsl(15, 100%, 55%)',
     'ultra-blue': 'hsl(217, 100%, 50%)',
     'lavandage': 'hsl(229, 96%, 91%)',
     'exford': 'hsl(229, 84%, 12%)',
     'light-gray': 'hsl(0, 0%, 80%)',
     'sonic': 'hsl(0, 0%, 47%)',
     'blue-cray': 'hsl(216, 98%, 52%)',
     'culur': 'hsl(228, 26%, 96%)',
     'white1': 'hsl(0, 0%, 100%)',
     'white2': 'hsla(0, 0%, 100%, 0.9)'
    },
    extend: {
      spacing: {
        'tx': '15px',
        'ty': '80px',
      },
      boxShadow: {
        primary: '0 10px 20px -5px hsla(0, 0%, 0%, 0.03)'
      }
    },
  },
  plugins: [],
}
