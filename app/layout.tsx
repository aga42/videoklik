import "../styles/global.css";
import { Metadata } from "next";
// import { Suspense } from 'react'
import Provider from "../components/Provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Videoklik",
  description: "Video element generator at your klik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
        <html lang="en">
          <head>
            <link rel="shortcut icon" href="favicon.ico" />
            <meta name="monetag" content="d5d404b079fc8fae3c2c58a8ba005ae6"></meta>
            {/* <script src="https://alwingulla.com/88/tag.min.js" data-zone="88662" async data-cfasync="false"></script> */}
            {/* <script async data-cfasync="false" src="//thubanoa.com/1?z=7894057"></script> */}
          </head>
          <body>
          {/* <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense> */}
          {children}
          <Script
            src="../tawkto.js"
          ></Script>
          </body>
        </html>
    </Provider>
    
  );
}
