import Header from '../component/Header/index'
import '../styles/globals.css'
import Footer from '../component/Footer'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
