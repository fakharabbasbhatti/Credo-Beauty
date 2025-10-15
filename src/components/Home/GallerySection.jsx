import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaGem, FaStar, FaSearch, FaHeart } from "react-icons/fa";

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const images = [
    { 
      src: "/home/g1.jpg", 
      title: "The Tastemaker", 
      description: "Curated luxury for the discerning eye",
      aos: "fade-right",
      delay: 100
    },
    { 
      src: "/home/g2.jpg", 
      title: "The Clean Curious", 
      description: "Begin your clean beauty journey",
      aos: "fade-up",
      delay: 200
    },
    { 
      src: "/home/g3.jpg", 
      title: "The Frequent Flyer", 
      description: "Travel-ready essentials",
      aos: "fade-left",
      delay: 300
    },
    { 
      src: "/home/g5.jpg", 
      title: "The Always Polished One", 
      description: "Perfect finishes every time",
      aos: "zoom-in",
      delay: 400
    },
    { 
      src: "/home/g4.jpg", 
      title: "The Me-Time Minimalist", 
      description: "Simplify your self-care routine",
      aos: "flip-left",
      delay: 500
    },
    { 
      src: "/home/g6.jpg", 
      title: "Holiday Gift Sets", 
      description: "Perfect presents for loved ones",
      aos: "zoom-out",
      delay: 600
    },
  ];

  const handleToggle = (index) => {
    if (window.innerWidth < 768) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#1B1B1B] to-[#141414] py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-4 md:left-20 w-12 h-12 md:w-24 md:h-24 border border-[#D4A373] rounded-full"></div>
        <div className="absolute bottom-10 right-4 md:right-20 w-10 h-10 md:w-20 md:h-20 border border-[#D4A373] rounded-full"></div>
        <div className="absolute top-1/3 right-10 md:right-32 w-8 h-8 md:w-16 md:h-16 border border-[#FFF4E6] rounded-full"></div>
      </div>

      {/* Section Heading */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16 text-center relative z-10">
        <div 
          data-aos="fade-down"
          data-aos-delay="200"
          className="inline-flex items-center gap-3 bg-[#D4A373]/20 backdrop-blur-sm border border-[#D4A373]/30 px-6 py-3 rounded-full mb-6"
        >
          <FaGem className="text-[#D4A373] text-sm" />
          <span className="text-[#F1E3D3] text-sm font-medium tracking-wider">GIFT COLLECTIONS</span>
          <FaStar className="text-[#D4A373] text-sm" />
        </div>
        
        <h2
          data-aos="fade-down"
          data-aos-delay="300"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF4E6] mb-4 md:mb-6 leading-tight"
        >
          Shop By <span className="text-[#D4A373]">Gift Guide</span>
        </h2>
        <p
          data-aos="fade-down"
          data-aos-delay="400"
          className="text-[#F1E3D3] text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Explore the finest clean beauty essentials designed to enhance your
          natural glow — crafted with care and luxury in mind.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto relative z-10">
        {images.map((item, index) => (
          <div
            key={index}
            data-aos={item.aos}
            data-aos-delay={item.delay}
            className="relative group overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleToggle(index)}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden bg-[#2A2A2A]">
              <img
                src={item.src}
                alt={item.title}
                className={`w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover transform transition-all duration-700 ease-out 
                  ${
                    activeIndex === index || hoveredIndex === index
                      ? "scale-110 opacity-90"
                      : "group-hover:scale-110 group-hover:opacity-90"
                  }`}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1B1B1B]/90 transition-all duration-500 
                  ${
                    activeIndex === index || hoveredIndex === index
                      ? "opacity-100"
                      : "opacity-80 group-hover:opacity-100"
                  }`}
              ></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFF4E6]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="p-2 bg-[#1B1B1B]/80 backdrop-blur-sm border border-[#FFF4E6]/20 rounded-full text-[#FFF4E6] hover:bg-[#D4A373] hover:border-[#D4A373] hover:text-[#1B1B1B] transition-all duration-300">
                  <FaHeart size={14} />
                </button>
                {/* <button className="p-2 bg-[#1B1B1B]/80 backdrop-blur-sm border border-[#FFF4E6]/20 rounded-full text-[#FFF4E6] hover:bg-[#D4A373] hover:border-[#D4A373] hover:text-[#1B1B1B] transition-all duration-300">
                  <FaSearch size={14} />
                </button> */}
              </div>

              {/* Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-[#D4A373] text-[#1B1B1B] px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  New
                </span>
              </div>
            </div>

            {/* Content Card */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/90 to-transparent transition-all duration-500 ease-out
                ${
                  activeIndex === index || hoveredIndex === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 group-hover:translate-y-0 opacity-100 group-hover:opacity-100"
                }`}
            >
              <div className="flex justify-between items-start transform transition-transform duration-500 group-hover:translate-x-1">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-[#FFF4E6] mb-1 md:mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[#F1E3D3]/80 text-sm md:text-base mb-2 md:mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="w-8 h-0.5 bg-[#D4A373] rounded-full transform transition-all duration-500 group-hover:w-12 mb-2"></div>
                </div>
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-[#D4A373]/20 rounded-full transform transition-all duration-500 group-hover:bg-[#D4A373]/30 group-hover:scale-110 ml-4 flex-shrink-0">
                  <FaArrowRight className="text-[#D4A373] text-xs md:text-sm transform transition-transform duration-500 group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* Border Effect */}
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border border-[#FFF4E6]/10 group-hover:border-[#FFF4E6]/20 transition-all duration-500"></div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl shadow-none transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#D4A373]/15 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      {/* <div 
        className="text-center mt-12 md:mt-16 relative z-10"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <p className="text-[#F1E3D3] text-base md:text-lg mb-6">
          Can't find what you're looking for?
        </p>
        <button className="px-8 py-3 border-2 border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-[#1B1B1B] font-semibold rounded-full transition-all duration-300 inline-flex items-center gap-2 transform hover:scale-105">
          Explore All Collections
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div> */}
    </section>
  );
};

export default GallerySection;