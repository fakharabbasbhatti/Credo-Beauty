import React from 'react';
import { FiUsers, FiHeart, FiTarget, FiAward } from 'react-icons/fi';
import { FaChevronDown, FaLeaf, FaRecycle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
if (typeof window !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true,
  });
}

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden w-full h-screen ">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('/home/sh.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Enhanced Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(27,27,27,0.85) 0%, rgba(27,27,27,0.65) 50%, rgba(27,27,27,0.9) 100%)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-8 pt-18 md:pt-8">
        {/* Badge */}
        <div 
          className="mb-4 sm:mb-5 md:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#D4A373] bg-[#1B1B1B]/60 backdrop-blur-sm"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <span className="text-[#D4A373] text-xs sm:text-sm font-medium">Our Story</span>
        </div>

        {/* Main Heading */}
        <h1 
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 px-2"
          style={{
            color: '#FFF4E6',
            textShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Crafting Beauty
          <br />
          <span 
            className="bg-gradient-to-r from-[#D4A373] to-[#C69062] bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #D4A373 0%, #C69062 100%)'
            }}
          >
            With Purpose
          </span>
        </h1>

        {/* Description */}
        <p 
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mb-6 sm:mb-7 md:mb-8 leading-relaxed px-2"
          style={{ color: '#F1E3D3' }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          For over a decade, we've been committed to creating skincare that not only transforms your skin but also respects our planet. Every product tells a story of sustainability and care.
        </p>

        {/* CTA Buttons */}
        <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4 mb-8">
          <a
            href="/our-story"
            className="px-8 py-4 bg-[#D4A373] hover:bg-[#C69062] text-[#1B1B1B] font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 group"
          >
            <FiUsers className="group-hover:scale-110 transition-transform" />
            Our Journey
          </a>

          <a
            href="/mission"
            className="px-8 md:px-8 py-4 border-1 border-[#FFF4E6] text-[#FFF4E6] hover:bg-[#FFF4E6] hover:text-[#1B1B1B] font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 group"
          >
            <FiTarget className="group-hover:scale-110 transition-transform" />
            Our Mission
          </a>
        </div>

        {/* Values */}
        {/* <div 
          className="hidden md:flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-3 px-2"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {[
            { icon: FaLeaf, text: 'Sustainable' },
            { icon: FiHeart, text: 'Cruelty Free' },
            { icon: FaRecycle, text: 'Eco-Friendly' },
            { icon: FiAward, text: 'Award Winning' }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-[#1B1B1B]/60 backdrop-blur-sm border border-[#D4A373]/20 transition-all duration-300 hover:border-[#D4A373]/40"
            >
              <item.icon className="text-[#D4A373] text-sm sm:text-base" />
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap" style={{ color: '#F1E3D3' }}>
                {item.text}
              </span>
            </div>
          ))}
        </div> */}
      </div>

      {/* Scrolls Downa Indicatores */}
      <div
        data-aos="fade-in"
        data-aos-delay="1500"
        className="absolute hidden md:block bottom-8 left-1/2 transform -translate-x-1/2 text-[#FFF4E6]"
      >
        <div className="flex flex-col items-center animate-bounce">
          <FaChevronDown size={20} className="text-[#D4A373]" />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div 
        className="absolute bottom-0 left-0 w-full h-20 sm:h-24 md:h-32"
        style={{
          background: 'linear-gradient(0deg, rgba(27,27,27,0.8) 0%, transparent 100%)'
        }}
      />
    </section>
  );
}