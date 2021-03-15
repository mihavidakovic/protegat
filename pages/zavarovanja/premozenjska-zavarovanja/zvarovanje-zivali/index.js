import Head from 'next/head'

export default function ZavarovanjeZivali() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-28 flex-auto">
        <div className="container">
          <h2 className="font-semibold text-3xl text-gray-800 mb-4">Zavarovanje živali</h2>
          <section className="w-3/4 mb-6">
            <p className="text-gray-800 font-normal leading-7 mb-2">Hišni ljubljenčki in tudi druge živali imajo za lastnike neprecenljivo vrednost. Zavarujte jih za primer nezgode ali bolezni.</p>
            <p className="text-gray-800 font-normal leading-7">Zavarujemo tako hišne ljubljenčke kot domače ali celo eksotične živali.</p>
          </section>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">ZAVAROVANJE PSOV – ODSLEJ S PRENOVLJENIM ZAVAROVANJEM</h3>
              <p className="text-gray-800 font-normal leading-7">Psi so pogosto člani družine tako kot ljudje, zato ne pozabite skleniti zavarovanja za vašega psa. To je enostavna rešitev v primeru neljubih dogodkov in stroškov, povezanih z njimi.</p>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">ZAVAROVANJE GOSPODARSKIH ŽIVALI, KONJEV IN VSEH OSTALIH ŽIVALI</h3>
              <p className="text-gray-800 font-normal leading-7">Kljub skrbni vzreji lahko živali zbolijo, se poškodujejo ali celo poginejo. To lahko pomeni dodaten nenačrtovan strošek, zato poskrbite za zavarovanje vaših živali.</p>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">ŽIVINOREJSKI PAKET</h3>
              <p className="text-gray-800 font-normal leading-7">Za vse rejce plemenskih krav, ki se ukvarjajo s proizvodnjo mleka smo pripravili živinorejski paket.</p>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">NEZGODNO ZAVAROVANJE PLEMENSKIH KRAV</h3>
              <p className="text-gray-800 font-normal leading-7">Zavarovanje krije temeljne nevarnosti (pogin, zakol v sili ali iz ekonomskih razlogov, ter usmrtitev), katerih vzrok je nezgoda.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
