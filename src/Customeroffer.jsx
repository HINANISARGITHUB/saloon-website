

import React from 'react';
import costumer from './assets/customer.jpg'
import { Award, ThumbsUp, Headset, ShoppingCart } from 'lucide-react';

const CustomerOffer = () => {
  const features = [
    {
      title: "Experts",
      desc: "Our talented specialists are ready to share their secrets.",
      icon: <Award className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Reliable Products",
      desc: "Trusted quality and desired results.",
      icon: <ThumbsUp className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Customer Service",
      desc: "Exceptional customer service for personalized beauty experience.",
      icon: <Headset className="w-6 h-6 text-gray-700" />,
    },
    {
      title: "Luxury Lounge",
      desc: "Experience luxury and elegance in our branches.",
      icon: <ShoppingCart className="w-6 h-6 text-gray-700" />,
    },
  ];

  return (
    <div className="bg-[#FDFCF8] min-h-screen py-10 lg:py-40 px-6 md:px-16 lg:px-24 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7">
          <span className="text-[#f8be29] font-[Montserrat]">
            Who We Offer
          </span>
          <h2 className="text-3xl lg:text-[60px] font-[Oranienbaum] mt-6 text-[#221d1a] leading-tight">
            What We Provide To <br className="hidden md:block" /> Our Customers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {features.map((item, index) => (
              <div key={index} className="flex gap-5 border-t border-gray-200 pt-8">
                <div className="bg-[#F3EDE4] p-4 rounded-full h-fit shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image with Arch Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="rounded-t-full rounded-b-full border border-[#f8be29] p-3 overflow-hidden aspect-3/4">
              <img 
                src={costumer} 
                alt="Hair Styling" 
                className="w-full h-full object-cover rounded-t-full rounded-b-full shadow-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerOffer;