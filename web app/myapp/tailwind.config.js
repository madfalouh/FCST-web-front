module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors : {
        bluenav :"#00016c" , 
        textcolor:"#FFFF" , 
        textcolorhover:"#C0C0CB" , 
        pallete:"#DFF1FF"
      } , 
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
