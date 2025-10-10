import React, { useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const VideoSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  // 👇 sample videos (you can replace with your own .mp4 files)
  const videos = [
    { src: "/videos/v1.mp4", thumb: "/home/g1.jpg", title: "Luxury Glow" },
    { src: "/videos/v2.mp4", thumb: "/home/g2.jpg", title: "Pure Elegance" },
    { src: "/videos/v3.mp4", thumb: "/home/g3.jpg", title: "The Ritual" },
    { src: "/videos/v4.mp4", thumb: "/home/g4.jpg", title: "Golden Hour" },
    { src: "/videos/v5.mp4", thumb: "/home/g5.jpg", title: "Refined Beauty" },
    { src: "/videos/v6.mp4", thumb: "/home/g6.jpg", title: "Calm Essence" },
    { src: "/videos/v7.mp4", thumb: "/home/g3.jpg", title: "Timeless Skin" },
    { src: "/videos/v8.mp4", thumb: "/home/g2.jpg", title: "Radiant Touch" },
  ];

  return (
    <section className="relative bg-[#1B1B1B]/95 py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-10 text-left">
        <h2
          data-aos="fade-right"
          className="text-3xl md:text-5xl font-bold text-[#FFF4E6] mb-4"
        >
          Our Video Collection
        </h2>
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-[#F1E3D3] text-lg max-w-lg"
        >
          Discover stories of elegance and craftsmanship — each video reflects
          the soul of our luxurious creations.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="max-w-6xl mx-auto"
      >
        {videos.map((vid, index) => (
          <SwiperSlide key={index}>
            <div
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              {/* Video */}
              <video
                src={vid.src}
                poster={vid.thumb}
                muted
                loop
                playsInline
                className="object-cover w-full h-64 rounded-2xl transition-all duration-500 ease-out"
                onMouseEnter={(e) => {
                  e.target.play();
                  e.target.nextSibling.style.opacity = "0"; // hide play icon
                }}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.nextSibling.style.opacity = "1"; // show play icon again
                }}
              />

              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-[#D4A373] text-[#1B1B1B] rounded-full p-4 group-hover:bg-[#C69062] transition-all duration-300">
                  <FaPlay className="text-xl" />
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-[#1B1B1B]/40 rounded-2xl pointer-events-none"></div>

              {/* Video Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#1B1B1B]/70 text-[#FFF4E6] translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-semibold">{vid.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default VideoSection;
