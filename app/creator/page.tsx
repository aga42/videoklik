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
                <p className=' text-justify text-base text-gray-500 items-center mt-10 md:mx-64 lg:mx-96 mx-10 justify-center mb-20'>Hi, gw Aga Ariesta (32 tahun). Di beberapa konten video gw yang membahas finansial, sering banget membutuhkan elemen animasi uang dengan range tertentu. Nah karena sudah berulang kali membutuhkan elemen tersebut dan pembuatannya di aplikasi video editing memakan waktu. Akhirnya gw memutuskan untuk membuat video generator animasi tersebut seperti yang ada di dalam website <b>Videoklik</b> ini. Dan jika kedepannya gw mengalami kesulitan-kesulitan lainnya atau bahkan jika kamu punya kesulitan atau kebutuhan supaya proses pembuatan konten video jadi lebih mudah. Bisa banget untuk memberikan gw saran dan masukan untuk dijadikan fitur <b>Videoklik</b> berikutnya</p>
            )
        }else {
            return (
                <p className=' text-justify text-base text-gray-500 items-center mt-10 md:mx-64 lg:mx-96 mx-10 justify-center mb-20'>Hi, I&#39;m Aga Ariesta 32 yo. When I feel down, mostly it&#39;s because of family, relationship, daily job etc. Sometimes when I scrolling in social media platform, I found some video content about holy quran ayah which is great and suit with my current concerns. It happen just like destiny and honestly it helps me to survive and get my mood back.<br></br><br></br>Unfornately, when I need to see that content again in the future, it&#39;s really difficult to found it again. I&#39;m wasting time to scroll inside favorite menu section. Even I forget where I saved that content whether in Tiktok or IG reels. That&#39;s why I create <b>Jurnalquran</b> that helps me to collect all my favorite holy quran ayah and found it easily when I need to see again. If you feel that difficulties like me, don&#39;t bother to use it too.</p>
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