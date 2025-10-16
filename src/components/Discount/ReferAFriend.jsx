import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPaperPlane } from "react-icons/fa";

const ReferAFriend = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-[#1B1B1B] text-[#FFF4E6] py-16 sm:py-20 lg:py-24 px-5 sm:px-10 lg:px-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B1B1B] via-[#2A2A2A] to-[#1B1B1B] opacity-95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#D4A37322,transparent_60%)]"></div>

      <div className="relative z-10 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center space-y-6 order-2 lg:order-1"
        >
          {/* Breadcrumb */}
          <div className="text-sm text-[#F1E3D3] tracking-wide">
            <Link
              to="/"
              className="text-[#F1E3D3] hover:text-[#D4A373] transition-colors duration-300"
            >
              Home
            </Link>{" "}
            / <span className="text-[#D4A373] font-semibold">Refer a Friend</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4A373] leading-snug">
            Refer a Friend & <br className="hidden sm:block" /> Earn Exclusive Rewards
          </h2>

          {/* Description */}
          <p className="text-[#F1E3D3] text-base sm:text-lg leading-relaxed max-w-lg">
            Invite your friends to experience the elegance of beauty and luxury.
            When they join, both of you enjoy exclusive offers — because sharing
            style is always in fashion.
          </p>

          {/* Email Input + Button */}
          <div
            data-aos="fade-up"
            className="flex flex-col sm:flex-row items-center gap-3 mt-4 w-full"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="w-full sm:flex-1 px-4 py-3 bg-[#ffffff10] border border-[#D4A373]/50 text-[#FFF4E6] rounded-xl focus:outline-none focus:border-[#D4A373] placeholder-[#F1E3D3]/70 backdrop-blur-md transition-all duration-300"
            />
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4A373] text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#C69062] hover:shadow-[0_0_15px_#D4A37399] transition-all duration-300">
              <FaPaperPlane /> Refer Now
            </button>
          </div>

          {/* Subtext */}
          <p className="text-xs text-[#F1E3D3]/70 italic mt-2">
            *Your email will only be used for referral purposes.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group w-full max-w-sm sm:max-w-md md:max-w-lg">
            {/* Soft Glow Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4A373] to-[#C69062] rounded-2xl blur-md opacity-25 group-hover:opacity-40 transition-all duration-700"></div>

            <img
              src="/home/raf.webp"
              alt="Refer a Friend"
              className="relative w-full h-auto rounded-2xl shadow-xl border border-[#D4A373]/40 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferAFriend;
