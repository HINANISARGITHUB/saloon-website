import React from 'react'
import service1 from './assets/services-img1.png';
import service2 from './assets/services-img2.png';
import service3 from './assets/services-img3.jpg';

const sevices = () => {
  return (
    <div className=" px-4 md:px-10 lg:px-20 lg:py-28 py-10" id='services'>
      
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-[#f8be29] font-[Montserrat]" >OUR SERVICES</h1>

        <h1 className="text-3xl lg:text-[60px] font-[Oranienbaum] mt-6 text-[#221d1a]">
          Your Satisfication Is
        </h1>
        <h1 className="text-3xl lg:text-[60px] font-[Oranienbaum] text-[#221d1a]">
          Our Priority
        </h1>

        <p className="text-[#575351] mt-4 text-[14px] md:text-[16px] font-[Montserrat]">
          We performs a full spectrum of body contouring, facials, skin and hair treatments.
          <br className="hidden md:block" />
          We uses many sophisticated, customizable techniques to suit your specific needs
          <br className="hidden md:block" />
          and preferences.
        </p>
      </div>

      {/* Services */}
      <div className="mt-20 flex flex-col md:flex-wrap md:flex-row gap-10 justify-center">
        
        {/* 1 */}
        <div className="relative flex flex-col items-center hover:transition transform duration-1000 ease-out hover:scale-105 hover:-translate-y-2">
          <img src={service1} className="w-full md:w-90" />
          <div className="w-48 bg-white shadow-sm text-center text-[#221d1a] px-2 py-2 text-[22px] font-[Oranienbaum]
            relative -top-5">
            Bridal Makeup
          </div>
        </div>

        {/* 2 */}
    
 <div className="relative flex flex-col items-center hover:transition transform duration-1000 ease-out hover:scale-105 hover:-translate-y-2">
          <img src={service2} className="w-full md:w-90" />
          <div className="w-52 bg-white shadow-sm text-center text-[#221d1a] px-2 py-2 text-[22px] font-[Oranienbaum]
            relative  -top-5">
            Party Makeup
          </div>
        </div>

        {/* 3 */}
         <div className="relative flex flex-col items-center hover:transition transform duration-1000 ease-out hover:scale-105 hover:-translate-y-2">
          <img src={service3} className="w-full md:w-90 h-64 object-cover" />
          <div className="w-48 bg-white shadow-sm text-center text-[#221d1a] px-2 py-2 text-[22px] font-[Oranienbaum]
            relative  -top-5">
            Skin & Hair
          </div>
        </div>

      </div>
    </div>
  )
}

export default sevices;

