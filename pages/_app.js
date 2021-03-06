import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import "../styles/swiper.scss"
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
    return (
    <div className="flex flex-col">
      <Header />
        <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
