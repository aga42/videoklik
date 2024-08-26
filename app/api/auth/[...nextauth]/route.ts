import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from 'next/headers'
import User from "../../../../models/user";
import { connectToDB } from "../../../../utils/database";

const handler = NextAuth({
    
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_GOOGLE_PROVIDER_CLIENT_ID!,
            clientSecret: process.env.NEXT_GOOGLE_PROVIDER_CLIENT_SECRET!,
        })
    ],
    secret:'NextAuthSecret',
    callbacks: {
        // async redirect({ url, baseUrl }) {
        //     console.log(url)
        //     return url
        //   },
        async session({ session }) {

            if (session.user !== undefined) {
                const sessionUser = await User.findOne({
                    email: session.user.email
                })

                session.user.id = sessionUser._id.toString()

                cookies().set('user_id', session.user.id)
                cookies().set('name', session.user.name ?? '')
                cookies().set('email', session.user.email ?? '')
                
            }

            return session;
        },
        async signIn({ account, profile, user, credentials }) {
            //serverless -> lambda
            try {
                await connectToDB();

                if (profile !== undefined) {
                    //check if user already exist
                    const isUserExist = await User.findOne({ email: profile.email });

                    //if not create new user
                    if (!isUserExist) {

                        if(profile.name !== undefined && profile.image !== undefined){
                            await User.create({
                                email: profile.email,
                                username: profile.name.replace(" ", "").toLowerCase(),
                                name: profile.name,
                                image_profile: profile.image ?? 'https://utfs.io/f/0d646031-4285-47e4-9721-8ccd0d5198f9_default-profile.png',
                                phone_number: "",
                                latest_purchase: "",
                                date_join: "",
                                is_pro_member: false,
                                credits: 2
                            })
                        }else{

                            const dateNow = new Date()
                            const joinDate = `${dateNow.getFullYear()}-${dateNow.getMonth()}-${dateNow.getDate()}`

                            await User.create({
                                email: profile.email,
                                username: profile.name?.replace(" ", "").toLowerCase(),
                                name: profile.name,
                                image_profile: profile.image ?? 'https://utfs.io/f/0d646031-4285-47e4-9721-8ccd0d5198f9_default-profile.png',
                                phone_number: "",
                                latest_purchase: "",
                                date_join: joinDate,
                                is_pro_member: false,
                                credits: 2
                            })
                        }
                        
                    }
                }

                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
})

export { handler as GET, handler as POST }