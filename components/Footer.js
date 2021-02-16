import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-800 py-4">
            <div className="container flex flex-row">
                <div className="flex flex-col mr-12">
                    <h3 className="font-bold text-lg text-white mb-2">Podatki o podjetju</h3>
                    <div className="flex flex-col mb-4">
                        <span className="text-white text-sm mb-1">PROTEGAT, zavarovalno zastopanje, d.o.o.</span>
                        <span className="text-white text-sm mb-1">Virmaše 221</span>
                        <span className="text-white text-sm">4220 Škofja Loka</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white text-sm mb-1">E-mail: <a href="mailto:info@protegat.si">info@protegat.si</a></span>
                        <span className="text-white text-sm">Telefon: <a href="tel:01/ 292-79-90">01/ 292-79-90</a></span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold text-lg text-white mb-2">Partnerji</h3>
                    <div className="flex flex-col">
                        <img src="http://www.protegat.si/img/triglavb.png" className="w-36 mb-2" />
                        <img src="http://www.protegat.si/img/triglav-logo.jpg" className="w-36" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
