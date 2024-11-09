import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { ImgSlider } from "@/components/img-slider/ImgSlider";
import React from "react";
import "./services.css";

const ServicePage: React.FC = () => {
  return (
    <div className="flex flex-col snap-y">
      <Header className="sticky md:sticky" />
      <section className="snap-center service-background min-h-screen w-full flex flex-col items-center justify-center bg-[url('/2.jpg')]">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h1 className="service-content text-6xl font-bold font-mono tracking-wide text-center text-gray-800 ">
            SIL and Service
          </h1>
          <p className="service-content mt-4 mx-24 text-xl font-normal text-center leading-relaxed text-gray-800">
            Our SIL and respite services are designed to help individuals with disabilities develop their skills and
            capabilities while maintaining their independence, and participate in community life to the fullest extent
            possible. 
          </p>
        </div>
      </section>

      <section className="snap-center h-screen flex flex-col  items-center  gap-4 md:gap-8 pt-20 border border-red-500 pd-8">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold tracking-wide text-center text-gray-800 pb-4">Check this out</h1>
          <hr className="border-t-4 border-customSecondary w-[250px] mx-auto mb-10 " />
        </div>

        <div id="" className="w-[90%] h-[70%] px-8 ">
          <ImgSlider />
        </div>
      </section>

      <section className="snap-center h-screen flex flex-col items-center gap-10 md:gap-8 pt-20 border border-red-500 pd-8">
        <h1 className="text-6xl font-bold text-center text-gray-800 ">We support your day-to-day needs</h1>
        <div className="grid grid-flow-col md:grid-cols-12 gap-4">
          <div className="col-span-1" />
          <div className="col-span-4 flex justify-center items-center px-8">
            <img src="/img/support.jpg" className="max-w-full max-h-full object-center object-contain" />
          </div>
          <div className="col-span-6 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 text-center-center">Support</h1>
            <p className="text-xl text-gray-800 text-center">
              Our support services are designed to help individuals with disabilities develop their skills and
              capabilities while maintaining their independence, and participate in community life to the fullest extent
              possible.
            </p>
          </div>
          <div className="col-span-1" />
        </div>
      </section>

      <section className="snap-end">
        <Footer />
      </section>
    </div>
  );
};

export default ServicePage;
