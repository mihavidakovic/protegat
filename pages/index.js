import Head from 'next/head'

import Swiper from '../components/Swiper'

export default function Home() {
  return (
    <>
      <Head>
        <title>Domov - Protegat.si</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8" />
        <meta name="description" content="Podjetje Protegat je ekskluzivna zavarovalno zastopniška družba, ki zastopa vodilno zavarovalnico v Sloveniji Zavarovalnico Triglav d.d. in Triglav, Zdravstveno zavarovalnico d.d." />

        <meta property="og:title" content="Protegat.si" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex flex-col pt-20 lg:pt-26">
        <Swiper />
      </div>
    </>
  )
}
