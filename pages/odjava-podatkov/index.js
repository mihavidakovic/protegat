import Head from 'next/head'


export default function OdjavaPodatkov() {

  return (
    <>
      <Head>
        <title>Odjava podatkov - Protegat.si</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8" />
        <meta name="description" content="Podjetje Protegat je ekskluzivna zavarovalno zastopniška družba, ki zastopa vodilno zavarovalnico v Sloveniji Zavarovalnico Triglav d.d. in Triglav, Zdravstveno zavarovalnico d.d." />

        <meta property="og:title" content="Protegat.si" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <div className="bg-gray-100 py-28 flex-auto">
          <div className="container">
            <h2 className="font-semibold text-3xl text-gray-800 mb-4">Odjava od uporabe osebnih podatkov</h2>
            <p className="text-gray-800 font-normal leading-7 mb-2">Od uporabe osebnih podatkov se lahko odjavite tudi po pošti na naslov: Virmaše 221, 4220 Škofja Loka.</p>
            <p className="text-gray-800 font-normal leading-7 mb-2">Prosimo vnesite naslednje podatke:</p>
            <form action="https://formspree.io/f/mpzovkro" method="POST" className="w-full md:w-1/3">
              <div className="flex flex-col mb-3">
                <label htmlFor="ime" className="font-bold mb-2">Ime: (<span className="text-red-500 font-bold">*</span>)</label>
                <input type="text" name="ime" id="ime" className="bg-white px-3 py-2 border border-gray-300 focus:border-gray-400 outline-none" />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="priimek" className="font-bold mb-2">Priimek: (<span className="text-red-500 font-bold">*</span>)</label>
                <input type="text" name="priimek" id="priimek" className="bg-white px-3 py-2 border border-gray-300 focus:border-gray-400 outline-none" />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="rojstni-datum" className="font-bold mb-2">Rojstni datum: (<span className="text-red-500 font-bold">*</span>)</label>
                <input type="date" name="rojstni-datum" id="rojstni-datum" className="bg-white px-3 py-2 border border-gray-300 focus:border-gray-400 outline-none" />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="email" className="font-bold mb-2">Vaš elektronski naslov:</label>
                <input type="text" name="email" id="email" className="bg-white px-3 py-2 border border-gray-300 focus:border-gray-400 outline-none" />
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="sporocilo" className="font-bold mb-2">Sporočilo:</label>
                <textarea rows="4" name="sporocilo" id="sporocilo" className="bg-white px-3 py-2 border border-gray-300 focus:border-gray-400 outline-none" />
              </div>
              <button type="submit" className="bg-red-600 hover:bg-red-700 font-bold text-white px-12 py-2 border-none outline-none cursor-pointer">Pošlji</button>
            </form>
            <p className="font-bold text-xs mt-4">Polja označena z * so obvezna.</p>
          </div>
        </div>
      </div>
    </>
  )
}
