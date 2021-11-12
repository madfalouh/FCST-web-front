import '../styles/globals.css'
import Router from 'next/router'
import AuthProvider from '../context/auth'

function MyApp({ Component, pageProps }) {
  return( <AuthProvider><Component {...pageProps} />  </AuthProvider> )
}

export default MyApp