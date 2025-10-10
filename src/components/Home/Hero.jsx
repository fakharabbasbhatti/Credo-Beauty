import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/home/hero.jpg"
          alt="Pest Control Services"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B]/80 via-[#1B1B1B]/60 to-[#1B1B1B]/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-30 md:pt-8">
          <div className="max-w-3xl mx-auto text-center">
            
            {/* Main Headline */}
            <h1
              data-aos="fade-down"
              data-aos-delay="100"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF4E6] tracking-tight mb-6 leading-tight"
            >
              The clean beauty gift shop is open
            </h1>

            {/* Subheadline */}
            <p
              data-aos="fade-right"
              data-aos-delay="300"
              className="text-lg sm:text-xl lg:text-2xl text-[#F1E3D3] mb-6"
            >
              Explore magical gifts, must-have clean beauty, and something special for everyone on your list — including you.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row justify-center gap-3 mb-6"
            >
              <a
                href="/contact"
                data-aos="zoom-in"
                data-aos-delay="500"
                className="px-8 py-3 bg-[#D4A373] hover:bg-[#C69062] text-[#1B1B1B] font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg inline-block"
              >
                Contact Us
              </a>

              <a
                href="/"
                data-aos="flip-left"
                data-aos-delay="700"
                className="px-8 py-3 border-2 border-[#FFF4E6] text-[#FFF4E6] hover:bg-[#FFF4E6] hover:text-[#1B1B1B] font-semibold rounded-full transition-all duration-300 inline-block"
              >
                SHOP HOLIDAY
              </a>
            </div>

            {/* Contact Quick Info */}
            <div
              className="flex flex-col sm:flex-row pb-16 md:pb-0  md:pt-8 justify-center items-center gap-4 text-[#F1E3D3]/90 text-sm"
            >
              <div
                data-aos="fade-up"
                data-aos-delay="900"
                className="flex items-center gap-2"
              >
                <FaPhone className="text-[#D4A373]" />
                <span>+92 13456789</span>
              </div>

              <div className="hidden sm:block w-1 h-1 bg-[#221d18] rounded-full"></div>

              <div
                data-aos="fade-up-left"
                data-aos-delay="1000"
                className="flex items-center gap-2"
              >
                <FaMapMarkerAlt className="text-[#D4A373]" />
                <span>Doha, Null</span>
              </div>

              <div className="hidden sm:block w-1 h-1 bg-[#D4A373] rounded-full"></div>

              <div
                data-aos="fade-up-right"
                data-aos-delay="1100"
                className="flex items-center gap-2"
              >
                <FaClock className="text-[#D4A373]" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        data-aos="fade-in"
        data-aos-delay="1000"
        className="absolute hidden md:block bottom-8 left-1/2 transform -translate-x-1/2 text-[#FFF4E6]"
      >
        <div className="flex flex-col items-center animate-bounce">
          <FaChevronDown size={20} className="text-[#D4A373]" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
