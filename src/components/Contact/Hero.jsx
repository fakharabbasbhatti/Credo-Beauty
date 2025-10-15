import React from 'react';
import { FaChevronDown, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
if (typeof window !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true,
  });
}

export default function HeroContact() {
  return (
    <section className="relative overflow-hidden w-full h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('/home/ch.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(27,27,27,0.75) 0%, rgba(27,27,27,0.45) 50%, rgba(27,27,27,0.85) 100%)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-6 pt-8 md:pt-0">
        {/* Badge */}
        <div
          className="hidden md:flex mb-4 px-4 py-2 rounded-full border border-[#D4A373] bg-[#1B1B1B]/60 backdrop-blur-sm"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <span className="text-[#D4A373] text-sm font-medium">We’d Love to Hear from You</span>
        </div>

        {/* Heading */}
        <h1
          className="text-3xl md:text-6xl font-bold mb-4 mt-16 md:mt-0"
          style={{
            color: '#FFF4E6',
            textShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Get in Touch with
          <br />
          <span
            className="bg-gradient-to-r from-[#D4A373] to-[#C69062] bg-clip-text text-transparent"
          >
            Credo Beauty
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl mb-8 leading-relaxed text-[#F1E3D3]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Have questions, feedback, or need skincare advice?  
          Our team is here to assist you with all things clean beauty.
          Reach out by phone, email, or visit one of our stores.
        </p>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
        >
          <a
            href="tel:+92 012345678"
            className="px-8 py-4 bg-[#D4A373] hover:bg-[#C69062] text-[#1B1B1B] font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2 group"
          >
            <FaPhoneAlt className="group-hover:scale-110 transition-transform" />
            Call Us
          </a>

          <a
            href="mailto:hello@examplemail.com"
            className="px-8 py-4 border-1 border-[#FFF4E6] text-[#FFF4E6] hover:bg-[#FFF4E6] hover:text-[#1B1B1B] font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 group"
          >
            <FaEnvelope className="group-hover:scale-110 transition-transform" />
            Email Us
          </a>
        </div>

        {/* Contact Features */}
        <div
          className="hidden md:flex flex-wrap justify-center gap-6 mt-3 px-2"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {[
            { icon: FaMapMarkerAlt, text: 'Find a Store Near You' },
            { icon: FaPhoneAlt, text: 'Talk to Our Support Team' },
            { icon: FaEnvelope, text: '24/7 Email Assistance' }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1B1B]/60 backdrop-blur-sm border border-[#D4A373]/20 hover:border-[#D4A373]/40 transition-all duration-300"
            >
              <item.icon className="text-[#D4A373]" />
              <span className="text-sm font-medium text-[#F1E3D3]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
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
        className="absolute bottom-0 left-0 w-full h-24"
        style={{
          background: 'linear-gradient(0deg, rgba(27,27,27,0.8) 0%, transparent 100%)'
        }}
      />
    </section>
  );
}
