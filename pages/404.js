import Head from 'next/head'
import { IoSadOutline } from 'react-icons/io5'
import { useRouter } from 'next/router'

export default function Custom404() {
    const router = useRouter()

  return (
    <>
      <Head>
        <title>Stran ne obstaja - Protegat.si</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8" />
        <meta name="description" content="Podjetje Protegat je ekskluzivna zavarovalno zastopniška družba, ki zastopa vodilno zavarovalnico v Sloveniji Zavarovalnico Triglav d.d. in Triglav, Zdravstveno zavarovalnico d.d." />

        <meta property="og:title" content="Protegat.si" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <div className="h-full bg-gray-100 py-28 flex-auto flex flex-col items-center justify-center">
            <IoSadOutline style={{fontSize: "6rem"}} className="text-gray-300 mb-4" />
            <span className="text-3xl font-black text-gray-800">404</span>
            <span className="text-xl text-gray-500 mb-6">Stran ne obstaja</span>
            <div className="bg-red-600 hover:bg-red-700 font-bold text-white px-12 py-2 border-none outline-none cursor-pointer" onClick={() => router.back()}>Nazaj</div>
        </div>
      </div>
    </>
  )
}
