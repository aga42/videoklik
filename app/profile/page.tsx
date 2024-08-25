"use client";

import type { NextPage } from "next";
import { signOut } from 'next-auth/react'
import Cookies from 'js-cookie'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import SubmitButton from "../../components/SubmitButton";

const Profile: NextPage = () => {

  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  const [email, setemail] = useState("")
  const [username, setusername] = useState("")
  const [name, setname] = useState("")
  // const [imageProfile, setimageProfile] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [credits, setcredits] = useState(0)
  const [isProMember, setisProMember] = useState(false)

  const saveProfile = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(`api/profile/${cookiesUserId}`, {
        method: "PATCH",
        body: JSON.stringify({
          email: email,
          username: username,
          name: name,
          phone_number: phoneNumber,
          credits: credits,
          is_pro_member: isProMember,
        })

      })

      if (response.ok) {
        router.push('/')
      }

    } catch (error) {
      console.log('error gaes')
    } finally {
      setSubmitting(false)
    }
  }

  //GET USER TEMPLATE SETTING
  const cookiesUserId = Cookies.get('user_id');
  useEffect(() => {
    
    const fetchProfile = async () => {

      try {

          console.log(`cookie user id ${cookiesUserId}`)

          const response = await fetch(`api/profile/${cookiesUserId}`)
          const data = await response.json()

          setusername(data.username)
          setemail(data.email)
          setname(data.name)
          // setimageProfile(data.image_profile)
          setphoneNumber(data.phone_number)
          setcredits(data.credits)
          setisProMember(data.is_pro_member)

      } catch (error) {
        console.log(error)
      }

    }

    fetchProfile()
  }, [])
  //END GET USER TEMPLATE SETTING

  return (
    <section className="flex min-h-screen flex-col bg-white">
        <Header actionLabel=""></Header>
        <div className="bg-gray-50 ">
        <div className="flex justify-center mt-20 px-8">
        <form className="max-w-2xl">
          <div className="flex flex-wrap border shadow rounded-lg p-8 bg-fuchsia-50">
            <h2 className="text-xl text-gray-600 pb-6 mx-auto">Account details:</h2>

            <div className="flex flex-col gap-4 w-full border-gray-400">

                <div>
                    <label className="text-gray-600 dark:text-gray-400">Name
                    </label>
                    <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow bg-gray-50 text-gray-500"
                        type="text"
                        value={name}
                        onChange={(e)=>setname(e.currentTarget.value)}/>
                </div>

                <div>
                    <label className="text-gray-600 dark:text-gray-400">Email</label>
                    <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow bg-gray-50 text-gray-500"
                        type="email"
                        value={email}
                        onChange={(e)=>setemail(e.currentTarget.value)}/>
                </div>

                <div>
                    <label className="text-gray-600 dark:text-gray-400">Phone number</label>
                    <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow bg-gray-50 text-gray-500"
                        type="text"
                        placeholder="optional"
                        value={phoneNumber}
                        onChange={(e)=>setphoneNumber(e.currentTarget.value)}/>
                </div>

                <div>
                    <label className="text-gray-600 dark:text-gray-400">Credits Available</label>
                    <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 bg-gray-50 disabled:bg-gray-200 text-gray-500"
                        type="number"
                        disabled={true}
                        value={credits}/>
                </div>

                <div>
                    <label className="text-gray-600 dark:text-gray-400">Type Member</label>
                    <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 bg-gray-50 disabled:bg-gray-200 text-gray-500"
                        type="text"
                        disabled={true}
                        value={ isProMember ? "Pro" : "Free" }/>
                </div>
                
                <div className="flex justify-end">
                    <SubmitButton title="Save Changes"
                      containerStyles={`py-1.5 px-3 m-1 text-center border rounded-md text-white ${submitting ? 'bg-gray-500' : 'bg-fuchsia-600 hover:bg-fuchsia-700'}`}
                      handleClick={saveProfile}
                      submitting={submitting} />
                </div>
            </div>
          </div>
        </form>
        </div>
        </div>
        <div className=" flex py-6 bg-gray-50 justify-center">
          <p>Want to sign in into another videoklik&#39;s account? <a className="text-fuchsia-600 cursor-pointer" onClick={() => {
                          signOut({ callbackUrl: '/' })
                          Cookies.remove('user_id')
                          Cookies.remove('name')
                          Cookies.remove('email')
                      }}>Sign out</a></p>
        </div>
        <Footer></Footer>
    </section>
    
  );
};

export default Profile;