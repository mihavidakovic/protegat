import Head from 'next/head'
import Link from 'next/link'

const content = [
    {
        title: "Avtomobilska zavarovanja",
        link: "/zavarovanja/premozenjska-zavarovanja/avtomobilska-zavarovanja",
        text: [
            "Odločite se za avtomobilsko zavarovanje, ki vam zagotavlja najboljša kritja, s katerimi boste najbolje zavarovali sebe, sopotnike in vozilo.",
            "Priporočamo vam paketno zavarovanje, ki vam omogoča najugodnejše zavarovanje vozila."
        ]
    },
    {
        title: "Zavarovanje doma",
        link: "/zavarovanja/premozenjska-zavarovanja/zavarovanje-doma",
        text: [
            "Zavedamo se vrednosti vašega premoženja, zato vam ponujamo zavarovanje doma s kakovostnimi zavarovalnimi kritji za praktično vse nevarnosti, ki ogrožajo vaš dom in proti katerim se lahko zavarujete: požar, strela, izliv vode, eksplozija, vihar, toča, poplava, potres, vlom, rop in drugo. Ob tem vam zagotavljamo tudi odlične storitve pri reševanju škod.",
        ]
    },
    {
        title: "Zavarovanje motornih koles",
        link: "/zavarovanja/premozenjska-zavarovanja/zavarovanje-motornih-koles",
        text: [
            "Preverite prenovljeno ponudbo zavarovanj za motorna kolesa."
        ]
    },
    {
        title: "Zavarovanje avtodomov",
        link: "/zavarovanja/premozenjska-zavarovanja/zavarovanje-avtomobilov",
        text: [
            "Število lastnikov avtodomov strmo narašča. Zato smo za vse, ki se na potovanja odpravljate z avtodomi, pripravili vrsto ugodnosti."
        ]
    },
    {
        title: "Zavarovanje koles in kolesarjev",
        link: "/zavarovanja/premozenjska-zavarovanja/zavarovanje-koles",
        text: [
            "Zavarovanje koles in kolesarjev za brezskrbno kolesarjenje."
        ]
    },
    {
        title: "Zavarovanje živali",
        link: "/zavarovanja/premozenjska-zavarovanja/zvarovanje-zivali",
        text: [
            "Hišni ljubljenčki in tudi druge živali imajo za lastnike neprecenljivo vrednost. Zavarujte jih za primer nezgode ali bolezni."
        ]
    },
]

export default function PremzenjskaZavarovanja() {
    
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-28 flex-auto">
        <div className="container">
        <h2 className="font-semibold text-3xl text-gray-800 mb-4">Premozenjska zavarovanja</h2>
            {content.map((item, i) => {
                return (
                    <section key={i} className={i === content.length - 1 ? "w-full md:w-3/4" : "mb-4 w-full md:w-3/4 mb-6"}>
                        <Link href={item.link}>
                            <p className="font-bold text-lg text-red-600 leading-8 mb-2 cursor-pointer">{item.title}</p>
                        </Link>
                        {item.text.map((itemText, i) => <p className="text-gray-800 leading-7 mb-2">{itemText}</p>)}
                    </section>
                )
            })}
        </div>
      </div>
    </div>
  )
}
