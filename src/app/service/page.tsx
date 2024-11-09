import Header from "@/components/Header";
import React from "react";
import "./service.css";

const ServicePage: React.FC = () => {
  return (
    <div className="flex flex-col snap-y">
      <Header className="sticky md:sticky" />
      <section className="flex flex-col py-16 px-8 md:px-16 bg-white">
        <h3 className="text-4xl md:text-5xl font-bold text-center bg-[#722E7B] rounded-3xl py-8 mx-96 text-white mb-10">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 第一行 */}
          <div className="service-card mx-4 py-20 px-20">
            <h1 className="text-2xl font-bold text-center mb-4">Community Access</h1>
            <p className="text-lg text-center">
              Empowering social connections, engaging participants in community activities, and building confidence.
            </p>
          </div>
          <div className="service-card mx-4 py-20 px-20">
            <h1 className="text-2xl font-bold text-center mb-4">Daily Living Support</h1>
            <p className="text-lg text-center">
              Personalized care for daily tasks, meal preparation, and enhancing participant autonomy.
            </p>
          </div>

          {/* 第二行 */}
          <div className="service-card mx-4 py-20 px-20">
            <h1 className="text-2xl font-bold text-center mb-4">Cleaning and Gardening</h1>
            <p className="text-lg text-center">
              Maintaining a safe, comfortable home with professional cleaning and garden upkeep.
            </p>
          </div>
          <div className="service-card mx-4 py-20 px-20">
            <h1 className="text-2xl font-bold text-center mb-4">STA / Respite</h1>
            <p className="text-lg text-center">
              Temporary relief for caregivers, short-term accommodation, and quality care.
            </p>
          </div>

          {/* 第三行 */}
          <div className="service-card mx-4 py-20 px-20">
            <h1 className="text-2xl font-bold text-center mb-4">Drop-in Support</h1>
            <p className="text-lg text-center">Flexible, on-demand assistance with immediate help for various tasks.</p>
          </div>
          <div className="service-card mx-4 py-20 px-20">
            <h1 className="text-2xl font-bold text-center mb-4">SIL Sports</h1>
            <p className="text-lg text-center">
              Promoting independent living with ongoing care tailored to participant needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
