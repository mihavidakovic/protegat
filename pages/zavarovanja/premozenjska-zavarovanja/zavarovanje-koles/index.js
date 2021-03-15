import Head from 'next/head'
import { IoEllipse } from 'react-icons/io5'

export default function ZavarovanjeKoles() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-28 flex-auto">
        <div className="container">
          <h2 className="font-semibold text-3xl text-gray-800 mb-4">Zavarovanje koles in kolesarjev</h2>
          <section className="w-3/4 mb-6">
          <p className="text-gray-800 font-normal leading-7 mb-3">Storitev Triglav kolesar je novost, ki smo jo razvili, ker si želimo, da je kolesarjenje povezano le s prijetnimi doživetji.</p>
          <p className="text-gray-800 font-normal leading-7 mb-3">Zavarovanje je namenjeno fizičnim osebam (posameznikom), lastnikom in uporabnikom koles, koles na električni in drug pogon s pedali, ki jih po zakonu ni treba registrirati.</p>
          </section>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <p className="text-gray-800 font-normal leading-7 mb-2">Izbirate lahko med dvema paketoma (osnovni paket ter kasko paket). Zavarovalno kritje tako obsega troje obveznih in eno opcijsko kritje:</p>
              <ul>
                <li className="flex flex-row mb-1 flex-shrink-0">
                  <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>zavarovanje odgovornosti kolesarja,</p>
                </li>
                <li className="flex flex-row mb-1 flex-shrink-0">
                  <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>asistenco za kolo in kolesarja,</p>
                </li>
                <li className="flex flex-row mb-1 flex-shrink-0">
                  <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>nezgodno zavarovanje ter izbirno,</p>
                </li>
                <li className="flex flex-row mb-1 flex-shrink-0">
                  <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>kasko zavarovanje kolesa.</p>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <p className="text-gray-800 font-normal leading-7">Priporočamo vam, da zavarovanje sklenete na naši spletni strani, postopek je enostaven, privarčujete pa nekaj svojega dragocenega časa.</p>
              <p className="text-gray-800 font-normal leading-7">Če ste kupili novo kolo pohitite in sklenite kasko paket v roku 7 dni od nakupa.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
