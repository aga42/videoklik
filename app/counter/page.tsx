"use client";

import type { NextPage } from "next";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ListTemplate from "../../components/ListTemplate";
import Footer from "../../components/Footer";

const Home: NextPage = () => {

  return (
    <main className="flex min-h-screen flex-col bg-white">
        <Header></Header>
        <div className="bg-gray-50 ">
        <Hero></Hero>
        <ListTemplate></ListTemplate>
        </div>
        <Footer></Footer>
    </main>
  );
};

export default Home;
