import Head from 'next/head'
import { IoEllipse } from 'react-icons/io5'

export default function ZavarovanjeMotornihKoles() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-28 flex-auto">
        <div className="container">
          <h2 className="font-semibold text-3xl text-gray-800 mb-4">Zavarovanje motronih koles</h2>
          <section className="w-3/4 mb-6">
            <p className="text-gray-800 font-normal leading-7">Zavarovalno premijo smo uskladili s ključnimi parametri, ki odražajo tehnične karakteristike motornega kolesa.</p>
          </section>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">ZAVAROVANJA SO PRILAGOJENA VAŠIM ZAHTEVAM IN ZAGOTAVLJAJO CELOVITO KRITJE:</h3>
              <ul>
              <li className="flex flex-row mb-1 flex-shrink-0">
              <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>Prenovljeno zavarovanje na novo in bistveno bolj smiselno razmejuje razrede, v katere so v skladu z zakonsko kategorizacijo in omejitvami (kategorije vozniškega dovoljenja) po moči motorja razvrščena motorna kolesa. Ta parameter se upošteva pri zavarovanju avtomobilske odgovornosti.</p>
                </li>
                <li className="flex flex-row mb-1 flex-shrink-0">
                <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>Uvedli smo nov kriterij, razmerje med močjo motorja (kW) in njegovo maso (kg), ki zelo pregledno in tehnično opiše dinamiko motornega kolesa. Kriterij nam pokaže uporabnost in namembnost ter posebnosti motornega kolesa. Ta kriterij se upošteva pri zavarovanju avtomobilske odgovornosti, zavarovanju voznika za škodo telesnih poškodb in zavarovanju avtomobilskega kaska.</p>
                </li>
                <li className="flex flex-row mb-1 flex-shrink-0">
                <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>Diferenciacija zavarovalne premije glede na starost zavarovanca velja tako pri zavarovanju avtomobilske odgovornosti in zavarovanju voznika za škodo telesnih poškodb kot pri zavarovanju avtomobilskega kaska.</p>
                </li>
                <li className="flex flex-row mb-1 flex-shrink-0">
                  <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>Glede na starost motornega kolesa pa velja diferenciacija zavarovalne premije pri zavarovanju avtomobilskega kaska za motorno kolo, starejše od 4 let, boste prihranili 10 %, pri starejših od 6 let pa 20 %.</p>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">UGODNOSTI</h3>
              <ul>
              <li className="flex flex-row mb-1 flex-shrink-0">
              <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>Pri zavarovanju avtomobilske odgovornosti vam priznamo bonus v enaki višini, kot ga imate za osebno vozilo, ki je zavarovano pri Zavarovalnici Triglav.</p>
                </li>
                <li className="flex flex-row mb-1 flex-shrink-0">
                <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>Pri sklenitvi novega zavarovanja splošnega avtomobilskega kaska ima zavarovanec pravico do razvrstitve v premijski razred, ki je za dva razreda višji od premijskega razreda, po katerem je določena zavarovalna premija za zavarovanje avtomobilske odgovornosti za to vozilo.</p>
                </li>
                <li className="flex flex-row mb-1 flex-shrink-0">
                <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>Popust do 40 % v primeru, da se zavarovanec in zavarovalnica dogovorita, da zavarovanec ob predčasni prekinitvi zavarovanja ne bo uveljavljal pravice do neizkoriščenega dela premije.</p>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">Triglav komplet</h3>
              <p className="text-gray-800 font-normal leading-7">Zavarovanje motornega kolesa vključite v Triglav komplet in deležni boste popusta na sklenitev premoženjskega zavarovanja.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
