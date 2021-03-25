import Head from 'next/head'
import Link from 'next/link'

export default function OPodjetju() {

  return (
    <>
      <Head>
        <title>O podjetju - Protegat.si</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8" />
        <meta name="description" content="Podjetje Protegat je ekskluzivna zavarovalno zastopniška družba, ki zastopa vodilno zavarovalnico v Sloveniji Zavarovalnico Triglav d.d. in Triglav, Zdravstveno zavarovalnico d.d." />

        <meta property="og:title" content="Protegat.si" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <div className="bg-gray-100 py-28 flex-auto">
          <div className="container">
            <h2 className="font-semibold text-3xl text-gray-800 mb-4">O podjetju</h2>
            <section className="w-3/4 mb-6">
              <p className="text-gray-800 font-bold leading-7 mb-2">PROTEGAT, zavarovalno zastopanje, d.o.o.</p>
              <p className="text-gray-800 font-normal leading-7 mb-2">Podjetje Protegat je ekskluzivna zavarovalno zastopniška družba, ki zastopa vodilno zavarovalnico v Sloveniji Zavarovalnico Triglav d.d. in Triglav, Zdravstveno zavarovalnico d.d.</p>
              <p className="text-gray-800 font-normal leading-7 mb-2">Specializirani smo za svetovanje na področju osebnih in premoženjskih zavarovanj.</p>
              <p className="text-gray-800 font-normal leading-7 mb-2">Z bogatimi izkušnjami in osebnim pristopom vam bomo svetovali, kako izbrati optimalen produkt s katerim si boste zagotovili primerno socialno varnost, si omogočili finančno neodvisnost ali kvalitetno zavarovali vaše premoženje.</p>
              <p className="text-gray-800 font-normal leading-7 mb-2">Če želite dosegati vaše zastavljene cilje nas <Link href="/kontakt"><span className="text-red-500 hover:text-red-600 font-semibold cursor-pointer">kontaktirajte</span></Link>.</p>
              <p className="text-gray-800 font-normal leading-7 mb-2">Prepričani smo, da bo pot do vašega CILJA z nami bolj ENOSTAVNA!</p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
