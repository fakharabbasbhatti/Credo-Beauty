import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaDirections } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMap = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="relative bg-[#1B1B1B] text-[#FFF4E6] py-16 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Find Our <span className="text-[#D4A373]">Location</span>
          </h2>
          <p className="text-sm md:text-lg text-[#F1E3D3] max-w-2xl mx-auto">
            Visit us at our conveniently located store. We're here to welcome you with the best beauty experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info Card */}
          <div className="lg:col-span-1 space-y-6" data-aos="fade-right">
            <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-lg border border-[#D4A373]/20">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#FFF4E6] flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#D4A373] text-2xl " />
                Store Information
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D4A373] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaMapMarkerAlt className="text-[#1B1B1B] text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#FFF4E6] mb-1">Our Address</h4>
                    <p className="text-[#F1E3D3] text-sm ">
                      Dilawar, Colony<br />
                      Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D4A373] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaPhoneAlt className="text-[#1B1B1B] text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#FFF4E6] mb-1">Phone</h4>
                    <p className="text-[#F1E3D3] text-sm">+92 012345678</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D4A373] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-[#1B1B1B] text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#FFF4E6] mb-1">Email</h4>
                    <p className="text-[#F1E3D3] text-sm">hello@examplemail.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-[#D4A373]/20">
                <h4 className="font-semibold text-[#FFF4E6] mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: FaFacebookF, color: "hover:bg-blue-600" },
                    { icon: FaInstagram, color: "hover:bg-pink-600" },
                    { icon: FaTwitter, color: "hover:bg-blue-400" },
                    { icon: FaLinkedinIn, color: "hover:bg-blue-700" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-[#1B1B1B] border border-[#D4A373]/30 flex items-center justify-center text-[#FFF4E6] transition-all duration-300 hover:scale-110 hover:border-transparent"
                    >
                      <social.icon className="text-sm" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Store Hours */}
            {/* <div className="bg-[#2A2A2A] p-6 rounded-2xl border border-[#D4A373]/20">
              <h4 className="font-bold text-[#FFF4E6] mb-4">Store Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-[#F1E3D3]">
                  <span>Mon - Fri</span>
                  <span className="text-[#D4A373]">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-[#F1E3D3]">
                  <span>Saturday</span>
                  <span className="text-[#D4A373]">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-[#F1E3D3]">
                  <span>Sunday</span>
                  <span className="text-[#D4A373]">11:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2" data-aos="fade-left" data-aos-delay="200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4A373]/30">
              {/* Map Header */}
              <div className="bg-[#2A2A2A] px-6 py-4 border-b border-[#D4A373]/20 flex justify-between items-center">
                <h3 className="text-sm md:text-xl font-semibold text-[#FFF4E6] flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#D4A373]" />
                  Our Location
                </h3>
                <a
                  href="https://maps.google.com/?q=Wickenburggasse+1,+1080+Wien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-sm md:text-xl items-center gap-2 px-4 py-2 bg-[#D4A373] hover:bg-[#C69062] text-[#1B1B1B] font-semibold rounded-lg transition-all duration-300"
                >
                  <FaDirections />
                  Get Directions
                </a>
              </div>

              {/* Google Map */}
              <div className="relative w-full h-96">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.7348798801772!2d16.35163787672688!3d48.211722345995994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07956d1df595%3A0x6463d8612555dd77!2sWickenburggasse%201%2C%201080%20Wien!5e0!3m2!1sen!2sat!4v1750836942491!5m2!1sen!2sat"
                  allowFullScreen=""
                  loading="lazy"
                  title="Credo Beauty Vienna Location"
                ></iframe>
              </div>

              {/* Map Overlay Effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#1B1B1B]/20 to-transparent"></div>
            </div>

            {/* Additional Info */}
            {/* <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {[
                { label: "Free Parking", value: "Available" },
                { label: "Metro Access", value: "2 min walk" },
                { label: "Wheelchair", value: "Accessible" }
              ].map((item, index) => (
                <div key={index} className="bg-[#2A2A2A] p-4 rounded-xl border border-[#D4A373]/10">
                  <div className="text-[#D4A373] font-bold text-lg">{item.value}</div>
                  <div className="text-[#F1E3D3] text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-6 h-6 bg-[#D4A373] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-4 h-4 bg-[#D4A373] rounded-full opacity-30 animate-bounce"></div>
    </section>
  );
};

export default ContactMap;