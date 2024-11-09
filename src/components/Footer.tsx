"use CLient";

import React from "react";
// import "../../../public/globals.css";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600  py-10 text-sm md:text-base shadow-footer-custom">
      <div className="container mx-auto flex flex-row sm:items-start iterms-center justify-between lg:px-16 md:gap-0 px-4 md:px-10">
        {/* <img src="/logo.svg" alt="logo" className="hidden w-24 cursor-pointer" />
        <h3 className="text-center text-primary h3 hidden">Why AMA?</h3> */}

        <div className="hidden md:flex items-center lg:gap-32 sm:gap-24">
          <img src="/logo.svg" alt="logo" className="w-24 md:w-32 cursor-pointer" />
        </div>

        <div className="flex flex-col items-center justify-between space-y-10 md:hidden">
          <img src="/logo.svg" alt="logo" className="w-24 cursor-pointer" />
        </div>

        <div className="flex flex-col items-start justify-center gap-5">
          <h3 className="text-center text-customPrimary h3 md:text-xl text-lg">Our Program</h3>
          <p className="text-center  footer">NDIS Daily living support</p>
          <p className="text-center  footer">NDIS Community Access Support</p>
          <p className="text-center footer">Supported Living and respite</p>
        </div>

        <div className="flex flex-col items-start justify-center gap-5">
          <h3 className="text-center text-customPrimary md:text-xl text-lg">Contact Us</h3>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="text-left  footer">Tel: 1300 188 588</p>
            <p className="text-left  footer">Email: info@accessmateau.com</p>
          </div>
          <div className="flex flex-col items-left justify-center gap-2">
            <p className="text-left  footer">Address: Suite 105, 672 Glenferrie Rd</p>
            <p className="text-left  footer">Howthorn VIC 3122</p>
          </div>
        </div>
      </div>
      <p className="py-4 pl-4 md:pl-10 lg:pl-16 text-left text-gray-600">
        Copyright &copy; 2024 Access Mate Autralia - All Rights Reserved.
      </p>
    </footer>
  );
};
