import Head from 'next/head'

export default function Zaposlitev() {

  return (
    <>
      <Head>
        <title>Zaposlitev - Protegat.si</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8" />
        <meta name="description" content="Podjetje Protegat je ekskluzivna zavarovalno zastopniška družba, ki zastopa vodilno zavarovalnico v Sloveniji Zavarovalnico Triglav d.d. in Triglav, Zdravstveno zavarovalnico d.d." />

        <meta property="og:title" content="Protegat.si" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <div className="bg-gray-100 py-28 flex-auto relative">
          <div className="container">
            <h2 className="font-semibold text-3xl text-gray-800 mb-4">Zaposlitev</h2>
            <p className="text-gray-800 font-normal leading-7 mb-2">Podjetje Protegat omogoča sodelovanje posameznikom, ki iščejo nove izzive in se želijo preizkusiti v doseganju višje zastavljenih ciljev.</p>
            <p className="text-gray-800 font-normal leading-7 mb-2">Kandidatom za zaposlitev in zaposlenim omogočamo strokovno izobraževanje. Nudimo podporo pri uresničevanju vaših planov.</p>
            <p className="text-gray-800 font-normal leading-7 mb-2">Zgradili smo primerno delovno okolje, ki temelji na dobrih medsebojnih odnosih in sodelovanju.</p>
            <p className="text-gray-800 font-normal leading-7 mb-2">Imamo tudi lastni telefonski studio, ki našim sodelavcem dogovarja termine s potencialnimi strankami.</p>
            <p className="text-gray-800 font-normal leading-7 mb-2">Radi se pohvalimo, da imamo dobre in korektne odnose z zaposlenimi, strankami ter našimi partnerji.</p>
          </div>
          <img src="/img/zaposlitev.png" className="hidden md:block absolute w-1/4 bottom-0 right-10" />
        </div>
      </div>
    </>
  )
}
