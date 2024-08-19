"use client"

import { useRef, useState } from "react"
import { FaqCardProps } from "../types"

const FaqsCard = ({faqsList, idx}: FaqCardProps) => {

    const answerElRef: any = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')

    const handleOpenAnswer = () => {
        const currClh: any = answerElRef.current
        const answerElH = currClh.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                className="duration-300" ref={answerElRef}
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

const Faq = () => {

    const faqsList = [
        {
            q: "Apa itu Otomatis Bisnis?",
            a: "Otomatis Bisnis adalah sebuah layanan yang menyediakan beragam software pendukung untuk memudahkan kegiatan bisnis para Solopreneur."
        },
        {
            q: "Mengapa perlu menggunakan Otomatis Bisnis?",
            a: "Keterbatasan dana adalah masalah utama diawal berjalannya usaha. Dibandingkan dengan merekrut karyawan, berjalan seorang diri di awal merupakan pilihan yang paling logis. Otomatis Bisnis hadir untuk memudahkan masa - masa sulit tersebut."
        },
        {
            q: "Layanan apa saja yang disediakan oleh Otomatis Bisnis?",
            a: "Ada 3 produk berupa software yang disediakan oleh Otomatis Bisnis. 1. Otomatis Untung (Accounting & Finance) 2. Otomatis Laku (Sales) 3. Otomatis Posting (Content Marketing). Saat ini baru Otomatis Posting yang bisa langsung digunakan."
        },
        {
            q: "Bagaimana cara menggunakan produk dari Otomatis Bisnis?",
            a: "Silahkan login atau mendaftar menggunakan Gmail dengan mengklik tombol Daftar yang disediakan. Jika kamu pengguna baru, maka akan otomatis memilih paket Basic dan bisa menggunakan Otomatis Posting Gratis selama 7 hari."
        },
        {
            q: "Berapa biaya layanan dari Otomatis Bisnis?",
            a: "Kamu bisa mencoba menggunakan layanan Otomatis Bisnis Gratis selama 7 hari, sebelum membayar biaya layanan dimulai dari Rp.59000 per bulannya"
        },
        {
            q: "Bagaimana cara berhenti berlangganan?",
            a: "Jika periode berlangganan kamu sudah habis atau expired, kamu bisa memilih untuk melanjutkannya dengan membayarkan biaya layanan ataupun tidak."
        },
        {
            q: "Apa sebenarnya kegunaan Otomatis Posting?",
            a: "Content Marketing merupakan salah satu cara untuk mendatangkan traffic dan penjualan. Namun membuat konten setiap hari tentunya tidak mudah, diperlukan konsistensi yang menguras pikiran dan waktu. Tapi tenang, sekarang dengan Otomatis Posting kamu bisa membuat konten Instagram Post hanya dengan satu kali klik. Coba Gratis selama 7 hari Sekarang juga."
        },
        {
            q: "Punya pertanyaan lainnya?",
            a: "Silahkan chat via Whatsapp dengan meng-klik tombol dibawah. "
        }
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-20 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            key={idx}
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Faq