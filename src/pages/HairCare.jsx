import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hair from '../assets/hair.jpg';
import hair1 from '../assets/hair1.jpg';
import hair2 from '../assets/hair2.jpg';
import hair3 from '../assets/services-img3.jpg';
import Footer from '../footer';


const HairCare = () => {
  
     const navigate = useNavigate();
  
    const images = [hair1, hair2, hair3 ];
    const [mainImage, setMainImage] = useState(images[0]);
  
    return (
      <>
        {/* TOP BANNER */}
        <div className="relative w-full">
          <img src={hair} alt="Gallery" className="w-full object-cover" />
  
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="flex items-center gap-2 text-sm">
              <span
                onClick={() => navigate("/")}
                className="cursor-pointer hover:text-yellow-400"
              >
                Home
              </span>
              <span>{">"}</span>
              <span className="text-gray-200">Gallery</span>
            </div>
          </div>
        </div>
  
  {/* GALLERY SECTION */}
  <div className="
    flex gap-8 px-0 pt-24 justify-center
    lg:flex-row
    md:flex-col
    flex-col
  ">
  
    {/* LEFT: SMALL IMAGES */}
    <div className="
      flex gap-4
      lg:flex-col
      md:flex-row
      flex-row
      justify-center
    ">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          onClick={() => setMainImage(img)}
          className="
          w-28 h-28
            lg:w-36 lg:h-36
          md:w-38 md:h-38  
            
            object-cover cursor-pointer border rounded-lg
            hover:border-[#f8be29]
          "
        />
      ))}
    </div>
  
    {/* CENTER: MAIN IMAGE */}
    <div className="flex justify-center">
      <img
        src={mainImage}
        className="
         lg:w-96 h-115
          object-cover rounded-xl shadow-lg
          border border-transparent hover:border-[#f6c3aa]
          md:w-96 md:h-118
          sm:w-100 sm:h-115
        "
      />
    </div>
  
    {/* RIGHT: CHARGES */}
   <div className="
      bg-pink-50 p-6 rounded-xl mx-auto
      w-90 lg:w-96 lg:mx-0
      
  ">
  
  
      <h2 className="text-xl font-bold mb-4 text-pink-600 text-center lg:text-left">
       HairCare Charges
      </h2>
  
      <ul className="space-y-3 text-gray-700 text-sm md:text-base">
        <li className="flex justify-between"><span>Base Color + Highlight</span><span>Rs 70,000</span></li>
        <li className="flex justify-between"><span>Highlight</span><span>Rs 50,000</span></li>
        <li className="flex justify-between"><span>Base Color</span><span>Rs 25,000</span></li>
        <li className="flex justify-between"><span>Hair moistrizing + Treatment</span><span>Rs 120,000</span></li>
        <li className="flex justify-between"><span>Hair Fall Treatment</span><span>Rs 60,000</span></li>
        <li className="flex justify-between"><span>Hair Mask + Wash</span><span>Rs 20,000</span></li>
        <li className="flex justify-between"><span>Cutting (Full Length)</span><span>Rs 15,000</span></li>
        <li className="flex justify-between"><span>Cutting (Mid Length)</span><span>Rs 12,000</span></li>
        <li className="flex justify-between"><span>Cutting (short Length)</span><span>Rs 8,000</span></li>
        <li className="flex justify-between"><span>Head Message + Oiling</span><span>Rs 7,000</span></li>
        <li className="flex justify-between"><span>Head Message + Protein Treatment </span><span>Rs 14,000</span></li>
      </ul>
    </div>
  
  </div>
  
  
  
      
  
  
        <Footer/>
      </>
    );
  
}

export default HairCare