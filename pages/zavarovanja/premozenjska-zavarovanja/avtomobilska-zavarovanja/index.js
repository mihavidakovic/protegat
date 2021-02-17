import Head from 'next/head'
import { IoEllipseOutline } from 'react-icons/io5'

export default function AvtomobilskaZavarovanja() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-28 flex-auto">
        <div className="container">
          <h2 className="font-semibold text-3xl text-gray-800 mb-6">Avtomobilska zavarovanja</h2>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">AVTOMOBILSKA ODGOVORNOST – AO</h3>
              <p className="text-gray-800 font-normal leading-7">Zavarovanje avtomobilske odgovornosti je po zakonu obvezno zavarovanje, ki ga mora imeti vsako registrirano vozilo.</p>
              <p className="text-gray-800 font-normal leading-7">V primeru prometne nesreče, ko z vašim vozilom nenamerno povzročite škodo drugi osebi, zavarovalnica oškodovancu povrne premoženjsko (uničenje ali poškodovanje stvari) ter nepremoženjsko škodo (telesne poškodbe, okvara zdravja ali smrt).</p>
              <p className="text-gray-800 font-normal leading-7">Zavarovanje avtomobilske odgovornosti velja tudi v tujini, za kar je priporočljivo, da si priskrbite zeleno karto – mednarodno veljavno potrdilo o zavarovanju.</p>
              <p className="text-gray-800 font-normal leading-7">Ker zavarovanje avtomobilske odgovornosti krije le škodo, povzročeno drugim udeležencem nezgode, vam priporočamo, da sklenete tudi zavarovanje voznika povzročitelja za primer telesnih poškodb ali smrti – AO plus.</p>
              <p className="text-gray-800 font-normal leading-7">Natančnejši opis zavarovalnih kritij si lahko ogledate v prospektu ali v pogojih za zavarovanje.</p>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">AO PLUS – ZAVAROVANJE VOZNIKA</h3>
              <p className="text-gray-800 font-normal leading-7">Zavarovanje voznika povzročitelja prometne nesreče za primer telesnih poškodb ali smrti.</p>
              <p className="text-gray-800 font-normal leading-7">Ker zavarovanje avtomobilske odgovornosti – AO krije le škodo, povzročeno drugim udeležencem prometne nesreče, vam priporočamo, da sklenete tudi zavarovanje voznika povzročitelja za primer telesnih poškodb ali smrti – AO plus.</p>
              <p className="text-gray-800 font-normal leading-7">Z zavarovanjem voznika za škodo zaradi telesnih poškodb – AO plus zavarovalnica povrne pravno priznano škodo, ki jo zaradi telesnih poškodb v prometni nesreči utrpi voznik zavarovanega motornega vozila v primeru, ko je za nezgodo odgovoren sam. Če se voznik v primeru nezgode smrtno ponesreči, zavarovalnica povrne škodo njegovim svojcem.</p>
              <p className="text-gray-800 font-normal leading-7">Natančnejši opis zavarovalnih kritij si lahko ogledate v prospektu ali v pogojih.</p>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">AVTOMOBILSKI KASKO</h3>
              <p className="text-gray-800 font-normal leading-7 mb-2">Avtomobilsko kasko zavarovanje krije škodo zaradi uničenja ali poškodb vozila, ki je posledica presenetljivih dogodkov v prometu in mirovanju, ob naravnih in elementarnih nesrečah, izginitvi in tatvini, ter zaradi dejanj tretjih oseb in posebnih dogodkov.</p>
              <p className="font-bold">SPLOŠNO KASKO ZAVAROVANJE</p>
              <p className="text-gray-800 font-normal leading-7 mb-3">Splošni kasko krije škodo zaradi uničenja ali poškodb zavarovanih stvari, ki je posledica presenetljivih in od voznikove volje neodvisnih dogodkov, ki nastanejo:</p>
              <ul>
                <li className="flex flex-row items-center mb-3 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>v prometu in mirovanju: prometna nesreča, trčenje, prevrnitev, zdrs ali padec vozila, udarec ali padec kakega predmeta, snega ter ledenih sveč ali ledenih tvorb;</p>
                </li>
                <li className="flex flex-row items-center mb-3 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>zaradi dejanj tretjih oseb: nasilno ali objestno dejanje, manifestacije in demonstracije;</p>
                </li>
                <li className="flex flex-row items-center mb-1 flex-shrink-0">
                  <IoEllipseOutline className="mr-2" />
                  <p>zaradi posebnih dogodkov: padec zračnega plovila, pomoč poškodovanim osebam, preprečevanje večje škode na stvareh (ravnanje v skrajni sili).</p>
                </li>
              </ul>
              <p className="text-gray-800 font-normal leading-7 mb-3">Dodatno lahko sklenete tudi strojelomno zavarovanje, zavarovanje dodatne opreme vozila, prtljage, zbirke vzorcev trgovskega blaga in drugih stvari v vozilu.</p>
              <p className="font-bold">DELNO KASKO ZAVAROVANJE</p>
              <p className="text-gray-800 font-normal leading-7 mb-3">Z delnimi kombinacijami avtomobilskega kaska lahko zavarujete vozilo pred naslednjimi nevarnostmi:</p>
              <ul className="mb-3">
                <li className="flex flex-row items-center mb-3">
                  <IoEllipseOutline className="mr-2 flex-shrink-0" />
                  <p><b>B</b> – naravne in elementarne nesreče: požar, potres, direktni udar strele, nenadno zunanje toplotno in/ali kemično delovanje, eksplozija – razen jedrske, vihar, toča, snežni ali zemeljski plaz, poplava, hudourniška ali visoka voda;</p>
                </li>
                <li className="flex flex-row items-center mb-3">
                  <IoEllipseOutline className="mr-2 flex-shrink-0" />
                  <p><b>D</b> – divjad in domače živali: neposredni dotik divjadi ali domačih živali;</p>
                </li>
                <li className="flex flex-row items-center mb-1">
                  <IoEllipseOutline className="mr-2 flex-shrink-0" />
                  <p><b>E</b> – steklo: razbitje ali poškodovanje standardno vgrajenih stekel (razen svetlobnih teles in ogledal) na vozilu;</p>
                </li>
                <li className="flex flex-row items-center mb-1">
                  <IoEllipseOutline className="mr-2 flex-shrink-0" />
                  <p><b>H</b> – parkirišče: poškodovanje ali uničenje parkiranega ali ustavljenega osebnega vozila zaradi neposrednega dotika neznanega vozila ter strešnih snežnih plazov, ledenih sveč ali ledenih tvorb, ki padejo s stavb;</p>
                </li>
                <li className="flex flex-row items-center mb-1">
                  <IoEllipseOutline className="mr-2 flex-shrink-0" />
                  <p><b>I</b> – nadomestno vozilo: stroški najema nadomestnega osebnega avtomobila, če je bilo zavarovančevo vozilo poškodovano, uničeno ali ukradeno;</p>
                </li>
                <li className="flex flex-row items-center mb-1">
                  <IoEllipseOutline className="mr-2 flex-shrink-0" />
                  <p><b>J</b> – zunanja svetlobna telesa in ogledala: razbitje ali poškodovanje standardno vgrajenih zunanjih svetlobnih teles in ogledal na vozilu;</p>
                </li>
                <li className="flex flex-row items-center mb-1">
                  <IoEllipseOutline className="mr-2 flex-shrink-0" />
                  <p><b>K</b> – kraja: navadna, vlomska in roparska tatvina, rop ter protipravni odvzem vozila ter stroški najema nadomestnega vozila in stroški zamenjave ključavnic v primeru tatvine ali izgube avtomobilskih ključev.</p>
                </li>
              </ul>
              <p className="text-gray-800 font-normal leading-7 mb-1">Delni kasko lahko sklenete tudi brez splošnega kaska, razen kombinacije K. Kombinacijo B pa lahko sklenete le skupaj z zavarovanjem splošnega kaska ali zavarovanjem avtomobilske odgovornosti.</p>
              <p className="text-gray-800 font-normal leading-7 mb-3">Delni kasko je koristen tudi v primeru uveljavljanja škode, ki jo sicer že krije splošni kasko, saj se v tem primeru ne upošteva odbitna franšiza, dogovorjena pri splošnem kasku in hkrati kot zavarovanec ne izgubite že pridobljenega bonusa pri plačilu zavarovalne premije splošnega kaska.</p>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">AVTOMOBILSKO ZAVAROVANJE V PAKETU</h3>
              <p className="text-gray-800 font-normal leading-7 mb-2">Paketna ponudba je najboljša in najugodnejša izbira za vaše avtomobilsko zavarovanje. Paketi se razlikujejo po številu vključenih zavarovanj in višini paketnih popustov.</p>
              <img src="/img/tabela_paketov_a.jpg" className="mb-3 w-full" />
              <p className="text-gray-800 font-normal leading-7 mb-1">Legenda:</p>
              <p className="text-gray-800 font-normal leading-7 mb-1">X – obvezna izbira vseh tako označenih zavarovanj</p>
              <p className="text-gray-800 font-normal leading-7 mb-3">/ – ni možna sklenitev</p>
              <p className="font-bold">OPOMBE:</p>
              <p className="text-gray-800 font-normal leading-7">1. Zavarovanje voznika AO+ lahko sklenete le skupaj z zavarovanjem AO.</p>
              <p className="text-gray-800 font-normal leading-7">2. Kombinacijo B lahko sklenete le skupaj z zavarovanjem splošnega kaska ali zavarovanjem AO.</p>
              <p className="text-gray-800 font-normal leading-7">3. Kombinacijo K lahko sklenete le skupaj z zavarovanjem splošnega kaska.</p>
              <p className="text-gray-800 font-normal leading-7">4. Obvezna sklenitev splošnega kaska brez odbitne franšize ter obvezna prepustitev izbire izvajalca in načina popravila vozila zavarovalnici.</p>
              <p className="text-gray-800 font-normal leading-7">5. Poleg opombe št. 4 je obvezno tudi doplačilo odkupa posledic 1. škode.</p>
              <p className="text-gray-800 font-normal leading-7 mb-3">6. Paketni popust se obračuna na vsa avtomobilska zavarovanja.</p>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">KASKO KARAMBOL</h3>
              <p className="text-gray-800 font-normal leading-7">Kasko karambol je namenjen sklepanju kasko zavarovanj za osebna vozila, ki so stara šest ali več let in v osnovi nudi kritje v primeru prometne nesreče.</p>
              <p className="text-gray-800 font-normal leading-7">Pripravili smo kasko zavarovanje, ki je bistveno cenejše, a kljub vsemu nudi kritja za pomembne nevarnosti. Zavarovanje Kasko karambol je namenjeno sklepanju kasko zavarovanj za osebna vozila, ki so stara šest let ali več, pri čemer novonabavna vrednost vozila na dan sklepanja zavarovanja ne presega 40.000 EUR.</p>
              <p className="text-gray-800 font-normal leading-7">Če je zavarovanje sklenjeno za financirano vozilo (leasing), zavarovanje Kasko karambol ni možno.</p>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4 mb-6">
            <li>
              <h3 className="font-semibold text-xl mb-2">AVTOMOBILSKA ASISTENCA</h3>
              <p className="text-gray-800 font-normal leading-7">24-urna pomoč na cesti v Sloveniji in večini držav Evrope.</p>
              <p className="text-gray-800 font-normal leading-7">Avtomobilska asistenca vam zagotavlja 24-urno pomoč v Sloveniji in v večini evropskih držav. Če imate z vozilom težave na cesti ali doma, pokličite Asistenčni center Zavarovalnice Triglav na 080 2864 ali +386 2222 2864 in pooblaščeni izvajalci asistenčnih storitev vam bodo pomagali v najkrajšem možnem času.</p>
            </li>
          </ul>
          <ul className="w-full lg:w-3/4">
            <li>
              <h3 className="font-semibold text-xl mb-2">PRAVNA ZAŠČITA</h3>
              <p className="text-gray-800 font-normal leading-7">Zavarovanje krije stroške, ki nastanejo v pravnih postopkih kot posledica prometne nesreče.</p>
              <p className="text-gray-800 font-normal leading-7">Pravna pomoč pride prav v primerih, ko boste zaradi prometne nesreče potrebovali mnenje in zastopanje pravnih strokovnjakov. Že za nekaj evrov letne premije vam bomo povrnili stroške, ki bodo pri tem nastali.</p>
              <p className="text-gray-800 font-normal leading-7">Zavarovanje krije vse potrebne stroške zastopanja v kazenskih postopkih in postopkih pred sodnikom za prekrške. Krije tudi vse potrebne stroške uveljavljanja odškodninskih zahtevkov za škodo v zvezi s prometno nesrečo ter potrebne stroške obrambe pred odškodninskimi zahtevki drugih oseb. Poleg sklenitelja zavarovanja in lastnika vozila so zavarovalne zaščite deležni tudi voznik in potniki v zavarovanem vozilu.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
