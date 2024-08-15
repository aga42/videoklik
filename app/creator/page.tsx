"use client";

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';
import FooterSosmed from '../../components/FooterSosmed';
import Header from '../../components/Header';

const Creator = () => {
    const searchParams = useSearchParams()
    const indexString = searchParams.get('index') ?? "0"
    var index = parseInt(indexString)
    if(index > 1 || index < 0){
        index = 0
    }

    const pilihanIndexBahasa = [0, 1]
    const [indexBahasa, setIndexBahasa] = useState(pilihanIndexBahasa[index])

    const showDesc = () => {
        if(indexBahasa == 0){
            return (
                <p className=' text-justify text-base text-gray-500 items-center mt-10 md:mx-64 lg:mx-96 mx-10 justify-center mb-20'>Hi, gw Aga Ariesta (32 tahun). Di beberapa konten video gw yang membahas finansial, sering banget membutuhkan elemen animasi uang dengan range tertentu. Nah karena sudah berulang kali membutuhkan elemen tersebut dan pembuatannya di aplikasi video editing memakan waktu. Akhirnya gw memutuskan untuk membuat website <b>Videoklik</b> sebagai online tools generator video animasi tersebut. Dan jika kedepannya gw mengalami kesulitan-kesulitan lainnya atau bahkan jika kamu punya kesulitan atau kebutuhan supaya proses pembuatan konten video jadi lebih mudah. Bisa banget untuk memberikan gw saran dan masukan untuk dijadikan fitur <b>Videoklik</b> berikutnya</p>
            )
        }else {
            return (
                <p className=' text-justify text-base text-gray-500 items-center mt-10 md:mx-64 lg:mx-96 mx-10 justify-center mb-20'>Hi, I&#39;m Aga Ariesta 32 yo. Most of the time in my video content production hobbies. I need several animation element like value counter animation etc. And because to produce that animation in video editor seems wasting time. I create this website called <b>Videoklik</b> to generate value counter animation element. If you have same difficulties, please don&#39;t hestitate to use this website and give me next ideas about what kind of feature that need to develop in this project.</p>
            )
        }
    }

    return (
        <div>
            
                <div className="flex min-h-screen flex-col bg-white">
                    {/* <Suspense fallback={<div>Loading...</div>}> */}
                        <Header index={indexBahasa} actionIndex={(index: number)=>{
                            setIndexBahasa(index)
                        }}/>
                    {/* </Suspense> */}
                    <div className=' content-center justify-center self-center mt-28 '>
                        <Image src="/images/img_aga.png" width={200} height={200} alt="Picture of creator" className='rounded-full'/>
                    </div>
                    <FooterSosmed/>
                    {showDesc()}
                </div>
        </div>
    )

}

export default Creator