import Head from 'next/head'

const content = [
    {
        title: "Vsebina zavarovanja",
        text: [
            "Dopolnilno zdravstveno zavarovanje krije razliko med celotnimi stroški zdravstvenih storitev in stroški teh storitev, ki jih krije obvezno zdravstveno zavarovanje po zakonu, ki ureja obvezna zdravstvena zavarovanja.",
            "Zavarovanje krije razliko za iste storitve in v istem časovnem obdobju, kot jih krije obvezno zdravstveno zavarovanje."
        ]
    },
    {
        title: "Obseg zavarovanja",
        text: [
            "Zavarovanje je brez omejitve zavarovalne vsote. Velja za območje Republike Slovenije.",
            "Skladno z zakonodajo, ki ureja zdravstveno zavarovanje v Republiki Sloveniji in izvedbenimi akti, ki urejajo področje obveznega zdravstvenega zavarovanja, velja zavarovanje tudi v tujini."
        ]
    },
    {
        title: "Čakalna doba",
        text: [
            "Zavarovanje ima čakalno dobo treh mesecev, z izjemo tistih zavarovancev, ki nam bodo predložili potrdilo o tem, da niso bili več kot en mesec nezavarovani.",
        ]
    },
    {
        title: "Zavarovalna premija",
        text: [
        ]
    },
]

export default function ZdravstvenaZavarovanja() {

    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-gray-100 py-28 flex-auto">
                <div className="container">
                    <h2 className="text-green-500 font-semibold text-3xl text-gray-800 mb-4">Dopolnilno zdravstveno zavarovanje</h2>
                    <p className="text-gray-800 font-normal leading-7 mb-3">V okviru skupine Triglav smo posebej za vas pripravili ugodno ponudbo za dopolnilno zdravstveno zavarovanje.</p>
                    {content.map((item, i) => {
                        return (
                            <section key={i} className={i === content.length - 1 ? "w-full md:w-3/4" : "mb-4 w-full md:w-3/4 mb-6"}>
                                <p className="font-bold text-lg text-green-500 leading-8 mb-2">{item.title}</p>
                                {item.text.map((itemText, i) => <p className="text-gray-800 leading-7 mb-2">{itemText}</p>)}
                            </section>
                        )
                    })}
                    <div className="bg-white border border-gray-300 flex flex-row flex-wrap w-full lg:w-1/2">
                        <div className="w-1/2 bg-gray-50 font-bold text-center px-4 py-2 border-b border-r border-gray-300">
                            PREMIJA
                        </div>
                        <div className="w-1/2 bg-gray-50 font-bold text-center px-4 py-2 border-b border-gray-300">
                            PREMIJA (€)
                        </div>
                        <div className="w-1/2 px-4 py-2 border-b border-r border-gray-300">
                            osnovna mesečna premija
                        </div>
                        <div className="w-1/2 px-4 py-2 text-center border-b border-gray-300">
                            35,55
                        </div>
                        <div className="w-1/2 px-4 py-2 border-r border-gray-300">
                            letna premija
                        </div>
                        <div className="w-1/2 px-4 py-2 text-center">
                            426,60
                        </div>
                </div>
            </div>
        </div>
        </div >
    )
}
