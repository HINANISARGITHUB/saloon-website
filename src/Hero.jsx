import { useState, useEffect } from "react";
import "./App.css";
import hero1 from "./assets/hero1.jpg";
import hero2 from "./assets/hero2.jpg";

const slidesData = [
  {
    img: hero1,
    title: "Royal Bridal",
    subtitle: "Makeup",
   position:"center",
  },
  {
    img: hero2,
    title: "Model Party",
    subtitle: "Makeup",
    position: "right",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesData.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section className="hero" id="hero">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: slide.position + " center",
          }}
        >
          {index === current && (
            <div className="absolute top-1/4 left-10 text-white hero-content">
              <h1 className="text-4xl lg:text-7xl font-thin">{slide.title}</h1>
              <h2 className="text-4xl lg:text-7xl mt-2 font-thin">
                {slide.subtitle}
              </h2>
              <p className="text-[20px] lg:text-[24px] mt-4 font-thin">
                Step to a world of timeless beauty
              </p>
              <button className="mt-12 bg-[#ffffff] text-gray-950 px-8 py-3 btn">
                View More
              </button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Hero;
