import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingBag,
  FaHeart,
  FaEye,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    images: [
      "/home/p1.avif",
      "/home/p2.avif",
    ],
    title: "Radiance Serum",
    desc: "Brightening serum infused with vitamin C for glowing skin.",
    price: "$65",
    originalPrice: "$85",
    badges: ["New", "Bestseller"],
    rating: 4.5,
    reviews: 220,
    inStock: true,
  },
  {
    id: 2,
    images: [
      "/home/p3.avif",
      "/home/p4.avif",
    ],
    title: "Luxury Face Cream",
    desc: "Deep hydration cream that rejuvenates and smooths fine lines.",
    price: "$90",
    originalPrice: "$120",
    badges: ["Award-winning"],
    rating: 5,
    reviews: 310,
    inStock: true,
  },
  {
    id: 3,
    images: [
      "/home/p5.avif",
      "/home/p6.avif",
    ],
    title: "Velvet Lipstick",
    desc: "Richly pigmented lipstick with a soft-matte finish.",
    price: "$32",
    badges: ["Bestseller"],
    rating: 4,
    reviews: 185,
    inStock: true,
  },
  {
    id: 4,
    images: [
      "/home/p7.avif",
      "/home/p8.avif",
    ],
    title: "Luxury Perfume",
    desc: "Floral and amber notes in a timeless fragrance blend.",
    price: "$150",
    originalPrice: "$180",
    badges: ["Award-winning", "New"],
    rating: 5,
    reviews: 400,
    inStock: false,
  },
  {
    id: 5,
    images: [
      "/home/p9.webp",
      "/home/p10.avif",
    ],
    title: "Hydra Cleanser",
    desc: "Gentle foaming cleanser with aloe and hyaluronic acid.",
    price: "$40",
    badges: ["New"],
    rating: 3.5,
    reviews: 95,
    inStock: true,
  },
  {
    id: 6,
    images: [
      "/home/p11.avif",
      "/home/p12.avif",
    ],
    title: "Glow Foundation",
    desc: "Lightweight foundation that evens tone with radiant coverage.",
    price: "$55",
    originalPrice: "$70",
    badges: ["Bestseller"],
    rating: 4.5,
    reviews: 270,
    inStock: true,
  },
  {
    id: 7,
    images: [
      "/home/p13.webp",
      "/home/p14.webp",
    ],
    title: "Rose Mist Toner",
    desc: "Refreshing facial mist enriched with rosewater and antioxidants.",
    price: "$38",
    badges: ["New", "Bestseller"],
    rating: 4,
    reviews: 160,
    inStock: true,
  },
  {
    id: 8,
    images: [
      "/home/p15.webp",
      "/home/p16.avif",
    ],
    title: "Golden Eye Cream",
    desc: "Luxe under-eye cream that firms and brightens dark circles.",
    price: "$85",
    originalPrice: "$100",
    badges: ["Award-winning"],
    rating: 4.5,
    reviews: 240,
    inStock: true,
  },
];

const Best_Sellers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
      disable: window.innerWidth < 768,
    });
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating))
        stars.push(<FaStar key={i} className="text-[#FFD700]" />);
      else if (i - rating < 1)
        stars.push(<FaStarHalfAlt key={i} className="text-[#FFD700]" />);
      else stars.push(<FaRegStar key={i} className="text-[#FFD700]" />);
    }
    return stars;
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "New":
        return "bg-[#D4A373] text-[#1B1B1B]";
      case "Bestseller":
        return "bg-[#C69062] text-[#FFF4E6]";
      case "Award-winning":
        return "bg-gradient-to-r from-[#D4A373] to-[#C69062] text-[#1B1B1B]";
      default:
        return "bg-[#F1E3D3] text-[#1B1B1B]";
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#1B1B1B] to-[#141414] py-12 md:py-20 px-4 sm:px-6 text-[#FFF4E6] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-5 md:left-20 w-10 h-10 md:w-20 md:h-20 border border-[#D4A373] rounded-full"></div>
        <div className="absolute bottom-10 right-5 md:right-20 w-8 h-8 md:w-16 md:h-16 border border-[#D4A373] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div
              className="inline-flex items-center gap-2 bg-[#D4A373]/20 backdrop-blur-sm border border-[#D4A373]/30 px-4 py-2 rounded-full mb-4"
              data-aos="fade-down"
            >
              <FaStar className="text-[#D4A373] text-sm" />
              <span className="text-[#F1E3D3] text-sm font-medium">
                Best Sellers
              </span>
              <FaStar className="text-[#D4A373] text-sm" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mb-3"
              data-aos="fade-right"
            >
              Our <span className="text-[#D4A373]">Featured</span> Collection
            </h2>
            <p
              className="text-[#F1E3D3] text-base md:text-lg max-w-2xl mx-auto md:mx-0"
              data-aos="fade-right"
              data-aos-delay="100"
            >
Discover must-have beauty and fashion finds designed to elevate your daily glow.            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden sm:flex gap-3" data-aos="fade-left">
            <div
              id="prevBtn"
              className="swiper-button-prev-custom cursor-pointer bg-[#2A2A2A] border border-[#D4A373]/30 rounded-full p-3 text-[#F1E3D3] hover:text-[#D4A373] hover:border-[#D4A373] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#D4A373]/20"
            >
              <FaChevronLeft size={20} />
            </div>
            <div
              id="nextBtn"
              className="swiper-button-next-custom cursor-pointer bg-[#2A2A2A] border border-[#D4A373]/30 rounded-full p-3 text-[#F1E3D3] hover:text-[#D4A373] hover:border-[#D4A373] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#D4A373]/20"
            >
              <FaChevronRight size={20} />
            </div>
          </div>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: "#nextBtn",
              prevEl: "#prevBtn",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              480: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-12"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative bg-gradient-to-b from-[#222222] to-[#1B1B1B] border border-[#FFF4E6]/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#D4A373]/15 transition-all duration-500 group h-full flex flex-col"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden flex-shrink-0">
                    <img
                      src={
                        hoveredIndex === index
                          ? product.images[1]
                          : product.images[0]
                      }
                      alt={product.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-105 transition-all duration-700"
                    />

                    {/* Out of Stock Overlay */}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-[#1B1B1B]/80 flex items-center justify-center">
                        <span className="bg-[#D4A373] text-[#1B1B1B] px-4 py-2 rounded-full font-semibold text-sm">
                          Out of Stock
                        </span>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className={`p-2 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                          favorites[product.id]
                            ? "bg-[#D4A373] border-[#D4A373] text-[#1B1B1B]"
                            : "bg-[#1B1B1B]/80 border-[#FFF4E6]/20 text-[#FFF4E6] hover:bg-[#D4A373] hover:border-[#D4A373] hover:text-[#1B1B1B]"
                        }`}
                      >
                        <FaHeart size={14} />
                      </button>
                      <button className="p-2 rounded-full bg-[#1B1B1B]/80 backdrop-blur-sm border border-[#FFF4E6]/20 text-[#FFF4E6] hover:bg-[#D4A373] hover:border-[#D4A373] hover:text-[#1B1B1B] transition-all duration-300">
                        <FaEye size={14} />
                      </button>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {product.badges.map((badge, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 rounded-full text-xs font-semibold shadow-md ${getBadgeColor(
                            badge
                          )}`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Quick Add Button */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-4/5">
                      <button
                        disabled={!product.inStock}
                        className={`w-full py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                          product.inStock
                            ? "bg-[#D4A373] hover:bg-[#C69062] text-[#1B1B1B] transform hover:scale-105"
                            : "bg-gray-500 text-gray-300 cursor-not-allowed"
                        }`}
                      >
                        <FaShoppingBag size={14} />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-5 flex-grow flex flex-col">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#D4A373] transition-colors duration-300 line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-sm text-[#F1E3D3]/70 mb-3 line-clamp-2 flex-grow">
                      {product.desc}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-xs text-[#F1E3D3]/60">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="text-lg font-bold text-[#D4A373]">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-[#F1E3D3]/50 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Best_Sellers;
