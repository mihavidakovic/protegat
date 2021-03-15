import Head from 'next/head'

import Swiper from '../components/Swiper'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20 lg:pt-26">
      <Swiper />
    </div>
  )
}
