import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  {
    id: 1,
    src: "https://source.unsplash.com/random/400x400?fashion",
    title: "Elegant Coat",
    desc: "Soft wool coat with tailored fit.",
    price: "$120",
  },
  {
    id: 2,
    src: "https://source.unsplash.com/random/400x400?watch",
    title: "Luxury Watch",
    desc: "Timeless piece with leather strap.",
    price: "$250",
  },
  {
    id: 3,
    src: "https://source.unsplash.com/random/400x400?shoes",
    title: "Classic Shoes",
    desc: "Comfort meets elegance.",
    price: "$90",
  },
  {
    id: 4,
    src: "https://source.unsplash.com/random/400x400?handbag",
    title: "Leather Handbag",
    desc: "Crafted with precision and care.",
    price: "$180",
  },
  {
    id: 5,
    src: "https://source.unsplash.com/random/400x400?sunglasses",
    title: "Designer Sunglasses",
    desc: "Stylish UV protection.",
    price: "$75",
  },
  {
    id: 6,
    src: "https://source.unsplash.com/random/400x400?perfume",
    title: "Signature Perfume",
    desc: "A fragrance to remember.",
    price: "$130",
  },
  {
    id: 7,
    src: "https://source.unsplash.com/random/400x400?jacket",
    title: "Denim Jacket",
    desc: "Casual yet classy.",
    price: "$110",
  },
  {
    id: 8,
    src: "https://source.unsplash.com/random/400x400?heels",
    title: "Elegant Heels",
    desc: "Perfect for every occasion.",
    price: "$95",
  },
];

const New_Arrivals = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative bg-[#1B1B1B] py-16 px-6 text-[#FFF4E6]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2
            className="text-3xl font-semibold tracking-wide"
            data-aos="fade-right"
          >
            New Arrivals
          </h2>
          <div className="flex gap-3" data-aos="fade-left">
            <div
              className="swiper-button-prev-custom cursor-pointer text-[#F1E3D3] hover:text-[#C69062] transition"
              id="prevBtn"
            >
              <FaChevronLeft size={24} />
            </div>
            <div
              className="swiper-button-next-custom cursor-pointer text-[#F1E3D3] hover:text-[#C69062] transition"
              id="nextBtn"
            >
              <FaChevronRight size={24} />
            </div>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: "#nextBtn",
            prevEl: "#prevBtn",
          }}
          pagination={{ clickable: true }}
          data-aos="fade-up"
          className="pb-12"
        >
          {images.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative bg-[#1B1B1B] border border-[#F1E3D3]/20 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 group">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-[#D4A373] text-[#1B1B1B] text-sm font-semibold px-3 py-1 rounded-full">
                    New
                  </span>
                </div>

                {/* Info */}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-[#FFF4E6]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#F1E3D3]/80">{item.desc}</p>
                  <p className="text-[#D4A373] font-bold text-base">
                    {item.price}
                  </p>
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
