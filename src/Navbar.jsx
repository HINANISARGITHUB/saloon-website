import { useState } from "react";
import logo from "./assets/nav-logo1.png"; // apna logo path

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#f6c3aa] text-center p-2 text-[16px] sticky top-0 z-50">
        Welcome to Hina's Salon and Studio
      </div>

      {/* Header */}
      <header className="sticky top-0 w-full bg-white z-50 shadow-md">
        {/* Desktop Menu */}
        <nav className="hidden lg:flex ml-72 bg-neutral-secondary-soft pt-8 ">
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <a href="#" className="text-[#f8be29] hover:text-black">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f8be29]">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f8be29]">
                OUR SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f8be29]">
                GALLERY
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f8be29]">
                MAKEUP CATALOGUE
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f8be29]">
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>

        {/* Logo + Mobile Menu Toggle */}
        <nav className="flex justify-between items-center max-w-7xl mx-auto p-4 lg:p-6">
          {/* Logo */}
          <img src={logo} alt="logo" className="h-20 lg:h-28 " />

          {/* Desktop Book Now */}
          <div className="hidden lg:flex items-center space-x-2 border py-3 px-6 font-bold hover:bg-[#f8be29] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#000000"
            >
              <path d="M216-96q-29.7 0-50.85-21.5Q144-139 144-168v-528q0-29 21.15-50.5T216-768h72v-96h72v96h240v-96h72v96h72q29.7 0 50.85 21.5Q816-725 816-696v528q0 29-21.15 50.5T744-96H216Zm0-72h528v-360H216v360Zm0-432h528v-96H216v96Zm264.21 216q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Z" />
            </svg>
            <span className="text-[14px]">Book Now!</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-200"
            onClick={() => setOpen(true)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo + Close */}
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="logo" className="h-14" />
          <button
            className="text-2xl font-bold"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 p-6 text-sm font-medium">
          <li>
            <a href="#" className="hover:text-[#f8be29]">HOME</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#f8be29]">ABOUT US</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#f8be29]">OUR SERVICES</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#f8be29]">GALLERY</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#f8be29]">MAKEUP CATALOGUE</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#f8be29]">CONTACT US</a>
          </li>

          <button className="mt-6 border py-3 font-bold hover:bg-[#f8be29]">
            Book Now!
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
