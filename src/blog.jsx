import React from "react";
import blog1 from "./assets/blog-1.jpg";
import blog2 from "./assets/blog-2.png";
import blog3 from "./assets/blog-3.png";
import blog4 from "./assets/blog-4.png";

const blog = () => {
  return (
    <div>
      {/* Heading */}
      <div className="text-center mt-10 lg:mt-24">
        <h1 className="text-[#f8be29] font-[Montserrat]">READ OUR BLOG</h1>
        <h1 className="text-3xl lg:text-[45px] font-[Oranienbaum] mt-6 text-[#221d1a]">
          The Latest News
        </h1>
        {/* Blog */}
        <div className="flex mt-16 flex-wrap sm:items-center ">
          <div className="">
            <img className="bg-[#000000B3] w-96 lg:w-83" src={blog1} alt="blog" />
          </div>

          <div>
            <img className="bg-[#000000B3] w-96 lg:w-83" src={blog2} alt="blog" />
          </div>
          <div>
            <img className="bg-[#000000B3] w-96 lg:w-83" src={blog3} alt="blog" />
          </div>
          <div>
            <img className="bg-[#000000B3] w-96 lg:w-83" src={blog4} alt="blog" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default blog;
