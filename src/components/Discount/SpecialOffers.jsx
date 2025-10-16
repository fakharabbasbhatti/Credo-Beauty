import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShoppingBag } from "react-icons/fa";

const SpecialOffer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const offers = [
    {
      id: 1,
      image: "/home/p1.avif",
      badge: "-30%",
      title: "Radiance Serum",
      desc: "Brightening serum infused with vitamin C for glowing skin.",
      price: "$189",
    },
    {
      id: 2,
      image: "/home/p3.avif",
      badge: "-25%",
      title: "Luxury Face Cream",
      desc: "Deep hydration cream that rejuvenates and smooths fine lines.",
      price: "$75",
    },
    {
      id: 3,
      image: "/home/p5.avif",
      badge: "-15%",
      title: "Velvet Lipstick",
      desc: "Richly pigmented lipstick with a soft-matte finish.",
      price: "$49",
    },
    {
      id: 4,
      image: "/home/p7.avif",
      badge: "-40%",
      title: "Luxury Perfume",
      desc: "Floral and amber notes in a timeless fragrance blend.",
      price: "$220",
    },
    {
      id: 5,
      image: "/home/p9.webp",
      badge: "-20%",
      title: "Hydra Cleanser",
      desc: "Gentle foaming cleanser with aloe and hyaluronic acid.",
      price: "$150",
    },
    {
      id: 6,
      image: "/home/p11.avif",
      badge: "-10%",
      title: "Elegant Sunglasses",
      desc: "Lightweight foundation that evens tone with radiant coverage.",
      price: "$95",
    },
    {
      id: 7,
      image: "/home/p13.webp",
      badge: "-50%",
      title: "Rose Mist Toner",
      desc: "Refreshing facial mist enriched with rosewater and antioxidants.",
      price: "$130",
    },
    {
      id: 8,
      image: "/home/p15.webp",
      badge: "-35%",
      title: "Golden Eye Cream",
      desc: "Luxe under-eye cream that firms and brightens dark circles.",
      price: "$39",
    },
  ];

  return (
    <section className="relative bg-[#1B1B1B] text-[#FFF4E6] py-16 px-5 md:px-16 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B] via-[#2A2A2A] to-[#1B1B1B] opacity-90"></div>

      <div className="relative z-10 pt-8 md:pt-16">
        {/* Breadcrumb */}
        <div data-aos="fade-right" className="mb-6 text-sm text-[#F1E3D3]">
          <Link
            to="/"
            className="text-[#F1E3D3] hover:text-[#D4A373] transition-colors duration-300"
          >
            Home
          </Link>{" "}
          / <span className="text-[#D4A373] font-semibold">Special Offer</span>
        </div>

        {/* Header */}
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6"
        >
          <h2 className="text-3xl sm:text-4xl  font-bold text-[#D4A373] tracking-wide">
            Exclusive Special Offers
          </h2>
          <p className="text-[#F1E3D3] md:w-1/2 text-sm sm:text-base leading-relaxed">
            Discover limited-time luxury deals from Credo Beauty — from radiant
            skincare to high-end fashion accessories. Our curated selections
            bring you elegance and indulgence at irresistible prices.
          </p>
        </div>

        {/* Offers Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="zoom-in"
        >
          {offers.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#1B1B1B]/70 border border-[#D4A373]/30 rounded-2xl overflow-hidden shadow-md hover:shadow-[#D4A373]/40 hover:shadow-lg transition-all duration-500 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <span className="absolute top-2 right-2 bg-[#D4A373] text-black text-sm font-bold px-3 py-1 rounded-full shadow-md">
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col items-start space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-[#FFF4E6] group-hover:text-[#D4A373] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#F1E3D3]/80 leading-snug">
                  {item.desc}
                </p>
                <p className="text-xl font-bold text-[#D4A373]">{item.price}</p>
                <Link to="/services" className="mt-3 inline-flex items-center gap-2 bg-[#D4A373] text-black px-5 py-2.5 rounded-2xl font-semibold hover:bg-[#C69062] hover:shadow-[0_0_10px_#D4A373] transition-all duration-300">
                  <FaShoppingBag /> Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
