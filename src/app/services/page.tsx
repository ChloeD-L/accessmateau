import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

const servicesPage = () => {
  return (
    <div className="flex flex-col snap-y">
      <section>
        <Header className="sticky md:sticky" />
      </section>
      <section className="snap-center min-h-screen pt-10 flex flex-col mb-14">
        <div className="relative w-full h-56 flex justify-center">
          <img
            src="/img/Our_Services.png"
            alt="Heading 1 Our services"
            className="w-full h-full object-contain object-center"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-16 items-center px-16 py-24 bg-gray-200 mt-24">
          {/* 第一行 - 左图右文 */}
          <div className="flex justify-center ">
            <img src="/img/translator.png" alt="Bilingual Service Icon" className="w-48 h-48 object-contain" />
          </div>
          <div className="flex flex-col items-start md:items-center md:text-left ">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">We have bilingual workers with multiple languages</h3>
            <p className="text-lg text-gray-700">
              We have disability services workers who can speak Mandarin, Cantonese, Arabic, Turkish, Hindi and more to
              come!
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-16 items-center px-16 py-24 bg-gray-200 mt-24">
          {/* 第一行 - 左图右文 */}

          <div className="flex flex-col items-start md:items-center md:text-left w-2/3">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">NDIS Daily Living Support</h3>
            <p className="text-lg text-gray-700 ">
              We help you with tasks at home to boost your independency. We help with: Professional cleaning and
              gardening Basic household tasks including cooking, laundry and general cleaning Finance management
              support, daily routine development support and other capacity building support.
            </p>
          </div>
          <div className="flex justify-center ">
            <img src="/img/support.png" alt="Bilingual Service Icon" className="w-48 h-48 object-contain" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-16 items-center px-16 py-24 bg-gray-200 mt-24">
          {/* 第一行 - 左图右文 */}
          <div className="flex justify-center ">
            <img src="/img/disabilities.png" alt="Bilingual Service Icon" className="w-48 h-48 object-contain" />
          </div>
          <div className="flex flex-col items-start md:items-center md:text-left w-2/3">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">NDIS Community Access Support</h3>
            <p className="text-lg text-gray-700">
              We help you to be more involved in the community. We provide support with: Transport to the medical
              appointments and community activities Day-trip available to regional Victoria Shopping assistance
            </p>
          </div>
        </div>
      </section>

      {/* <section className="snap-center min-h-screen pt-10 flex flex-col py-24">
        <div className="flex flex-col md:flex-row justify-center gap-16 items-center px-16 py-24 bg-gray-200 mt-24">

          <div className="flex justify-center ">
            <img src="/img/translator.png" alt="Bilingual Service Icon" className="w-48 h-48 object-contain" />
          </div>
          <div className="flex flex-col items-start md:items-center md:text-left ">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">We have bilingual workers with multiple languages</h3>
            <p className="text-lg text-gray-700">
              We have disability services workers who can speak Mandarin, Cantonese, Arabic, Turkish, Hindi and more to
              come!
            </p>
          </div>
        </div>
      </section> */}

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default servicesPage;
