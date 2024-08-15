"use client";

import { useState } from 'react'
import { HeaderProps } from '../types';

const Header = ({index, actionIndex}: HeaderProps) => {

    //Bahasa part
    // const pilihanBahasa = ["Bahasa Indonesia", "English Language"]
    // const [bahasa, setBahasa] = useState(pilihanBahasa[index])

    const labelAsset = ["Assets Editing", "Assets Editing"]
    const labelTentang = ["Tentang Pengembang", "About Creator"]

    // const labelSegera = ["segera", "soon"]

    // const pilihanIndexBahasa = [0, 1]
    // const [indexBahasa, setIndexBahasa] = useState(index)
    //End of Bahasa part

    const [state, setState] = useState(false)

    const navigation = [
        // { title: labelAsset[indexBahasa], path: "https://bit.ly/asset-video-aga" },
        // { title: labelTentang[indexBahasa], path: "/creator?index="+indexBahasa }
        { title: labelAsset[index], path: "https://bit.ly/asset-video-aga" },
        { title: labelTentang[index], path: "/creator?index="+index }
    ]

    const checkSoon = (title: String) => {
        // if(title == labelAsset[indexBahasa] || title == "Hadist"){
        //     return <p className=' text-indigo-600 text-xs ml-1'>{labelSegera[indexBahasa]}</p>
        // }else{
        //     return <></>
        // }
        return <></>
    }

    return (
        <header>
                <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6 bg-white pb-5">
                    <div className="flex justify-between">
                        <a href="/">
                            <img
                                src="/images/logo-videoklik.png" 
                                width={180} 
                                height={50}
                                alt="Videoklik logo"
                            />
                        </a>
                        <button className="text-gray-500 outline-none md:hidden"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                    <ul className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${state ? '' : 'hidden'}`}>
                        {/* <li className="order-2 pb-5 md:pb-0">
                            <div className="flex items-center justify-center mt-6" data-twe-dropdown-ref>
                                <button
                                    className="flex items-center whitespace-nowrap rounded bg-fuchsia-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-fuchsia-700 hover:shadow-primary-2 focus:bg-fuchsia-700 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-fuchsia-700 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                    type="button"
                                    id="dropdownMenuLargeButton"
                                    data-twe-dropdown-toggle-ref
                                    aria-expanded="false"
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light">
                                    {bahasa}
                                    <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                    </svg>
                                    </span>
                                </button>
                                <ul
                                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                                    aria-labelledby="dropdownMenuLargeButton"
                                    data-twe-dropdown-menu-ref>
                                        {pilihanBahasa.map((data: any, idx) =>
                                            <li key={idx}>
                                            <a
                                                className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                                href="#"
                                                data-twe-dropdown-item-ref
                                                onClick={() => {
                                                    if(data == pilihanBahasa[0]){
                                                        setIndexBahasa(pilihanIndexBahasa[0])
                                                        actionIndex(0)
                                                    }else{
                                                        setIndexBahasa(pilihanIndexBahasa[1])
                                                        actionIndex(1)
                                                    }
                                                    setBahasa(data)
                                                }}
                                                >{data}</a
                                            >
                                            </li>
                                        )}
                                </ul>
                            </div>
                        </li> */}
                        <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => (
                                    <li className="text-gray-500 hover:text-fuchsia-600 flex" key={idx}>
                                        <a href={item.path} target="_blank">{item.title}</a>
                                        {checkSoon(item.title)}
                                    </li>
                                ))
                            }
                        </div>
                    </ul>
                </nav>
            </header>
    )

}

export default Header