import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

const Wishlist = () => {
  const [activeTab, setActiveTab] = useState("saved"); // default view

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Content Data
  const content = {
    saved: {
      title: "Love It? Add to My Wishlist 💖",
      desc: "Keep track of your beauty favorites effortlessly across all your devices. Whether you’re browsing on your phone or desktop, your Wishlist keeps everything in one elegant place.",
      buttonText: "Start Shopping",
      icon: <FaShoppingBag />,
      link: "/services",
    },
    recommended: {
      title: "No Products Saved Yet 🛍️",
      desc: "Your wishlist is waiting to be filled! Save items from the cart page and come back later to shop your handpicked favorites.",
      buttonText: "Open Cart Page",
      icon: <FaHeart />,
      link: "/",
    },
  };

  return (
    <section className="relative bg-[#1B1B1B] text-[#FFF4E6] py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B] via-[#2A2A2A] to-[#1B1B1B] opacity-95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#D4A37322,transparent_60%)]"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4A37333] rounded-full blur-3xl"></div>

      <div className="relative z-10 pt-8 flex flex-col items-center text-center space-y-10">
        {/* Breadcrumb */}
        <div
          data-aos="fade-right"
          className="self-start  text-sm text-[#F1E3D3] mb-4"
        >
          <Link
            to="/"
            className="text-[#F1E3D3] hover:text-[#D4A373] transition-colors duration-300"
          >
            Home
          </Link>{" "}
          / <span className="text-[#D4A373] font-semibold">Wishlist</span>
        </div>

        {/* Tabs */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center gap-4 mb-6 pt-4"
        >
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-8 md:px-6 py-3 rounded-full font-semibold border transition-all duration-300 flex items-center gap-2 ${
              activeTab === "saved"
                ? "bg-[#D4A373] text-black border-[#D4A373]"
                : "bg-transparent border-[#D4A373]/50 text-[#FFF4E6] hover:bg-[#C69062] hover:text-black"
            }`}
          >
            <FaHeart className="text-lg" /> Saved Items
          </button>

          <button
            onClick={() => setActiveTab("recommended")}
            className={`px-6 py-3 rounded-full font-semibold border transition-all duration-300 flex items-center gap-2 ${
              activeTab === "recommended"
                ? "bg-[#D4A373] text-black border-[#D4A373]"
                : "bg-transparent border-[#D4A373]/50 text-[#FFF4E6] hover:bg-[#C69062] hover:text-black"
            }`}
          >
            <FaShoppingBag className="text-lg" /> Saved For Later
          </button>
        </div>

        {/* Active Content */}
        <div
          key={activeTab}
          data-aos="zoom-in-up"
          className="max-w-3xl mx-auto text-center space-y-6 transition-all duration-500"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4A373] leading-snug">
            {content[activeTab].title}
          </h2>
          <p className="text-[#F1E3D3] text-base sm:text-lg leading-relaxed px-2 sm:px-4">
            {content[activeTab].desc}
          </p>

          {/* Link Button */}
          <Link
            to={content[activeTab].link}
            className="mt-4 inline-flex items-center justify-center gap-2 bg-[#D4A373] text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#C69062] hover:shadow-[0_0_15px_#D4A37399] transition-all duration-300 text-sm sm:text-base"
          >
            {content[activeTab].icon}
            {content[activeTab].buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
