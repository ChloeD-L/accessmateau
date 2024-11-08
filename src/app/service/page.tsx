import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const ServicePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full snap-y">
      <Header className="sticky md:sticky" />
      <div className="container mx-auto pt-30">
        <div className="min-h-screen w-full flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-bold">SIL and Service</h1>
          <p className="mt-4 text-lg">Serivce page</p>
        </div>
      </div>
      <section className="snap-end">
        <Footer />
      </section>
    </div>
  );
};

export default ServicePage;
