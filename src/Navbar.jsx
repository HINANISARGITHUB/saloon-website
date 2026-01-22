import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/nav-logo1.png";

const Navbar = () => {
  // navigate
  const navigate = useNavigate();

  const searchPages = {
    bridal: "/bridal",
    skincare: "/skinCare",
    haircare: "/hairCare",
    mehndi: "/mehndi",
    wax: "/wax"
    
  };


  // ////////////////
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);

  // suggestion dropdown
  // const suggestion = useMemo(() => {
  //   return history.filter((item) =>
  //     item.toLowerCase().includes(text.toLowerCase()),
  //   );
  // }, [text, history]);

  // search buuton click
    const search = () => {
  if (text && !history.includes(text)) {
    setHistory([...history, text]);
  }

  const path = searchPages[text.toLowerCase()];
  if (path) {
    navigate(path);
  }
};

  const [open, setOpen] = useState(false);
  // const [text1, setText1] = useState("");
  // const [history1, setHistory1] = useState([]);
  // const navItems = [
  //   "HOME",
  //   "ABOUT US",
  //   "OUR SERVICES",
  //   "GALLERY",
  //   "MAKEUP CATALOGUE",
  //   "CONTACT US",
  // ];

  return (
    <>
      {/* Top bar */}
      <div
        className="bg-[#f6c3aa] text-center p-2 text-[16px] sticky top-0 z-60"
        id="home"
      >
        Welcome to Hina's Salon and Studio
      </div>

      {/* Header */}
      <header className="sticky top-10 w-full bg-white z-50 shadow-md">
        {/* Desktop Top Links  by map*/}
        {/* <nav className="hidden lg:flex justify-center pt-8">
          <ul className="flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`hover:text-[#f8be29] transition-colors ${
                    item === "HOME" ? "text-[#f8be29]" : "text-black"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav> */}

        {/* Desktop Menu - Kept exactly as your original */}
        <nav className="hidden lg:flex ml-72 bg-neutral-secondary-soft pt-6 ">
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <a href="#hero" className="text-[#f8be29] hover:text-black">
                HOME
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#f8be29]">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#serviceCard" className="hover:text-[#f8be29]">
                OUR SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f8be29]">
                GALLERY
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-[#f8be29]">
                MAKEUP CATALOGUE
              </a>
            </li>
            <li>
              <a href="#footer" className="hover:text-[#f8be29]">
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Header Row */}
        <nav className="flex justify-between items-center max-w-7xl mx-auto p-4 lg:pt-2">
          <img src={logo} alt="logo" className="h-18 lg:h-28 object-contain" />

          {/* Desktop Search - Fixed Alignment */}

          <div className="hidden lg:flex items-center flex-1 max-w-md mx-10">
            <div className="relative w-full">
              {/* Search Bar */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-yellow-400">
                <span className="pl-3 flex items-center text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  value={text}
                  placeholder="Search"
                  onChange={(e) => setText(e.target.value)}
                  className="w-full py-2 px-3 focus:outline-none text-sm"
                />

                <button
                  onClick={search}
                  className="bg-yellow-400 text-white px-6 py-2 hover:bg-yellow-500 font-semibold"
                >
                  Search
                </button>
              </div>

              {/* Suggestions Dropdown */}
              {/* {text && suggestion.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md z-50">
                  {suggestion.map((item, i) => (
                    <div
                      key={i}
                      // onClick={() => setText(item)}
                      onClick={() => {
                        setText(item);
                        const path = searchPages[item.toLowerCase()];
                        if (path) {
                          navigate(path); // 👈 NEW PAGE OPEN
                        }
                      }}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )} */}
            </div>
          </div>

          {/*  */}

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
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setOpen(true)}
          >
            <svg
              className="w-8 h-8 ml-18"
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

      {/* Mobile Sidebar */}
      {/* Mobile / Tablet Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-white z-100 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo + Close */}
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="logo" className="h-12" />
          <button className="text-2xl font-bold ml-20" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        {/* Search Bar - Fixed with Flexbox */}
        <div className="p-4 border-b">
          <div className="flex w-full border border-gray-300 rounded-lg overflow-hidden">
            <div className="relative flex-1 flex items-center">
              <div className="absolute left-3 text-gray-400 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={text}
                placeholder="Search"
                onChange={(e) => setText(e.target.value)}
                className="w-full py-2 ml-6 pr-2 focus:outline-none text-sm"
              />
            </div>
            <button
              onClick={search}
              className="bg-yellow-400 text-white px-4 py-2 text-sm font-bold hover:bg-yellow-500 transition-colors max-w-20"
            >
              Search
            </button>
          </div>

          {/* suggestion drop down */}

          {/* {text &&
            suggestion.map((item, i) => (
              <div
                className="history-div px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 bg-white
             border-l border-r border-gray-300 shadow-md z-50"
                key={i}
                onClick={() => {
                  setText(item);
                  const path = searchPages[item.toLowerCase()];
                  if (path) {
                    navigate(path);
                    setOpen(false); // mobile menu close
                  }
                }}
              >
                {item}
              </div>
            ))} */}
        </div>

        {/* Menu Items */}
        <div className="flex flex-col h-[calc(100vh-160px)] p-6">
          {/* <ul className="flex flex-col gap-6 text-sm font-medium">
            {[
              "HOME",
              "ABOUT US",
              "OUR SERVICES",
              "GALLERY",
              "MAKEUP CATALOGUE",
              "CONTACT US",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#f8be29] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul> */}

          <ul className="flex flex-col gap-6 text-sm font-medium">
            <li>
              <a href="#hero" className="text-[#f8be29] hover:text-black">
                HOME
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#f8be29]">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#serviceCard" className="hover:text-[#f8be29]">
                OUR SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f8be29]">
                GALLERY
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-[#f8be29]">
                MAKEUP CATALOGUE
              </a>
            </li>
            <li>
              <a href="#footer" className="hover:text-[#f8be29]">
                CONTACT US
              </a>
            </li>
          </ul>

          {/* Book Now Button */}
          <button className="mt-auto w-full bg-black text-white py-3 font-bold hover:bg-[#f8be29] transition-colors rounded-lg">
            Book Now!
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

