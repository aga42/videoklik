"use client";

import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ListTemplate from "../components/ListTemplate";
import Footer from "../components/Footer";

const Home: NextPage = () => {

  return (
    <main className="flex min-h-screen flex-col bg-white">
        <Header actionLabel="TRY FOR FREE"></Header>
        <div className="bg-gray-50 ">
        <Hero></Hero>
        <ListTemplate isLandingPage={true}></ListTemplate>
        <div className="flex w-full">
        <a href="/template" className="text-lg sm:text-xl text-gray-500 text-center mx-auto mb-32">Browse all template</a>
        </div>
        
        </div>
        <Footer></Footer>
    </main>
  );
};

export default Home;