"use client";

import type { NextPage } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Plan from "../../components/Plan";

const Pricing: NextPage = () => {

  return (
    <main className="flex min-h-screen flex-col bg-white">
        <Header></Header>
        <div className="bg-gray-50 ">
        <Plan></Plan>
        </div>
        <Footer></Footer>
    </main>
  );
};

export default Pricing;
