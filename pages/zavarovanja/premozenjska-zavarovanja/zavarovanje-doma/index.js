import Head from 'next/head'
import { IoEllipseOutline } from 'react-icons/io5'

export default function ZavarovanjeDoma() {
    
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-28 flex-auto">
        <div className="container">
        <h2 className="font-semibold text-3xl text-gray-800 mb-4">Zavarovanje doma</h2>
        <section className="w-3/4 mb-6">
          <p className="text-gray-800 font-normal leading-7">V že sestavljene pakete zavarovanj smo zložili najboljša zavarovalna kritja, in sicer v tri kakovostne nivoje, za manj in bolj zahtevne zavarovance. Paketno zavarovanje doma je sklenjeno na novo vrednost.</p>
          <p className="text-gray-800 font-normal leading-7">Če bo do škodnega dogodka prišlo, vam zagotavljamo pomoč na domu ter hitro in učinkovito reševanje škode. Dovolj je, da pokličete Asistenčni center Zavarovalnice Triglav na 080 2864.</p>
          <p className="text-gray-800 font-normal leading-7">Vsa potrebna zavarovanja lahko sklenete tudi posamično.</p>
        </section>
        <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">ZAVAROVANJE HIŠE</h3>
              <p className="text-gray-800 font-normal leading-7">Hiša je življenjska investicija, ki jo želi doseči skoraj vsak. Komur jo uspe dokončati ve, koliko denarja, časa in energije je za to potrebno.</p>
              <p className="text-gray-800 font-normal leading-7">Pri tem pa se premalokrat zavemo, da je dom le eden in da ga je potrebno skrbno vzdrževati, varovati in tudi zavarovati. Dobro ga zavarujte.</p>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">PAKETNO ZAVAROVANJE HIŠE</h3>
              <p className="text-gray-800 font-normal leading-7 mb-3">Paketno zavarovanje hiše zagotavlja popolno zavarovanje, saj z eno zavarovalno polico poskrbite za zavarovanje:</p>
              <ul>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>hiše s pomožnimi objekti,</p>
                </li>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>stanovanjske opreme,</p>
                </li>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>stroškov čiščenja,</p>
                </li>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>odgovornosti,</p>
                </li>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>asistence na domu,</p>
                </li>
                <li className="flex flex-row items-center mb-4 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>družinskih članov za primer nezgode.</p>
                </li>
              </ul>
              <p className="text-gray-800 font-normal leading-7 mb-2">Izbirate lahko med tremi paketi zavarovanj, ki se med seboj razlikujejo po številu zavarovanih nevarnosti in višini kritij:</p>
              <ul>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>paket <b>A</b> – krije osnovne nevarnosti,</p>
                </li>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>paket <b>B</b> – krije nevarnosti, ki nas najpogosteje ogrožajo,</p>
                </li>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>paket <b>C</b> – krije najširšo paleto nevarnosti.</p>
                </li>
              </ul>
              <p className="text-gray-800 font-normal leading-7 mb-2">V paketih za zavarovanje hiše se pri izbranih zavarovanih nevarnostih lahko odločite za višje zavarovalno kritje, po dogovoru pa lahko v pakete dodatno vključite tudi naslednja zavarovanja:</p>
              <ul>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>potresno zavarovanje,</p>
                </li>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>strojelomno zavarovanje instalacij,</p>
                </li>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>zavarovanje indirektnega udara strele,</p>
                </li>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>zavarovanje mehanskega loma,</p>
                </li>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>zavarovanje umetniških in antičnih predmetov ter zbirk za višje zneske,</p>
                </li>
                <li className="flex flex-row items-center mb-3 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>dodatno nezgodno zavarovanje članov gospodinjstva.</p>
                </li>
              </ul>
              <p className="text-gray-800 font-normal leading-7 mb-3">Odločite se za sklenitev paketnega zavarovanja hiše in si zagotovite popolno varnost vas, vaših najbližjih ter vašega premoženja..</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
