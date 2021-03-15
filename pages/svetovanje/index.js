import Head from 'next/head'

export default function Svetovanje() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-28 flex-auto">
        <div className="container">
          <h2 className="font-semibold text-3xl text-gray-800 mb-4">Svetovanje</h2>
          <p className="text-gray-800 font-normal leading-7 mb-2">V kolikor želite dobiti optimalno rešitev na področju OSEBNIH ali PREMOŽENJSKIH ZAVAROVANJ nam posredujte vaše podatke in v najkrajšem možnem roku vas bomo kontaktirali.</p>
          <p className="text-gray-800 font-normal leading-7 mb-2">Vnesite naslednje podatke:</p>
          <form action="https://formspree.io/f/xvovedal" method="POST" className="w-full md:w-1/3">
            <div className="flex flex-col mb-3">
              <label htmlFor="ime" className="font-bold mb-2">Ime:</label>
              <input type="text" name="ime" id="ime" className="bg-white px-3 py-2 border border-gray-300 focus:border-gray-400 outline-none" />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="priimek" className="font-bold mb-2">Priimek:</label>
              <input type="text" name="priimek" id="priimek" className="bg-white px-3 py-2 border border-gray-300 focus:border-gray-400 outline-none" />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="naslov" className="font-bold mb-2">Naslov:</label>
              <input type="text" name="priimek" id="naslov" className="bg-white px-3 py-2 border border-gray-300 focus:border-gray-400 outline-none" />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="posta" className="font-bold mb-2">Pošte:</label>
              <input type="text" name="posta" id="posta" className="bg-white px-3 py-2 border border-gray-300 focus:border-gray-400 outline-none" />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="tel" className="font-bold mb-2">Telefon ali GSM:</label>
              <input type="tel" name="tel" id="tel" className="bg-white px-3 py-2 border border-gray-300 focus:border-gray-400 outline-none" />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="email" className="font-bold mb-2">Vaš elektronski naslov:</label>
              <input type="text" name="email" id="email" className="bg-white px-3 py-2 border border-gray-300 focus:border-gray-400 outline-none" />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="zadeva" className="font-bold mb-2">Zadeva:</label>
              <input type="text" name="zadeva" id="zadeva" className="bg-white px-3 py-2 border border-gray-300 focus:border-gray-400 outline-none" />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="sporocilo" className="font-bold mb-2">Sporočilo:</label>
              <textarea rows="5" name="sporocilo" id="sporocilo" className="bg-white px-3 py-2 border border-gray-300 focus:border-gray-400 outline-none" />
            </div>
            <button type="submit" className="bg-red-600 hover:bg-red-700 font-bold text-white px-12 py-2 border-none outline-none cursor-pointer">Pošlji</button>
          </form>
        </div>
      </div>
    </div>
  )
}
