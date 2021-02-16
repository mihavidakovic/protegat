import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';

const pages = [
    {
        name: "Domov",
        link: "/",
    },
    {
        name: "Zavarovanja",
        link: "#",
        subpages: [
            {
                name: "Osebna zavarovanja",
                link: "/zavarovanja/osebna-zavarovanja"
            },
            {
                name: "Premoženjska zavarovanja",
                link: "/zavarovanja/premozenjska-zavarovanja"
            },
            {
                name: "Zdravstvena zavarovanja",
                link: "/zavarovanja/zdravstvena-zavarovanja"
            },
        ]
    },
    {
        name: "O podjetju",
        link: "/o-podjetju",
    },
    {
        name: "Partnerji",
        link: "/partnerji",
    },
    {
        name: "Zaposlitev",
        link: "/zaposlitev",
    },
    {
        name: "Svetovanje",
        link: "/svetovanje",
    },
    {
        name: "Kontakt",
        link: "/kontakt",
    },
    {
        name: "Odjava podatkov",
        link: "/odjava-podatkov",
    },
]


export default function Header() {

    const [MenuOpened, setMenuOpened] = useState(false)

    const router = useRouter();

    return (
        <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 py-2 lg:py-4">
            <div className="container flex flex-col lg:flex-row justify-between lg:items-center">
                <div className="absolute top-0 right-0 p-4 z-20" onClick={() => setMenuOpened(!MenuOpened)}>
                   {MenuOpened ? <IoCloseOutline className="w-12 h-12" /> : <IoMenuOutline className="w-12 h-12" />}
                </div>
                <Link href="/">
                    <img src="/img/logo.png" title="Protegat.si" className="w-56 relative z-20" />
                </Link>
                <div className={MenuOpened ? "transform translate-x-0 fixed top-0 left-0 w-full h-full bg-white flex flex-col pt-24 z-10 transition" : "transform -translate-x-full fixed top-0 left-0 w-full h-full bg-white flex flex-col pt-24 z-10 transition"}>
                    {pages.map((item, i) => {
                            console.log(router.pathname.includes("/zavarovanja"))
                            return (
                                <Link href={item.link} key={i}>
                                    <div className="group relative px-4 py-3 cursor-pointer" onClick={() => setMenuOpened(!MenuOpened)}>
                                        <span className={ router.pathname === item.link ? "text-gray-900 text-xl transition" : "text-gray-500 group-hover:text-gray-900 text-xl transition"}>{item.name}</span>
                                        <div className={(router.pathname === item.link) ? "absolute left-4 bottom-1 w-7 h-0.5 bg-red-600 rounded-full transition-all" : "absolute left-4 bottom-1 w-0 h-0.5 bg-red-600 rounded-full transition-all"}></div>
                                        <div className={ item.subpages ? "transform translate-y-full absolute bottom-0 left-0 bg-white hidden group-hover:flex flex-col p-2 shadow" : "hidden"}>
                                            {item.subpages && item.subpages.map((item, i) => {
                                                return (
                                                    <Link href={item.link} key={i}>
                                                        <div className="group relative px-4 py-2 cursor-pointer  whitespace-nowrap">
                                                            <span className={ router.pathname === item.link ? "text-gray-900 transition" : "text-gray-500 group-hover:text-gray-900 transition"}>{item.name}</span>
                                                        </div>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>

                                </Link>
                            )
                        })}
                </div>
                <div className="lg:flex flex-row hidden">
                    {pages.map((item, i) => {
                        return (
                            <Link href={item.link} key={i}>
                                <div className="group relative px-4 py-2 cursor-pointer">
                                    <span className={ router.pathname === item.link ? "text-gray-900 transition" : "text-gray-500 group-hover:text-gray-900 transition"}>{item.name}</span>
                                    <div className={(router.pathname === item.link) ? "absolute w-1/2 h-0.5 bg-red-600 rounded-full transition-all" : "absolute w-0 h-0.5 bg-red-600 rounded-full transition-all"}></div>
                                    <div className={ item.subpages ? "transform translate-y-full absolute bottom-0 left-0 bg-white hidden group-hover:flex flex-col p-2 shadow" : "hidden"}>
                                        {item.subpages && item.subpages.map((item, i) => {
                                            return (
                                                <Link href={item.link} key={i}>
                                                    <div className="group relative px-4 py-2 cursor-pointer  whitespace-nowrap">
                                                        <span className={ router.pathname === item.link ? "text-gray-900 transition" : "text-gray-500 group-hover:text-gray-900 transition"}>{item.name}</span>
                                                    </div>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>

                            </Link>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}
