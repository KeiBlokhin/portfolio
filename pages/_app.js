import Navbar from '@/components/Navbar'
import Footer from '../components/Footer'
import CssBaseline from '@mui/material/CssBaseline'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
