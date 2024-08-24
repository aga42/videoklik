"use client";

import { useState, useEffect } from 'react'
import { HeaderProps } from '../types';
import { signIn, useSession, getProviders } from 'next-auth/react'

const Header = ({ actionLabel }: HeaderProps) => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    useEffect(() => {
        const setUpProviders = async () => {
          const response: any = await getProviders();
    
          setProviders(response);
        }
    
        setUpProviders();
      }, [])

    const labelTemplate = "Template"
    const labelAsset = "Assets"
    const labelPricelist = "Pricing"
    const labelTentang = "About Creator"

    const [state, setState] = useState(false)

    const navigation = [
        { title: labelTemplate, path: "/template" },
        { title: labelAsset, path: "https://bit.ly/asset-video-aga" },
        { title: labelPricelist, path: "/pricing" },
        { title: labelTentang, path: "/creator?index=1" }
    ]

    const checkSoon = (title: String) => {
        if(title == "Assets"){
            return <p className=' text-fuchsia-500 text-xs ml-1'>Free</p>
        }else{
            return <></>
        }
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
                        <li className="order-2 pb-5 md:pb-0">
                            <div className="flex items-center justify-center mt-6">
                                {session?.user ? 
                                    <a
                                        className="flex items-center whitespace-nowrap rounded border border-gray-200 bg-gray-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-gray-500 shadow-primary-3 transition duration-150 ease-in-out hover:bg-gray-100 hover:shadow-primary-2 focus:bg-gray-100 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-gray-100 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                        href='/profile'
                                        >
                                        My Profile
                                    </a>
                                    :
                                    <>
                                    {providers && Object.values(providers).map((provider: any) => (
                                        // <button
                                        //     className="flex items-center whitespace-nowrap rounded bg-fuchsia-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-fuchsia-700 hover:shadow-primary-2 focus:bg-fuchsia-700 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-fuchsia-700 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                        //     type="button"
                                        //     key={provider.name}
                                        //     onClick={() => signIn(provider.id)}
                                        //     >
                                        //     {actionLabel}
                                        // </button>
                                        <a
                                            className="flex items-center cursor-pointer whitespace-nowrap rounded border border-gray-200 bg-gray-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-gray-500 shadow-primary-3 transition duration-150 ease-in-out hover:bg-gray-100 hover:shadow-primary-2 focus:bg-gray-100 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-gray-100 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                            key={provider.name}
                                            onClick={() => signIn(provider.id)}
                                            >
                                            Sign in
                                        </a>
                                            ))}
                                    </>
                                }
                            </div>
                        </li>
                        <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => (
                                    <li className="text-gray-500 hover:text-fuchsia-600 flex text-base sm:text-2xl" key={idx}>
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