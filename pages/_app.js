import Navbar from '@/components/Navbar'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
