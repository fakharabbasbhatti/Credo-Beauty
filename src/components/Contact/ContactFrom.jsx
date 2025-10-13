import React, { useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactFrom() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#1B1B1B" }}
    >
      {/* Enhanced Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606761568499-6d2451b23c57?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B1B1B] via-transparent to-[#D4A373]/10" />

      <div className="relative container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-start z-10">
        {/* Left Side: Contact Info */}
        <div data-aos="fade-right">
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#FFF4E6]">
              Get In <span className="text-[#D4A373]">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4A373] rounded-full mb-6"></div>
            <p className="text-lg text-[#F1E3D3] leading-relaxed">
              Have questions or ready to book? Reach out to us anytime — we're happy to help you find your perfect beauty essentials.
            </p>
          </div>

          <div className="space-y-6">
            {/* Contact Items with Enhanced Design */}
            {[
              {
                icon: FaMapMarkerAlt,
                title: "Location",
                content: "Dilawar, Colony, Pakistan",
                delay: 100
              },
              {
                icon: FaPhoneAlt,
                title: "Phone",
                content: "+92 012345678",
                delay: 200
              },
              {
                icon: FaEnvelope,
                title: "Email",
                content: "hello@examplemail.com",
                delay: 300
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#2A2A2A] transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div className="w-12 h-12 bg-[#D4A373] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-[#1B1B1B] text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#FFF4E6] text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#F1E3D3]">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="mt-12">
            <h4 className="text-[#FFF4E6] font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              {[
                { icon: FaFacebookF, href: "#", color: "hover:bg-blue-600" },
                { icon: FaInstagram, href: "#", color: "hover:bg-pink-600" },
                { icon: FaTwitter, href: "#", color: "hover:bg-blue-400" },
                { icon: FaLinkedinIn, href: "#", color: "hover:bg-blue-700" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className={`w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center text-[#FFF4E6] transition-all duration-300 transform hover:scale-110 ${item.color} border border-[#D4A373]/20`}
                >
                  <item.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Enhanced Contact Form */}
        <div
          className="bg-[#1B1B1B]/90 p-3 md:p-10 rounded-2xl shadow-2xl border border-[#D4A373]/20 backdrop-blur-lg"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="text-center mb-8">
            <div className="w-15 h-15 md:w-16 md:h-16 bg-[#D4A373] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaPaperPlane className="text-2xl text-[#1B1B1B]" />
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-[#FFF4E6]">
              Send Us a Message
            </h3>
            <p className="text-[#F1E3D3] text-sm md:text-lg mt-2">We'll get back to you soon</p>
          </div>
          
          <form className="space-y-6">
            {[
              { label: "Your Name", type: "text", id: "name", placeholder: "Enter your name" },
              { label: "Email Address", type: "email", id: "email", placeholder: "Enter your email" },
            ].map((field, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={300 + index * 100}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-[#F1E3D3] mb-2"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  className="w-full px-4 py-4 rounded-xl bg-[#2A2A2A] border border-[#F1E3D3]/20 text-[#FFF4E6] placeholder-[#F1E3D3]/50 focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            
            <div data-aos="fade-up" data-aos-delay="500">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#F1E3D3] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-4 rounded-xl bg-[#2A2A2A] border border-[#F1E3D3]/20 text-[#FFF4E6] placeholder-[#F1E3D3]/50 focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              data-aos="zoom-in"
              data-aos-delay="600"
              className="w-full bg-gradient-to-r from-[#D4A373] to-[#C69062] hover:from-[#C69062] hover:to-[#D4A373] text-[#1B1B1B] font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-[#D4A373] rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-[#D4A373] rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[#D4A373] rounded-full opacity-40 animate-ping"></div>
    </section>
  );
}