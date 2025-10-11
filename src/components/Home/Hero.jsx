import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaShoppingBag, FaGift, FaStar } from "react-icons/fa";

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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/home/hero.jpg"
          alt="Clean Beauty Gift Shop"
          className="object-cover w-full h-full"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B]/90 via-[#1B1B1B]/70 to-[#1B1B1B]/90"
          data-aos="fade-in"
          data-aos-delay="400"
        ></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          data-aos="fade-down"
          data-aos-delay="600"
          className="absolute top-20 left-10 w-6 h-6 border-2 border-[#D4A373] rounded-full"
        ></div>
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="absolute bottom-40 right-16 w-4 h-4 bg-[#D4A373] rounded-full"
        ></div>
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="absolute top-1/3 right-20 w-3 h-3 border border-[#FFF4E6] rounded-full"
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-8">
          <div className="max-w-4xl mx-auto text-center">

            {/* Main Headline */}
            <h1
              data-aos="fade-down"
              data-aos-delay="300"
              className="text-4xl sm:text-5xl  font-bold text-[#FFF4E6] tracking-tight mb-6 leading-tight"
            >
              The clean beauty{" "}
              <span className="text-[#D4A373]">gift shop</span> is open
            </h1>

            {/* Subheadline */}
            <p
              data-aos="fade-right"
              data-aos-delay="500"
              className="text-lg sm:text-xl  text-[#F1E3D3] mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Explore magical gifts, must-have clean beauty, and something special for everyone on your list — including you.
            </p>

            {/* Features Grid */}
            <div
              className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="flex items-center justify-center gap-2 text-[#F1E3D3]">
                <FaGift className="text-[#D4A373]" />
                <span className="text-sm">Curated Gifts</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-[#F1E3D3]">
                <FaShoppingBag className="text-[#D4A373]" />
                <span className="text-sm">Clean Beauty</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-[#F1E3D3]">
                <FaStar className="text-[#D4A373]" />
                <span className="text-sm">Premium Quality</span>
              </div>
            </div>

            {/* CTA Buttons */}
           <div
  className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4 mb-8"
  data-aos="zoom-in"
  data-aos-delay="900"
>
  <a
    href="/shop"
    className="px-8 py-4 bg-[#D4A373] hover:bg-[#C69062] text-[#1B1B1B] font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 group"
  >
    <FaShoppingBag className="group-hover:scale-110 transition-transform" />
    Shop Now
  </a>

  <a
    href="/contact"
    className="px-8 py-4 border-2 border-[#FFF4E6] text-[#FFF4E6] hover:bg-[#FFF4E6] hover:text-[#1B1B1B] font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 group"
  >
    <FaPhoneAlt className="group-hover:scale-110 transition-transform" />
    Contact Us
  </a>
</div>

        
     {/* Contact Quick Info */}
            <div
              className="hidden md:flex flex-col sm:flex-row justify-center items-center gap-6 text-[#F1E3D3]/90 text-sm"
              data-aos="fade-in"
              data-aos-delay="1300"
            >
              <div className="flex items-center gap-2 hover:text-[#D4A373] transition-colors cursor-pointer">
                <FaPhoneAlt className="text-[#D4A373]" />
                <span>+92 13456789</span>
              </div>

              <div className="hidden sm:block w-1 h-1 bg-[#D4A373] rounded-full"></div>

              <div className="flex items-center gap-2 hover:text-[#D4A373] transition-colors cursor-pointer">
                <FaMapMarkerAlt className="text-[#D4A373]" />
                <span>Doha, Qatar</span>
              </div>

              <div className="hidden sm:block w-1 h-1 bg-[#D4A373] rounded-full"></div>

              <div className="flex items-center gap-2 hover:text-[#D4A373] transition-colors cursor-pointer">
                <FaClock className="text-[#D4A373]" />
                <span>Mon-Sun: 9AM-9PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

   {/* Scroll Down Indicator */}
      <div
        data-aos="fade-in"
        data-aos-delay="1500"
        className="absolute hidden md:block bottom-8 left-1/2 transform -translate-x-1/2 text-[#FFF4E6]"
      >
        <div className="flex flex-col items-center animate-bounce">
          {/* <span className="text-sm text-[#F1E3D3] mb-2">Scroll Down</span> */}
          <FaChevronDown size={20} className="text-[#D4A373]" />
        </div>
      </div>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(212, 163, 115, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(212, 163, 115, 0.1) 2%, transparent 0%)`,
          backgroundSize: '100px 100px',
        }}
      ></div>
    </header>
  );
};

export default Hero;


// Primary brand tone: #D4A373 (warm, elegant gold-beige)

// Background overlay: #1B1B1B (soft black, keeps image visible but dramatic)

// Text & border accents: creamy whites (#FFF4E6, #F1E3D3) for luxury contrast

// Hover effect: subtle warm tone shift to #C69062
