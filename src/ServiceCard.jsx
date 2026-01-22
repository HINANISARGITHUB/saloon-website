import React from "react";
import skinCare from "./assets/skin-care.jpg";
import service3 from "./assets/services-img3.jpg";
import royalBride from "./assets/royal-bridal.jpg";
import waxing from "./assets/bodywax.jpg";
import mehndi from "./assets/mehndi.jpg";

const ServiceCard = () => {
  return (
    <div id="serviceCard">
      {/* Heading */}
      <div className="text-center py-10 lg:py-16">
        <h1 className="text-[#f8be29] font-[Montserrat]">
          EXPLORE OUR SERVICES
        </h1>
        <h1 className="text-3xl lg:text-[60px] font-[Oranienbaum] mt-6 text-[#221d1a]">
          We are proud of
        </h1>
        <h1 className="text-3xl lg:text-[60px] font-[Oranienbaum] text-[#221d1a]">
          our service
        </h1>
      </div>

      {/* Cards wrapper */}
      <div
        className="
        mt-10
          lg:mt-16 px-4
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-10
          lg:flex lg:gap-6 lg:px-10
          justify-items-center
        "
      >
        {/* Card 1 */}
        <div className="w-full max-w-60 text-center">
          <img
            src={skinCare}
            className="w-full rounded-tl-[150px] rounded-tr-[150px]
            hover:rounded-bl-[150px] hover:rounded-br-[150px]"
          />
          <div className="py-6">
            <h2 className="text-[24px] text-[#221D1a] hover:text-[#f8be29] font-[Oranienbaum]">
              Skin Care
            </h2>
            <p className="text-[14px] text-[#575351] font-[Montserrat] mt-4 leading-6">
              Reveal radiant, polish skin with our premium skin polishing services
              for face and body...
            </p>
            <button className="text-[14px] font-[Montserrat] text-[#FFb700] mt-6">
              <a className="hover:text-[#221D1a]">Book Our services</a>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-60 text-center">
          <img
            src={waxing}
            className="w-full rounded-bl-[150px] rounded-br-[150px]
            hover:rounded-tl-[150px] hover:rounded-tr-[150px]"
          />
          <div className="py-6">
            <h2 className="text-[24px] text-[#221D1a] hover:text-[#f8be29] font-[Oranienbaum]">
              Body Waxing
            </h2>
            <p className="text-[14px] text-[#575351] font-[Montserrat] mt-4 leading-6">
              Revitalize your skin with Jennen,s Treatment for a flawless,
              youthful glow...
            </p>
            <button className="text-[14px] font-[Montserrat] text-[#FFb700] mt-6">
              <a className="hover:text-[#221D1a]">Book Our services</a>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full max-w-60 text-center">
          <img
            src={royalBride}
            className="w-full rounded-tl-[150px] rounded-tr-[150px]
            hover:rounded-bl-[150px] hover:rounded-br-[150px]"
          />
          <div className="py-6">
            <h2 className="text-[24px] text-[#221D1a] hover:text-[#f8be29] font-[Oranienbaum]">
              Royal Bridal Package
            </h2>
            <p className="text-[14px] text-[#575351] font-[Montserrat] mt-4 leading-6">
              Experience the luxury of Brunovassari treatments for deep cleansing...
            </p>
            <button className="text-[14px] font-[Montserrat] text-[#FFb700] mt-6">
              <a className="hover:text-[#221D1a]">Book Our services</a>
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full max-w-60 text-center">
          <img
            src={mehndi}
            className="w-full rounded-bl-[150px] rounded-br-[150px]
            hover:rounded-tl-[150px] hover:rounded-tr-[150px]"
          />
          <div className="py-6">
            <h2 className="text-[24px] text-[#221D1a] hover:text-[#f8be29] font-[Oranienbaum]">
              Mehndi
            </h2>
            <p className="text-[14px] text-[#575351] font-[Montserrat] mt-4 leading-6">
              Experience the elegance of premium mehndi artistry for flawless
              designs and rich color...
            </p>
            <button className="text-[14px] font-[Montserrat] text-[#FFb700] mt-6">
              <a className="hover:text-[#221D1a]">Book Our services</a>
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-full max-w-60 text-center">
          <img
            src={service3}
            className="w-full rounded-tl-[150px] rounded-tr-[150px]
            hover:rounded-bl-[150px] hover:rounded-br-[150px]"
          />
          <div className="py-6 px-4">
            <h2 className="text-[24px] text-[#221D1a] hover:text-[#f8be29] font-[Oranienbaum]">
              Hair Treatment
            </h2>
            <p className="text-[14px] text-[#575351] font-[Montserrat] mt-4 leading-6">
              Transform your look with vibrant, long lasting hair color...
            </p>
            <button className="text-[14px] font-[Montserrat] text-[#FFb700] mt-6">
              <a className="hover:text-[#221D1a]">Book Our services</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
