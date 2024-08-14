import "../styles/global.css";
import { Metadata } from "next";
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: "Videoklik",
  description: "Tinggal klak - klik jadi video",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" />
        <meta name="monetag" content="d5d404b079fc8fae3c2c58a8ba005ae6"></meta>
        {/* <script src="https://alwingulla.com/88/tag.min.js" data-zone="88662" async data-cfasync="false"></script> */}
        <script src="https://atshroomisha.com/act/files/tag.min.js?z=7892610" data-cfasync="false" async></script>
      </head>
      <body>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
        
      </body>
    </html>
  );
}
