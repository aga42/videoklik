"use client";

import type { NextPage } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Faq from "../../components/Faq";

const FaqPage: NextPage = () => {

  return (
    <main className="flex min-h-screen flex-col bg-white">
        <Header actionLabel="TRY FOR FREE"></Header>
        <div className="bg-gray-50 ">
        <Faq></Faq>
        </div>
        <Footer></Footer>
    </main>
  );
};

export default FaqPage;