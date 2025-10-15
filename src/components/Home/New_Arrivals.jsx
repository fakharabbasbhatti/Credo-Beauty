import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar, FaShoppingBag, FaHeart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";

const images = [
  {
    id: 1,
    src: "/home/na1.avif",
    title: "Radiance Serum",
    desc: "Brightening serum with vitamin C for instant glow.",
    price: "$65",
  },
  {
    id: 2,
    src: "/home/na2.avif",
    title: "Luxury Face Cream",
    desc: "Rejuvenating cream infused with hyaluronic acid.",
    price: "$90",
  },
  {
    id: 3,
    src: "/home/na3.webp",
    title: "Velvet Lipstick",
    desc: "Soft-matte lipstick that defines elegance.",
    price: "$32",
  },
  {
    id: 4,
    src: "/home/na4.avif",
    title: "Luxury Perfume",
    desc: "Floral and amber notes that last all day.",
    price: "$150",
  },
  {
    id: 5,
    src: "/home/na5.avif",
    title: "Hydra Cleanser",
    desc: "Gentle cleanser that refreshes and purifies.",
    price: "$40",
  },
  {
    id: 6,
    src: "/home/na6.avif",
    title: "Glow Foundation",
    desc: "Lightweight foundation with radiant coverage.",
    price: "$55",
  },
  {
    id: 7,
    src: "/home/na7.webp",
    title: "Rose Mist Toner",
    desc: "Refreshing facial mist with rosewater essence.",
    price: "$38",
  },
  {
    id: 8,
    src: "/home/na8.avif",
    title: "Golden Eye Cream",
    desc: "Firms and brightens delicate under-eye skin.",
    price: "$85",
  },
];

const New_Arrivals = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-[#121212] py-20 px-6 text-[#FFF4E6] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-down">
          <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-[#F1E3D3] flex items-center justify-center gap-3">
            <FaStar className="text-[#D4A373] text-2xl" />
            New Arrivals
            <FaStar className="text-[#D4A373] text-2xl" />
          </h2>
          <p className="text-[#D4A373]/80 mt-3 text-lg">
            Discover our latest luxury beauty essentials
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="overflow-visible"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {images.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="relative bg-[#1E1E1E]/70 backdrop-blur-lg border border-[#F1E3D3]/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-[#D4A373]/30 transition-all duration-500 transform hover:-translate-y-2 group"
                data-aos="fade-up"
              >
                {/* Image */}
                <div className="overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  {/* New Badge with Icon */}
                  <div className="absolute top-3 left-3 bg-[#D4A373] text-[#1B1B1B] text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <FaStar className="text-[10px]" />
                    NEW
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 text-[#1B1B1B] p-2 rounded-full hover:bg-white transition-colors">
                      <FaHeart className="text-sm" />
                    </button>
                    <button className="bg-white/90 text-[#1B1B1B] p-2 rounded-full hover:bg-white transition-colors">
                      <FaShoppingBag className="text-sm" />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-2">
                  <h3 className="text-xl font-semibold text-[#F1E3D3]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#F1E3D3]/70">{item.desc}</p>
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-[#D4A373] font-bold text-lg">
                      {item.price}
                    </p>
                    <button className="bg-[#D4A373] text-[#1B1B1B] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#c1915a] transition-colors flex items-center gap-2">
                      <FaShoppingBag />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default New_Arrivals;