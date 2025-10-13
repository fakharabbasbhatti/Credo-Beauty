import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const footerLinks = [
    {
      title: "Quick Help",
      links: [
        "Chat Live",
        "Contact Credo",
        "FAQs",
        "Returns and Exchanges",
        "Orders and Shipping",
      ],
    },
    {
      title: "Account",
      links: ["My Account", "Wishlist", "Rewards"],
    },
    {
      title: "Stores & Services",
      links: ["Store Locator", "Beauty Services", "Events & Workshops"],
    },
    {
      title: "Discounts",
      links: ["Special Offers", "Refer a Friend", "Gift Cards"],
    },
    {
      title: "About Us",
      links: [
        "The Credo Clean Standard",
        "Our Brands",
        "Credo for Change",
        "Sustainability Pact",
        "Careers",
      ],
    },
    {
      title: "Charitable Partnerships",
      links: ["Lipstick Angels", "Environmental Initiatives"],
    },
  ];

  const socialIcons = [
    { icon: FaFacebookF, url: "#" },
    { icon: FaInstagram, url: "#" },
    { icon: FaTwitter, url: "#" },
    { icon: FaLinkedinIn, url: "#" },
  ];

  return (
    <footer className="relative bg-[#1B1B1B] text-[#F1E3D3] font-sans overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#FFF4E6_1px,transparent_1px),linear-gradient(90deg,#FFF4E6_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-6">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 pb-16 mb-8 border-b border-[#D4A373]/30">
          {/* LEFT SIDE: BRAND & NEWSLETTER */}
          <div className="w-full lg:w-2/5 space-y-8">
            {/* Logo */}
            <div 
              className="group cursor-pointer"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <div className="tracking-[0.3em] text-4xl font-bold uppercase text-[#D4A373]">
                credo
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-8 h-px bg-[#D4A373]"></div>
                <span className="text-sm font-light tracking-widest text-[#F1E3D3]">
                  BEAUTY REDEFINED
                </span>
                <div className="w-8 h-px bg-[#D4A373]"></div>
              </div>
            </div>

            <p 
              className="text-lg text-[#F1E3D3]/90 leading-relaxed max-w-md"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Join our community for{" "}
              <span className="font-semibold text-[#FFF4E6]">
                exclusive offers
              </span>
              , clean beauty insights, and early access to{" "}
              <span className="font-semibold text-[#FFF4E6]">
                new product launches.
              </span>
            </p>

            {/* Email Signup */}
            <div className="space-y-4">
              <div 
                className="group relative"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <form className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#1B1B1B] border border-[#D4A373]/40 rounded-2xl max-w-md w-full overflow-hidden focus-within:border-[#D4A373] focus-within:shadow-md focus-within:shadow-[#D4A373]/30 transition-all duration-300">
                  <div className="flex items-center flex-1 px-4 py-3 sm:py-0">
                    <HiOutlineMail 
                      className="text-[#F1E3D3]/60 text-xl mr-3" 
                      data-aos="fade-right"
                      data-aos-delay="350"
                    />
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 bg-transparent text-[#FFF4E6] placeholder-[#F1E3D3]/60 outline-none text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#D4A373] text-[#1B1B1B] font-semibold px-6 py-3 sm:py-4 rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl hover:bg-[#C69062] transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Subscribe
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Phone Signup */}
              <div 
                className="group relative"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <form className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#1B1B1B] border border-[#D4A373]/40 rounded-2xl max-w-md w-full overflow-hidden focus-within:border-[#D4A373] focus-within:shadow-md focus-within:shadow-[#D4A373]/30 transition-all duration-300">
                  <div className="flex items-center flex-1 px-4 py-3 sm:py-0">
                    <HiPhone 
                      className="text-[#F1E3D3]/60 text-xl mr-3" 
                      data-aos="fade-right"
                      data-aos-delay="450"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile number (U.S. only)"
                      className="flex-1 bg-transparent text-[#FFF4E6] placeholder-[#F1E3D3]/60 outline-none text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#D4A373] text-[#1B1B1B] font-semibold px-6 py-3 sm:py-4 rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl hover:bg-[#C69062] transform hover:scale-105 transition-all duration-200"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>

            <p 
              className="text-xs text-[#F1E3D3]/60 leading-relaxed max-w-md pt-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              By subscribing, you agree to our marketing communications and
              privacy terms. Msg & data rates may apply.{" "}
              <a
                href="#"
                className="underline text-[#D4A373] hover:text-[#C69062] transition-colors"
              >
                Learn more
              </a>
              .
            </p>
          </div>

          {/* RIGHT SIDE: LINKS GRID */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {footerLinks.map((section, index) => (
              <div 
                key={section.title} 
                className="group"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FFF4E6] mb-4 flex items-center gap-2">
                  <div 
                    className="w-2 h-2 bg-[#D4A373] rounded-full group-hover:scale-125 transition-transform"
                    data-aos="zoom-in"
                    data-aos-delay={400 + (index * 100)}
                  ></div>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-[#F1E3D3]/80 hover:text-[#D4A373] transition-all duration-200 hover:translate-x-1 flex items-center gap-1"
                        data-aos="fade-right"
                        data-aos-delay={500 + (index * 100) + (linkIndex * 50)}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
  {/* COPYRIGHT */}
  <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
    <span className="text-xs text-[#F1E3D3]/70">
      © 2025 Credo Beauty. All Rights Reserved.
    </span>
    <div className="flex flex-wrap justify-center gap-4 text-xs">
      {[
        "Accessibility",
        "Privacy Policy",
        "CCPA Notice",
        "Terms of Use",
        "Sitemap",
        "Blog",
      ].map((item) => (
        <a
          key={item}
          href="#"
          className="text-[#F1E3D3]/70 hover:text-[#D4A373] hover:underline transition-colors duration-200"
        >
          {item}
        </a>
      ))}
    </div>
  </div>

  {/* SOCIAL ICONS */}
  <div className="flex space-x-3">
    {socialIcons.map((item, i) => (
      <a
        key={i}
        href={item.url}
        className="p-3 bg-[#D4A373]/10 border border-[#D4A373]/30 rounded-xl hover:border-[#D4A373]/70 hover:bg-[#D4A373]/20 transform hover:scale-110 transition-all duration-200"
        aria-label={`Follow us on ${item.icon.name}`}
      >
        <item.icon className="text-lg text-[#FFF4E6] hover:text-[#C69062] transition-colors" />
      </a>
    ))}
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;