module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        bluenav :"#00016c",
        textcolor:"#FFFF",
        textcolorhover:"#C0C0CB",
        pallete:"#DFF1FF"
      },
      fontFamily : {
        body :['Share Tech']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
