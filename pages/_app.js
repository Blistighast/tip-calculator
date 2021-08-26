import '../styles/globals.css'
import { CalcContextProvider } from './../context/CalcContext';

function MyApp({ Component, pageProps }) {
  return (
  <CalcContextProvider>
    <Component {...pageProps} />
  </CalcContextProvider>
  )
}

export default MyApp
