import React from "react";
import StudioIndoor from "./assets/salon-indoor.png";

const Studio = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-28 px-4 md:px-10 lg:px-20 py-10 lg:py-16">

      {/* Image */}
      <div className="flex justify-center lg:justify-start">
        <div className="inline-flex p-2 md:p-3 rounded-full border border-[#f8be29]">
          <img
            src={StudioIndoor}
            className="w-72 h-72 md:w-96 md:h-96 lg:w-140 lg:h-128 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="text-center lg:text-left">
        <h1 className="text-[#f8be29] font-[Montserrat]">
          THE BEST STUDIO YOU CHOOSE
        </h1>

        <h1 className="text-3xl lg:text-[60px] font-[Oranienbaum] mt-4 lg:mt-6 text-[#221d1a]">
          We will Change Your
        </h1>
        <h1 className="text-3xl lg:text-[60px] font-[Oranienbaum] text-[#221d1a]">
          Out Look
        </h1>

        <p className="text-[#575351] mt-4 text-[14px] md:text-[16px] font-[Montserrat]">
          We believe in delivering nothing but the best. Immerse
          <br className="hidden md:block" /> yourself in a world of unparalleled beauty treatments and
          <br className="hidden md:block" />
          rejuvenation. Experience the epitome of excellence with us.
          <br className="hidden md:block" /> Your pampering awaits.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-24 lg:gap-40 justify-center lg:justify-start">
          
          <div>
            <h1 className="text-5xl lg:text-6xl font-[Oranienbaum] text-[#f8be29] leading-none mt-10 lg:mt-12">
              10+
              <span className="block text-[#575351] text-[16px] lg:text-[18px] font-[Montserrat] leading-tight">
                Year experience
              </span>
            </h1>
          </div>

          <div>
            <h1 className="text-5xl lg:text-6xl font-[Oranienbaum] text-[#f8be29] leading-none mt-10 lg:mt-12">
              1000+
              <span className="block text-[#575351] text-[16px] lg:text-[18px] font-[Montserrat] leading-tight">
                Happy Clients
              </span>
            </h1>
          </div>

        

        </div>

        {/* btn */}
           <button className="mt-20 text-[12px] text-[#221D1a] font-[Montserrat] border py-3 font-bold hover:bg-[#f8be29] px-6 cursor-pointer">
            Location & Hours
          </button>
      </div>
    </div>
  );
};

export default Studio;
