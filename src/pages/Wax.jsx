import { useState } from "react";
import { useNavigate } from "react-router-dom";
import waxMain from '../assets/waxMain.png';
import wax1 from '../assets/bodywax.jpg';
import wax2 from '../assets/wax1.jpg';
import wax3 from '../assets/wax2.jpg';
import Footer from '../footer';



const Wax = () => {
   const navigate = useNavigate();
  
    const images = [wax1, wax2, wax3];
    const [mainImage, setMainImage] = useState(images[0]);
  
    return (
      <>
        {/* TOP BANNER */}
        <div className="relative w-full">
          <img src={waxMain} alt="Gallery" className="w-full object-cover" />
  
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
        Wax Charges
      </h2>
  
      <ul className="space-y-3 text-gray-700 text-sm md:text-base">
        <li className="flex justify-between"><span>full hand & leg + underArms</span><span>Rs 20,000</span></li>
        <li className="flex justify-between"><span>full hand & leg</span><span>Rs 18,000</span></li>
        <li className="flex justify-between"><span>full hand</span><span>Rs 10,000</span></li>
        <li className="flex justify-between"><span>full leg</span><span>Rs 12,000</span></li>
        <li className="flex justify-between"><span>head & upper lip</span><span>Rs 5,000</span></li>
        <li className="flex justify-between"><span>head & upper lip + underArms</span><span>Rs 5,500</span></li>
        
        
      </ul>
    </div>
  
  </div>

        <Footer/>
      </>
    );
}

export default Wax;
