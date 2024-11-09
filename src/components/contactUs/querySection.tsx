import ContactForm from "./contactForm";

export const QuerySection: React.FC = () => {
  return (
    <section
      id="query"
      className="w-full min-h-screen bg-white px-4 md:px-10 flex lg:px-16 justify-center relative overflow-hidden"
    >
      {/* <div className="absolute h-screen right-[-400px] bg-[url('/img/conatact-us-bg.png')] bg-cover z-0 pointer-events-none max-h-screen w-full"></div> */}

      <img
        src="/2.jpg"
        alt="Background"
        className="absolute right-0 top-0 w-full h-full opacity-30 z-0 object-cover"
        // 通过 clipPath 实现裁剪
      />
      <ContactForm />
      {/* 
      <div className="container relative z-10 w-full flex flex-row items-start h-full gap-0 justify-center py-10 ">
        
      </div> */}
    </section>
  );
};
