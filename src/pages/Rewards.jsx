import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGift, FaCrown, FaCoins, FaStar, FaArrowRight,FaGem } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Rewards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A1E17] text-[#FFF4E6] py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#D4A37315,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#D4A37310,_transparent_50%)]"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#D4A373] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#8B5A2B] rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse-slower"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#D4A373] rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float 15s infinite ${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pt-10">
        {/* Enhanced Breadcrumb */}
        <div data-aos="fade-right" className="flex items-center space-x-2 text-sm text-[#F1E3D3] mb-12">
          <Link
            to="/"
            className="flex items-center text-[#F1E3D3] hover:text-[#D4A373] transition-all duration-300 hover:translate-x-1"
          >
            <span>Home</span>
          </Link>
          <span className="text-[#D4A373]">/</span>
          <span className="text-[#D4A373] font-semibold flex items-center">
            Rewards
            <FaGem className="ml-2 text-yellow-400 text-xs" />
          </span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
          <div data-aos="fade-right" className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#D4A373]/10 border border-[#D4A373]/30 text-[#D4A373] text-sm font-medium mb-4">
              <FaCrown className="mr-2" />
              Premium Loyalty Program
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Earn <span className="text-[#D4A373] bg-gradient-to-r from-[#D4A373] to-[#F1E3D3] bg-clip-text text-transparent">Rewards</span> That Shine
            </h1>
            <p className="text-lg text-[#F1E3D3]/80 leading-relaxed">
              Join our exclusive loyalty program and unlock premium rewards every time you shop. 
              The more you indulge, the more luxurious the perks become.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/login" className="group relative bg-gradient-to-r from-[#D4A373] to-[#E6B98A] text-black font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#D4A373]/30 transition-all duration-300 transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  Join Now
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link to="/" className="text-center md:text-start border-2 border-[#D4A373]/50 text-[#D4A373] font-semibold px-8 py-4 rounded-xl hover:bg-[#D4A373]/10 transition-all duration-300">
                Learn More
              </Link>
            </div>
          </div>

          <div data-aos="fade-left" className="relative">
            <div className="relative bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-3xl p-8 border border-[#D4A373]/20 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#D4A373] rounded-full flex items-center justify-center">
                <FaStar className="text-black text-sm" />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4A373] to-[#8B5A2B] rounded-xl flex items-center justify-center">
                    <FaCrown className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Gold Member</h3>
                    <p className="text-sm text-[#F1E3D3]/60">2,450 Points</p>
                  </div>
                </div>
                <div className="w-full bg-[#3A3A3A] rounded-full h-3">
                  <div className="bg-gradient-to-r from-[#D4A373] to-[#E6B98A] h-3 rounded-full w-3/4"></div>
                </div>
                <p className="text-sm text-[#F1E3D3]/60">750 points to next tier</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reward Cards */}
        <div data-aos="fade-up" className="mb-20 lg:mb-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-[#F1E3D3]/60 max-w-2xl mx-auto">
              Simple steps to unlock extraordinary rewards and elevate your shopping experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: <FaGift className="text-2xl" />,
                title: "Earn Points",
                text: "Collect points with every purchase and watch your rewards grow",
                gradient: "from-purple-500/20 to-pink-500/20",
                border: "border-purple-500/30"
              },
              {
                icon: <FaCrown className="text-2xl" />,
                title: "Unlock Tiers",
                text: "Reach new membership levels for exclusive VIP benefits",
                gradient: "from-yellow-500/20 to-orange-500/20",
                border: "border-yellow-500/30"
              },
              {
                icon: <FaCoins className="text-2xl" />,
                title: "Redeem Rewards",
                text: "Exchange your points for special gifts and experiences",
                gradient: "from-green-500/20 to-emerald-500/20",
                border: "border-green-500/30"
              },
              {
                icon: <FaStar className="text-2xl" />,
                title: "Exclusive Access",
                text: "Get early access to new collections and limited editions",
                gradient: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-500/30"
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${item.gradient} backdrop-blur-sm border ${item.border} rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-500 hover:shadow-xl`}
              >
                <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#D4A373]">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[#F1E3D3]/70 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div data-aos="fade-up" className="mb-20 lg:mb-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Member Benefits</h2>
            <p className="text-lg text-[#F1E3D3]/60 max-w-2xl mx-auto">
              Exclusive perks designed to make every moment special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                count: "01",
                title: "Exclusive Discounts",
                desc: "Save more with personalized offers designed just for you",
                icon: <FaGift className="text-4xl text-[#D4A373]" />
              },
              {
                count: "02",
                title: "Birthday Gifts",
                desc: "Celebrate your special day with luxury surprises",
                icon: <FaCrown className="text-4xl text-[#D4A373]" />,
              },
              {
                count: "03",
                title: "Priority Access",
                desc: "Get first access to limited editions and premium launches",
                icon: <FaStar className="text-4xl text-[#D4A373]" />,
              },
              {
                count: "04",
                title: "Free Shipping",
                desc: "Enjoy complimentary shipping on all your orders",
                icon: <FaShippingFast className="text-4xl text-[#D4A373]" />,
              },
              {
                count: "05",
                title: "Double Points",
                desc: "Earn bonus points during special promotion periods",
                icon: <FaCoins className="text-4xl text-[#D4A373]" />,
              },
              {
                count: "06",
                title: "VIP Events",
                desc: "Access exclusive events and private shopping sessions",
                icon: <FaGem className="text-4xl text-[#D4A373]" />
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4A373]/20 rounded-2xl p-6 hover:border-[#D4A373]/40 hover:shadow-xl hover:shadow-[#D4A373]/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-bold text-[#D4A373]/30 group-hover:text-[#D4A373]/50 transition-colors duration-300">
                    {item.count}
                  </span>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-[#F1E3D3]/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div data-aos="zoom-in" className="relative">
          <div className="relative bg-gradient-to-r from-[#D4A373]/10 to-[#8B5A2B]/10 border border-[#D4A373]/30 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4A373] to-[#8B5A2B]"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4A373] rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#8B5A2B] rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="text-4xl font-bold text-white">
                Ready to Experience the Luxury?
              </h3>
              <p className="text-lg text-[#F1E3D3]/80 leading-relaxed">
                Join our rewards family today and elevate every shopping experience with perks, 
                exclusives, and surprises that reflect your unique style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/signup" className="group bg-gradient-to-r from-[#D4A373] to-[#E6B98A] text-black font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#D4A373]/40 transition-all duration-300 transform hover:-translate-y-1 ">
                  <span className="flex items-center justify-center">
                    Sign Up for Rewards
                    <FaArrowRight className=" hidden md:flex ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <Link to="/contact" className="border-2 border-[#D4A373]/50 text-[#D4A373] font-semibold px-8 py-4 rounded-xl hover:bg-[#D4A373]/10 transition-all duration-300 text-nowrap">
                  View Rewards Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slower {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Rewards;