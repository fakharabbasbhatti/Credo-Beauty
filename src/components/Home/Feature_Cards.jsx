import React, { useEffect, useState } from "react";
import {
  FaPumpSoap,
  FaSprayCan,
  FaSpa,
  FaFeatherAlt,
  FaRegHeart,
  FaCrown,
  FaStar,
  FaShoppingBag
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Feature_Cards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      easing: "ease-in-out", 
      once: true,
      mirror: false 
    });
  }, []);

  const cards = [
    {
      id: 1,
      icon: <FaPumpSoap className="group-hover:scale-110 transition-transform duration-300" />,
      title: "Radiance Serum",
      desc: "Infused with Vitamin C and gold extracts to boost your natural glow.",
      price: "$89.99",
      rating: 4.9,
      aosCard: "fade-up",
      aosTitle: "fade-right",
      aosDesc: "fade-left",
    },
    {
      id: 2,
      icon: <FaSpa className="group-hover:scale-110 transition-transform duration-300" />,
      title: "Luxury Face Cream",
      desc: "Rejuvenating hydration with botanical extracts for silky skin.",
      price: "$72.50",
      rating: 4.8,
      aosCard: "zoom-in",
      aosTitle: "fade-down",
      aosDesc: "fade-up",
    },
    {
      id: 3,
      icon: <FaSprayCan className="group-hover:scale-110 transition-transform duration-300" />,
      title: "Floral Perfume Mist",
      desc: "A delicate blend of rose and amber for timeless elegance.",
      price: "$65.00",
      rating: 4.7,
      aosCard: "flip-left",
      aosTitle: "zoom-in",
      aosDesc: "zoom-out",
    },
    {
      id: 4,
      icon: <FaFeatherAlt className="group-hover:scale-110 transition-transform duration-300" />,
      title: "Gentle Cleanser",
      desc: "Soft foaming formula that purifies without stripping moisture.",
      price: "$45.99",
      rating: 4.9,
      aosCard: "flip-right",
      aosTitle: "fade-up",
      aosDesc: "fade-down",
    },
  ];

  return (
    <section className="bg-[#1B1B1B] py-20 px-6 text-[#FFF4E6] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-[#D4A373] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-[#D4A373] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-[#FFF4E6] rounded-full"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <div 
          className="inline-flex items-center gap-2 bg-[#D4A373]/20 backdrop-blur-sm border border-[#D4A373]/30 px-6 py-3 rounded-full mb-6"
          data-aos="fade-down"
        >
          <FaStar className="text-[#D4A373]" />
          <span className="text-[#F1E3D3] font-medium">Premium Collection</span>
          <FaStar className="text-[#D4A373]" />
        </div>
        <h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          data-aos="fade-up"
        >
          Our <span className="text-[#D4A373]">Featured</span> Products
        </h2>
        <p 
          className="text-[#F1E3D3] text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover our carefully curated collection of premium clean beauty products
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {cards.map((card, index) => (
          <div
            key={card.id}
            data-aos={card.aosCard}
            data-aos-delay={index * 100}
            className="group relative bg-gradient-to-b from-[#222222] to-[#1B1B1B] border border-[#FFF4E6]/10 rounded-2xl p-8 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4A373]/15 hover:scale-[1.02] overflow-hidden"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background Pattern on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4A373]/5 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#D4A373]/5 rounded-full translate-y-8 -translate-x-8"></div>
            </div>

            {/* Icon Container */}
            <div
              className="relative flex justify-center mb-6"
              data-aos={card.aosTitle}
              data-aos-delay="100"
            >
              <div className="p-4 bg-gradient-to-br from-[#2A2A2A] to-[#1B1B1B] border border-[#D4A373]/20 rounded-2xl group-hover:border-[#D4A373]/40 transition-all duration-300">
                <div className="text-[#D4A373] group-hover:text-[#C69062] transition-colors duration-500">
                  {card.icon}
                </div>
              </div>
              
              {/* Floating Crown */}
              <FaCrown
                className="absolute -top-2 -right-2 text-[#D4A373] text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-12"
              />
            </div>

            {/* Rating */}
            <div 
              className="flex justify-center items-center gap-1 mb-3"
              data-aos="fade-in"
              data-aos-delay="300"
            >
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i}
                  className={`text-sm ${
                    i < Math.floor(card.rating) 
                      ? "text-[#D4A373]" 
                      : "text-[#F1E3D3]/30"
                  }`}
                />
              ))}
              <span className="text-[#F1E3D3] text-sm ml-2">{card.rating}</span>
            </div>

            {/* Title */}
            <h3
              className="text-xl font-semibold mb-3 tracking-wide group-hover:text-[#FFF4E6] transition-colors duration-300"
              data-aos={card.aosTitle}
              data-aos-delay="200"
            >
              {card.title}
            </h3>

            {/* Description */}
            <p
              className="text-[#F1E3D3] text-sm leading-relaxed mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              data-aos={card.aosDesc}
              data-aos-delay="300"
            >
              {card.desc}
            </p>

            {/* Price */}
            <div 
              className="text-[#D4A373] font-bold text-lg mb-4"
              data-aos="fade-in"
              data-aos-delay="400"
            >
              {card.price}
            </div>

            {/* CTA Button */}
            <button
              className="w-full py-3 bg-gradient-to-r from-[#D4A373] to-[#C69062] text-[#1B1B1B] font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4A373]/25 flex items-center justify-center gap-2 group/btn"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <FaShoppingBag className="group-hover/btn:scale-110 transition-transform" />
              Add to Cart
            </button>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-[#D4A373] to-transparent transition-all duration-700 rounded-2xl blur-xl -z-10"></div>
            
            {/* Border Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 border border-[#D4A373]/30 rounded-2xl transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div 
        className="text-center mt-12"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <button className="px-8 py-3 border-2 border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-[#1B1B1B] font-semibold rounded-full transition-all duration-300 inline-flex items-center gap-2">
          <FaRegHeart />
          View All Products
        </button>
      </div>
    </section>
  );
};

export default Feature_Cards;