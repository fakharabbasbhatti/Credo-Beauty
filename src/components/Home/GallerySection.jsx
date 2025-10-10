import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const images = [
    { src: "/home/g1.jpg", title: "The Tastemaker", aos: "fade-right" },
    { src: "/home/g2.jpg", title: "The Clean Curious", aos: "fade-up" },
    { src: "/home/g3.jpg", title: "The Frequent Flyer", aos: "fade-left" },
    { src: "/home/g5.jpg", title: "The Always Polished One", aos: "zoom-in" },
    { src: "/home/g4.jpg", title: "The Me-Time Minimalist", aos: "flip-left" },
    { src: "/home/g6.jpg", title: "Holiday Gift Sets", aos: "zoom-out" },
  ];

  const handleToggle = (index) => {
    if (window.innerWidth < 768) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section className="relative bg-[#1B1B1B]/90 py-16  px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2
          data-aos="fade-right"
          className="text-3xl md:text-5xl font-bold text-[#FFF4E6] mb-4"
        >
          Shop by Gift Guide
        </h2>
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-[#F1E3D3] text-lg max-w-lg"
        >
          Explore the finest clean beauty essentials designed to enhance your
          natural glow — crafted with care and luxury in mind.
        </p>
      </div>

      {/* Image Grid */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {images.map((item, index) => (
          <div
            key={index}
            data-aos={item.aos}
            data-aos-delay={index * 150}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.title}
              className={`object-cover w-full h-72 transform transition-all duration-500 ease-out 
                ${
                  activeIndex === index
                    ? "scale-110 opacity-80"
                    : "group-hover:scale-110 group-hover:opacity-80"
                }`}
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/80 via-transparent to-transparent transition-opacity duration-500 
                ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
            ></div>

            {/* Text on Hover or Tap */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-4 bg-[#1B1B1B]/70 text-[#FFF4E6] transition-transform duration-500 
                ${
                  activeIndex === index
                    ? "translate-y-0"
                    : "translate-y-full group-hover:translate-y-0"
                }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <FaArrowRight className="text-[#D4A373]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
