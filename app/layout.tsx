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
      </head>
      <body>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
        
      </body>
    </html>
  );
}
