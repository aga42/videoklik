"use client"

import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../utils/motion';
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import { signIn, useSession, getProviders } from 'next-auth/react'

const Plan = () => {

  const cookiesUserId = Cookies.get('user_id');
  const cookiesName = Cookies.get('name');
  const firstLastName = cookiesName?.split(' ');
  const cookiesEmail = Cookies.get('email');

  const [freeDesc, setFreeDesc] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const [indexPackageChoosen, setIndexPackageChoosen] = useState(0)

  const [isDisable, setIsDisable] = useState(false)

  // const plans = [
  //     {
  //         name: "Free",
  //         desc: "Package plan to start using videoklik and get used to",
  //         price: 0,
  //         amount: 0,
  //         isMostPop: false,
  //         features: [
  //             "2 credits",
  //             "Ads",
  //             "720p"
  //         ],
  //     },
  //     {
  //         name: "Pro",
  //         desc: "Pro package that offer productivity and better result",
  //         price: 17,
  //         amount: 17000,
  //         isMostPop: false,
  //         features: [
  //             "10 credits",
  //             "No Ads",
  //             "1080p, 4K"
  //         ],
  //     },
  //     {
  //         name: "Pro (58% OFF)",
  //         desc: "Pro package at a discount and maximum render time",
  //         price: 99,
  //         amount: 99000,
  //         isMostPop: true,
  //         features: [
  //             "100 credits",
  //             "No Ads",
  //             "1080p, 4K"
  //         ],
  //     },
  // ]

  var body: any = {}

  const generateOrderId = async (e: any, amount: number, packageName: string) => {

    try {

      const response = await fetch(`/api/transaction/orderid/${packageName}`)
      const data = await response.json()

      body = {
        "transaction_details": {
          "order_id": data,
          "gross_amount": amount
        },
        "credit_card": {
          "secure": true
        },
        "customer_details": {
          "first_name": firstLastName?.[0],
          "last_name": firstLastName?.[1],
          "email": cookiesEmail,
          "phone": ""
        }
      }

      createTransaction(e, packageName)

    } catch (error) {
      console.log(error)
    }

  }

  const createTransaction = async (e: any, packageName: string) => {
    e.preventDefault();

    const transactionTime = new Date()

    try {
      const response = await fetch("/api/transaction", {
        method: "POST",
        body: JSON.stringify({
          order_id: body.transaction_details.order_id,
          user_id: cookiesUserId,
          email: cookiesEmail,
          name: cookiesName,
          transaction_status: 'pending',
          fraud_status: 'accept',
          transaction_time: transactionTime.toISOString(),
          payment_type: 'undefined',
          gross_amount: body.transaction_details.gross_amount,
          currency: 'IDR',
          package_name: packageName
        })

      })

      // console.log(response)

      if (response.ok) {
        //open new tab
        fetchPayment()
      }

    } catch (error) {
      console.log('error gaes')
    } finally {
      
    }
  }

  const fetchPayment = async () => {
    await fetch("/api/payment", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': process.env.NEXT_PUBLIC_MIDTRANS_AUTH!
      },
      body: JSON.stringify(body)
    }).then(res => res.json()).then(res => {
      if (res.redirect_url) {

        window.open(res.redirect_url, '_blank')

      } else {
        alert(`Error ${res.error}`);
      }

      setIsSubmit(false)
      setIsDisable(false)

    }).catch((e) => {
      setIsSubmit(false)
      setIsDisable(false)
      alert(e);
    }).finally(() => {
      setIsSubmit(false)
      setIsDisable(false)
    })
  }

  const [plans, setplans] = useState([])

  useEffect(() => {
    const fetchPlans = async () => {

      try {
        const response = await fetch('/api/package')
        const data = await response.json()

        setplans(data)
      } catch (error) {
        console.log(error)
      }

    }

    fetchPlans()
  }, [])

  const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    useEffect(() => {
        const setUpProviders = async () => {
          const response: any = await getProviders();
    
          setProviders(response);
        }
    
        setUpProviders();
      }, [])  

  return (
    <section className='py-14' id="harga">
      <motion.div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div className='relative max-w-xl mx-auto sm:text-center'
          variants={fadeIn('up', 'tween', 0.2, 1.5)}
        >
          <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
            Pricing Plan
          </h3>
          <div className='mt-3 max-w-xl'>
            <p>
              Choose plan which suit your needs.<span className=" text-fuchsia-500 text-base font-bold"> Get Deals Now </span>
            </p>
          </div>
        </motion.div>
        <motion.div className='mt-8 sm:mt-16 justify-center gap-6 flex flex-col-reverse sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'
          variants={fadeIn('up', 'tween', 0.2, 1.5)}
        >
          {
            plans.length === 0 ?
            <div className="text-gray-500 text-base text-center mx-auto">
              Please wait
            </div>
            :
            plans.map((item: any, idx) => (
              <div key={idx} className={`relative flex-1 flex items-stretch flex-col ${idx === 2 ? 'bg-fuchsia-100' : 'bg-gray-50'} rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}>
                {
                                    item.isMostPop ? (
                                        <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-fuchsia-600 text-sm font-semibold">Most popular</span>
                                    ) : ""
                                }
                <div className="p-8 space-y-4 border-b">
                  <span className={idx === 2 ? 'text-fuchsia-600 font-medium' : 'text-gray-500 font-medium'}>
                    {idx === 2 ? `${item.name} (53% OFF)` : item.name}
                  </span>
                  <div className='text-gray-800 text-3xl font-semibold'>
                    {idx === 0 ? "FREE" : `Rp. ${item.price}.000`}
                  </div>
                  <p className="my-4">
                    {item.desc}
                  </p>
                  <ul className='py-2 space-y-3'>
                                    {
                                        item.features.map((featureItem: any, idy: any) => (
                                            <li key={idy} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className={idx === 2 ? 'h-5 w-5 text-fuchsia-600' : 'h-5 w-5 text-gray-500'}
                                                    viewBox='0 0 20 20'
                                                    fill={idx === 2 ? '#c026d3' : '#6b7280'}>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                  <motion.button className={idx === 2 ? `px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-fuchsia-600 hover:bg-fuchsia-500 active:bg-fuchsia-500` : `px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-gray-100 hover:bg-gray-50 active:bg-gray-50 border-gray-300 border`}
                    disabled={isDisable}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      idx === 0 ? 
                      
                        (session?.user ? setFreeDesc(true)
                        :
                        providers && Object.values(providers).map((provider: any) => (signIn(provider.id))))  
                    
                      : generateOrderId(e, item.amount, item.name); setIsSubmit(true); setIndexPackageChoosen(idx); setIsDisable(true)
                      }
                    }
                  >
                    {/* COBA SEKARANG<sup className=" text-green-400">*Gratis 7 hari</sup> */}
                    {idx === 2 ? <p>{(isSubmit && indexPackageChoosen === 2) ? "Processing.." : "GET DEALS NOW"}</p> : idx === 1 ? <p className="text-gray-500">{(isSubmit && indexPackageChoosen === 1) ? "Processing.." : "GET STARTED"}</p> : <p className="text-gray-500">GET STARTED</p>}
                  </motion.button>
                  {idx === 0 && freeDesc ?
                    <><p>When you have a videoklik&#39;s account. Free package is added to your account automatically.<a href="/profile" className="text-fuchsia-600"> Check My Profile</a></p></>
                    :
                    <></>
                  }
                </div>
              </div>
            ))
          }
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Plan