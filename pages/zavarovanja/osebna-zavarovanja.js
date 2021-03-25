import Head from 'next/head'

const content = [
    {
        title: "Življenjsko zavarovanje za primer smrti (ŽZS)",
        text: [
            "Življenjsko zavarovanje za primer smrti zagotavlja izplačilo dogovorjene zavarovalne vsote v primeru smrti zavarovane osebe med trajanjem zavarovanja.",
            "Zavarovanje ne vsebuje varčevalne komponente, zato je cenovno zelo ugodno. Priključite mu lahko tudi različna dodatna zavarovanja in s tem še povečate finančno varnost sebi in bližjim."
        ]
    },
    {
        title: "Naložbeno življenjsko zavarovanje Fleks (NŽZ Fleks)",
        text: [
            "Naložbeno življenjsko zavarovanje Fleks je dolgoročno zavarovanje, pri katerem vam ni treba vnaprej opredeliti njegovega trajanja.",
            "Namenjeno je osebam, ki se želijo zavarovati, obročno varčevati in dodatno investirati v sklade iz ponudbe Zavarovalnice Triglav, d.d. Višina zavarovalne vsote za primer smrti je zajamčena, izplačilo ob odkupu zavarovanja oziroma ob zahtevi za izplačilo celotne vrednosti premoženja na naložbenem računu pa je vezano na gibanje vrednosti enot premoženja izbranih skladov."
        ]
    },
    {
        title: "Življenjsko zavarovanje z varčevanjem (ŽZV)",
        text: [
            "Življenjsko zavarovanje z varčevanjem je dolgoročno zavarovanje za primer smrti in hkrati varčevanje.",
            "Namenjeno je osebam, ki želijo finančno zaščititi svoje bližnje in sebe ter hkrati varno varčevati. Ob sklenitvi zavarovanje lahko izbirate med dvemi oblikami kritja (ŽZV), in sicer med zavarovalno vsoto in štipendijo."
        ]
    },
    {
        title: "Naložbeno življenjsko zavarovanje Fleks za starejše",
        text: [
            "Naložbeno življenjsko zavarovanje Fleks za starejše je kombinacija vlaganja v sklade, življenskega zavarovanja in dodatnega nezgodnega zavarovanja.",
            "Fleks za starejše je naložba, ki predstavlja prilagodljivo varčevanje, vezano na gibanje vrednosti enot premoženja skladov, z dostopnimi zavarovalnimi premijami za starejše po 50. letu."
        ]
    },
    {
        title: "Naložbeno življenjsko zavarovanje Fleks za otroke",
        text: [
            "Naložbeno življenjsko zavarovanje Fleks za otroke je dolgoročno zavarovanje in varčevanje v korist otroka.",
            "Odrasle osebe se zavarujejo za primer smrti in varčujejo v skladih iz ponudbe Zavarovalnice Triglav, d.d. Po 26. letu starosti lahko otrok prevzame vlogo zavarovane osebe na polici.."
        ]
    },
    {
        title: "Življenjsko zavarovanje za delovno nezmožnost",
        text: [
            "Življenjsko zavarovanje za delovno nezmožnost je zavarovanje za primer smrti, za primer popolne trajne nezmožnosti za delo ali hujšega stanja kot posledice nezgode ali bolezni.",
            "Zavarovanje je namenjeno pokrivanju stroškov oskrbe in razlike med invalidsko pokojnino in plačo v aktivnem obdobju, v primeru smrti po pokritju najnujnejših stroškov.",
            "Zavarovanje nima varčevalnega dela, zato je cenovno dostopno. Namenjeno je predvsem delovno aktivnemu prebivalstvu."
        ]
    },
]

export default function OsebnaZavarovanja() {

    return (
        <>
            <Head>
                <title>Osebna zavarovanja - Protegat.si</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charset="utf-8" />
                <meta name="description" content="Podjetje Protegat je ekskluzivna zavarovalno zastopniška družba, ki zastopa vodilno zavarovalnico v Sloveniji Zavarovalnico Triglav d.d. in Triglav, Zdravstveno zavarovalnico d.d." />

                <meta property="og:title" content="Protegat.si" />
                <meta property="og:type" content="website" />
            </Head>

            <div className="flex flex-col min-h-screen">
                <div className="bg-gray-100 py-28 flex-auto">
                    <div className="container">
                        <h2 className="font-semibold text-3xl text-gray-800 mb-4">Osebna zavarovanja</h2>
                        {content.map((item, i) => {
                            return (
                                <section key={i} className={i === content.length - 1 ? "w-full md:w-3/4" : "mb-4 w-full md:w-3/4 mb-6"}>
                                    <p className="font-bold text-lg text-red-600 leading-8 mb-2">{item.title}</p>
                                    {item.text.map((itemText, i) => <p className="text-gray-800 leading-7 mb-2" key={i}>{itemText}</p>)}
                                </section>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
