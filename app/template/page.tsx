"use client";

import type { NextPage } from "next";
import Header from "../../components/Header";
import ListTemplate from "../../components/ListTemplate";
import Footer from "../../components/Footer";

const Template: NextPage = () => {

  return (
    <main className="flex min-h-screen flex-col bg-white">
        <Header actionLabel="TRY FOR FREE"></Header>
        <div className="bg-gray-50 ">
        <ListTemplate></ListTemplate>
        </div>
        <Footer></Footer>
    </main>
  );
};

export default Template;