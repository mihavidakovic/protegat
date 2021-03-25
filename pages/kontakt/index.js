import Head from 'next/head'

export default function Kontakt() {

  return (
    <>
      <Head>
        <title>Kontakt - Protegat.si</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8" />
        <meta name="description" content="Podjetje Protegat je ekskluzivna zavarovalno zastopniška družba, ki zastopa vodilno zavarovalnico v Sloveniji Zavarovalnico Triglav d.d. in Triglav, Zdravstveno zavarovalnico d.d." />

        <meta property="og:title" content="Protegat.si" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <div className="bg-gray-100 py-28 flex-auto">
          <div className="container">
            <h2 className="font-semibold text-3xl text-gray-800 mb-4">Kontakt</h2>
            <section className="w-3/4 mb-6">
              <p className="text-gray-800 font-bold leading-7 mb-2">PROTEGAT, zavarovalno zastopanje, d.o.o.</p>
              <p className="text-gray-800 font-normal leading-7 mb-2">Virmaše 221</p>
              <p className="text-gray-800 font-normal leading-7 mb-2">4220 Škofja Loka</p>
              <p className="text-gray-800 font-normal leading-7 mb-2"><b>Davčna številka:</b> SI 61692395</p>
              <p className="text-gray-800 font-normal leading-7 mb-2"><b>Matična številka:</b> 6293344000</p>
            </section>
            <section className="w-3/4 mb-6">
              <p className="text-gray-800 font-normal leading-7 mb-2"><b>E-mail:</b> info@protegat.si</p>
              <p className="text-gray-800 font-normal leading-7 mb-2"><b>Telefon:</b> 01/ 292-79-90</p>
              <p className="text-gray-800 font-normal leading-7 mb-2"><b>Telefaks:</b> 01/ 292-79-91</p>
            </section>
            <section className="w-3/4 mb-6">
              <p className="text-gray-800 font-normal leading-7"><b>TRR:</b> SI56101000051587796, odprt pri Banka Koper d.d.</p>
            </section>
            <section className="w-3/4 mb-6">
              <p className="text-gray-800 font-normal leading-7 mb-2"><b>Dejavnost po SKD:</b> K66.220 – Dejavnost zavarovalniških agentov</p>
              <p className="text-gray-800 font-normal leading-7"><b>Številka dovoljenja AZN::</b> 40110-2167/12-4</p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
