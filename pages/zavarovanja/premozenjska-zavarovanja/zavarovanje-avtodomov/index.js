import Head from 'next/head'
import { IoEllipse } from 'react-icons/io5'

export default function ZavarovanjeAvtodomov() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-28 flex-auto">
        <div className="container">
          <h2 className="font-semibold text-3xl text-gray-800 mb-4">Zavarovanje avtodomov</h2>
          <section className="w-3/4 mb-6">
            <p className="text-gray-800 font-normal leading-7">Število lastnikov avtodomov strmo narašča. Zato smo za vse, ki se na potovanja odpravljate z avtodomi, pripravili vrsto ugodnosti.</p>
          </section>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">UGODNOSTI</h3>
              <ul>
                <li className="flex flex-row mb-1 flex-shrink-0">
                  <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>5 % popust na takojšnje plačilo premije,</p>
                </li>
                <li className="flex flex-row mb-1 flex-shrink-0">
                  <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>10 % popust na zavarovalno premijo splošnega kaska in kombinacij B in K za zavarovanje specialnih motornih vozil, starih 5 ali več let,</p>
                </li>
                <li className="flex flex-row mb-1 flex-shrink-0">
                  <IoEllipse className="mt-2 mr-2 text-xs flex-shrink-0" />
                  <p>20 % popust na zavarovalno premijo kombinacije K delnega avtomobilskega kaska v primeru, da ima vozilo vgrajeno atestirano napravo za protivlomno varovanje vozila.</p>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <p className="text-gray-800 font-normal leading-7">Priporočamo, da sklenete tudi zavarovanje avtomobilske asistence, ki smo jo dopolnili s ponudbo za avtodome in bivalne prikolice.</p>
              <p className="text-gray-800 font-normal leading-7">Kadarkoli boste potrebovali pomoč, pokličite 080 2864 (iz tujine +386 2222 2864). Pomagali vam bomo in vas rešili iz neljube situacije.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
