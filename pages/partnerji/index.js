import Head from 'next/head'

export default function Partnerji() {
    
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-28 flex-auto">
        <div className="container">
            <h2 className="font-semibold text-3xl text-gray-800 mb-4">Partnerji</h2>
            <div className="w-full md:w-1/3 mx-auto flex flex-col mb-4">
              <img src="/img/triglavc.png" />
              <img src="/img/tzzl.jpg" />
            </div>
            <p className="text-gray-800 font-normal leading-7 mb-2">Obvladujoča družba Skupine Triglav je Zavarovalnica Triglav, d.d., s sedežem v Ljubljani. Z znanjem, izkušnjami in finančno močjo že 115 let skrbi za vedno nove generacije zavarovancev in njihovo premoženje.</p>
        </div>
      </div>
    </div>
  )
}
