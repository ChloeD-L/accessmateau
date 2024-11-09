import React from "react";
import { Circle, Square } from "../geometric";

export const AboutUsSection: React.FC = () => {
  const teamInfo = [
    {
      title: "Our Staff",
      content:
        "We have an amazing team to support people of different age and cultural backgrounds. We have bilingual workers available in Mandarin, Cantonese, Hindi, Vietnamese, and more.",
      image: "/img/staff.png",
    },
    {
      title: "Our History",
      content:
        "We started from a small, caring team and are now fast growing to cover Melbourne Metropolitan area. We aim to provide high quality disability support services.",
      image: "/img/history.png",
    },
    {
      title: "Our Mission",
      content:
        "To provide specialised support with highly qualified workers. Making your and your family's life easier is our ultimate goal.",
      image: "/img/mission.png",
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-white pt-10 md:pt-30 lg:pt-40 px-10 relative w-full text-[#2B2C2E]">
      <Square top="12%" left="80%" />
      <Circle top="18%" left="85%" />
      <h2 className="text-5xl font-bold text-center tracking-wider pb-2">About Us</h2>
      <hr className="border-t-4 border-customSecondary w-[250px] mx-auto mb-10 pb-10" />

      <div className="container mx-auto flex flex-col md:flex-row lg:gap-16 justify-center gap-6">
        {teamInfo.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 text-center w-full border rounded-lg shadow-lg p-6 hover:shadow-xl hover:border-customTertiary transition duration-300 md:w-1/4"
          >
            {/* 动态头像部分 */}
            <div className="w-48 h-48  mt-8 overflow-hidden">
              <img src={info.image} alt={info.title} className="w-full h-full object-cover " />
            </div>

            {/* 信息部分 */}
            <div className="flex flex-col items-center min-h-[300px] text-center p-6 w-full">
              <h3 className="mt-6 text-2xl font-bold mb-4 tracking-wide">{info.title}</h3>
              <div className="flex-grow flex items-center pb-10">
                <p className="text-gray-600 text-base leading-relaxed">{info.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
