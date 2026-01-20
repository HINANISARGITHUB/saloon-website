import React from "react";
import DP from "./assets/dp.png";

const LeaderPage = () => {
  return (
    <div>
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-[#f8be29] font-[Montserrat]">Meet Our Leader</h1>

        <h1 className="text-3xl lg:text-[45px] font-[Oranienbaum] mt-6 text-[#221d1a]">
          Specialists With Many Years
        </h1>
        <h1 className="text-3xl lg:text-[45px] font-[Oranienbaum] text-[#221d1a]">
          Of Experience
        </h1>
      </div>

      {/* card */}

      <div className="w-full  max-w-60 text-center mx-auto mt-12">
        
      <img
  src={DP}
  className="w-full object-cover rounded-full shadow-lg"
/>


      
        <div className="py-6">
          <h2 className="text-[24px] text-[#221D1a] hover:text-[#f8be29] font-[Oranienbaum]">
            Ms.Hina
          </h2>
          <p className="text-[14px] text-[#575351] font-[Montserrat] mt-2">
            Owner & Founder
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaderPage;
