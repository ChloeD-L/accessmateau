import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { ImgSlider } from "@/components/img-slider/ImgSlider";
import React from "react";
import "./services.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HosingPage: React.FC = () => {
  return (
    <div className="flex flex-col snap-y">
      <Header className="sticky md:sticky" />
      <section className="snap-center service-background min-h-screen w-full flex flex-col items-center justify-center bg-[url('/2.jpg')]">
        <div className="  rounded-lg shadow-lg relative grid z-10 clipped-background ">
          <div className="flex flex-col items-center justify-center content-background ">
            <div className="flex flex-row items-center justify-center">
              {/* <img src="/img/geo-2.png" alt="Irregular Shape" className="w-32 h-32" /> */}
              <h1
                className="service-content text-4xl md:text-6xl font-bold tracking-wide text-gray-800 "
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
              >
                <span className=""> SIL and </span>Service
              </h1>
            </div>

            <p
              className="service-content mx-4 md:mx-24 text-xl font-normal text-center leading-relaxed text-gray-800 "
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}
            >
              Our SIL and respite services are designed to help individuals with disabilities develop their skills and
              capabilities while maintaining their independence, and participate in community life to the fullest extent
              possible.
            </p>
          </div>
        </div>
      </section>

      <section className="snap-center h-screen flex flex-col items-center md:gap-8 pt-16">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold tracking-wide text-center text-gray-800 pb-4">Check this out</h1>
          <hr className="border-t-4 border-[#722E7B] w-[250px] mx-auto  " />
        </div>

        <div id="" className="w-[90%] h-[75%] px-8 flex flex-col rounded-3xl  py-8">
          <Tabs defaultValue="hosting1" className="w-full h-full">
            <TabsList>
              <TabsTrigger value="hosting1" className="text-[#722E7B]">
                Hosting 1
              </TabsTrigger>
              <TabsTrigger value="hosting2" className="text-[#722E7B]">
                Hosting 2
              </TabsTrigger>
            </TabsList>
            <TabsContent value="hosting1" className="w-full h-full text-[#722E7B]">
              <ImgSlider houseId={1} />
            </TabsContent>
            <TabsContent value="hosting2" className="w-full h-full text-[#722E7B]">
              <ImgSlider houseId={2} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="h-screen relative">
        <div className="background-layer"></div>

        <div className="div-1"></div>
        <div className="div-2"></div>
        <div className="div-3"></div>
        <div className="absolute w-full h-full flex flex-col items-center justify-center  gap-4 md:gap-8 pt-20 pd-8 z-10">
          <h1 className="text-6xl font-bold text-center text-gray-800 pb-8">We support your day-to-day needs</h1>
          <div className="grid grid-flow-col md:grid-cols-12 gap-4 h-[60%]">
            <div className="col-span-1" />
            <div className="col-span-4 flex justify-center items-center px-8">
              <img src="/img/44.png" className="max-w-full max-h-full object-center object-contain" />
            </div>
            <div className="col-span-6 flex flex-col space-y-6 justify-center pl-10 pr-16 border border-gray-600 rounded-3xl bg-white">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Access Mate Australia</h3>

              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                We help you with tasks at home to boost your independence. Here’s what we offer:
              </p>

              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔️</span>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Professional cleaning and gardening
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔️</span>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Basic household tasks including cooking, laundry, and general cleaning
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✔️</span>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Finance management support, daily routine development, and capacity building support
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-span-1" />
          </div>
        </div>
      </section>

      {/* <div className="main-container">
        <div className="div-1"></div>
        <div className="div-2"></div>
        <div className="div-3"></div>
        <div className="background-content">
          <h1>We Support Your Day-To-Day Needs</h1>
        </div>
      </div> */}

      <section className="snap-end">
        <Footer />
      </section>
    </div>
  );
};

export default HosingPage;
