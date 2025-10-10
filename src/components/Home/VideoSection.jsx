import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

// Import AOS for scroll animations
import AOS from 'aos';
import 'aos/dist/aos.css';

const VideoSection = () => {
  const videoRefs = useRef([]);
  const [playingStates, setPlayingStates] = useState({});
  const [mutedStates, setMutedStates] = useState({});
  const [activeVideo, setActiveVideo] = useState(null);

  // Initialize AOS when component mounts
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const videos = [
    { 
      src: "https://cdn.pixabay.com/video/2025/05/21/280605_tiny.mp4", 
      title: "Luxury Glow",
      description: "Experience the ultimate luxury skincare routine"
    },
    { 
      src: "https://media.istockphoto.com/id/1150776341/video/beautiful-woman-having-smooth-healthy-skin.mp4?s=mp4-640x640-is&k=20&c=8B0or6iXlX3Lruo0pXDscgOVshb5wi389tEXAZaB8RU=", 
      title: "Pure Elegance",
      description: "Pure ingredients for elegant results"
    },
    { 
      src: "https://cdn.pixabay.com/video/2024/04/27/209634_tiny.mp4", 
      title: "The Ritual",
      description: "Your daily self-care ritual redefined"
    },
    { 
      src: "https://media.istockphoto.com/id/1806004928/video/close-up-liquid-oil-abstract-flowing-animation-cream-gel-moisturizer-cosmetic-white-background.mp4?s=mp4-640x640-is&k=20&c=LJLK_Y_2aJnV2VHarFy33218hHKLWl2vMaOIZGW25yE=", 
      title: "Golden Hour",
      description: "Capture the golden glow of perfect skin"
    },
    { 
      src: "https://cdn.pixabay.com/video/2020/06/23/42963-434316724_tiny.mp4", 
      title: "Refined Beauty",
      description: "Refined formulas for beautiful results"
    },
    { 
      src: "https://cdn.pixabay.com/video/2025/09/03/301419_tiny.mp4", 
      title: "Calm Essence",
      description: "Find your calm with our essential collection"
    },
    { 
      src: "https://cdn.pixabay.com/video/2020/08/13/47098-452600642_tiny.mp4", 
      title: "Timeless Skin",
      description: "Ageless beauty starts with timeless care"
    },
    { 
      src: "https://cdn.pixabay.com/video/2022/08/28/129420-744370583_tiny.mp4", 
      title: "Radiant Touch",
      description: "Touch of radiance in every application"
    },
  ];

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingStates(prev => ({ ...prev, [index]: true }));
      } else {
        video.pause();
        setPlayingStates(prev => ({ ...prev, [index]: false }));
      }
    }
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      setMutedStates(prev => ({ ...prev, [index]: video.muted }));
    }
  };

  const handleVideoHover = (index, isHovering) => {
    const video = videoRefs.current[index];
    if (video && !playingStates[index]) {
      if (isHovering) {
        video.play();
        setPlayingStates(prev => ({ ...prev, [index]: true }));
      } else {
        video.pause();
        setPlayingStates(prev => ({ ...prev, [index]: false }));
      }
    }
    setActiveVideo(isHovering ? index : null);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#1B1B1B] to-[#141414] py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-4 md:left-20 w-12 h-12 md:w-24 md:h-24 border border-[#D4A373] rounded-full"></div>
        <div className="absolute bottom-10 right-4 md:right-20 w-10 h-10 md:w-20 md:h-20 border border-[#D4A373] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div 
          className="text-center mb-12 md:mb-16"
          data-aos="fade-up"
        >
          <div className="inline-flex items-center gap-2 bg-[#D4A373]/20 backdrop-blur-sm border border-[#D4A373]/30 px-6 py-3 rounded-full mb-6">
            <FaPlay className="text-[#D4A373] text-sm" />
            <span className="text-[#F1E3D3] text-sm font-medium">Video Stories</span>
            <FaPlay className="text-[#D4A373] text-sm" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF4E6] mb-4">
            Discover Our <span className="text-[#D4A373]">Beauty</span> Stories
          </h2>
          
          <p className="text-[#F1E3D3] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience the art of clean beauty through our captivating video collection. 
            Each story reflects our commitment to luxury and elegance.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 justify-between pointer-events-none">
            <button
              id="prevBtn"
              className="swiper-button-prev-custom bg-[#2A2A2A]/80 backdrop-blur-sm border border-[#D4A373]/30 rounded-full p-4 text-[#F1E3D3] hover:text-[#D4A373] hover:border-[#D4A373] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#D4A373]/20 pointer-events-auto"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              id="nextBtn"
              className="swiper-button-next-custom bg-[#2A2A2A]/80 backdrop-blur-sm border border-[#D4A373]/30 rounded-full p-4 text-[#F1E3D3] hover:text-[#D4A373] hover:border-[#D4A373] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#D4A373]/20 pointer-events-auto"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              320: { 
                slidesPerView: 1,
                spaceBetween: 16
              },
              640: { 
                slidesPerView: 1.2,
                spaceBetween: 20
              },
              768: { 
                slidesPerView: 1.5,
                spaceBetween: 24
              },
              1024: { 
                slidesPerView: 2.2,
                spaceBetween: 24
              },
              1280: { 
                slidesPerView: 3,
                spaceBetween: 24
              },
              1536: { 
                slidesPerView: 3.5,
                spaceBetween: 32
              }
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: "#nextBtn",
              prevEl: "#prevBtn",
            }}
            className="pb-8"
          >
            {videos.map((vid, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer h-full"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  onMouseEnter={() => handleVideoHover(index, true)}
                  onMouseLeave={() => handleVideoHover(index, false)}
                >
                  {/* Video Container */}
                  <div className="relative overflow-hidden rounded-2xl bg-[#2A2A2A]">
                    <video
                      ref={el => videoRefs.current[index] = el}
                      src={vid.src}
                      muted
                      loop
                      playsInline
                      className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                      preload="metadata"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/90 via-transparent to-transparent rounded-2xl"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30 rounded-2xl"></div>
                  </div>

                  {/* Video Info - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div className="transform transition-all duration-500 translate-y-0 group-hover:translate-y-0">
                      <h3 className="text-lg md:text-xl font-semibold text-[#FFF4E6] mb-1">
                        {vid.title}
                      </h3>
                      <p className="text-[#F1E3D3]/80 text-sm md:text-base opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                        {vid.description}
                      </p>
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay(index);
                      }}
                      className="bg-[#1B1B1B]/80 backdrop-blur-sm border border-[#FFF4E6]/20 rounded-full p-2 text-[#FFF4E6] hover:bg-[#D4A373] hover:border-[#D4A373] hover:text-[#1B1B1B] transition-all duration-300"
                    >
                      {playingStates[index] ? <FaPause size={14} /> : <FaPlay size={14} />}
                    </button>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute(index);
                      }}
                      className="bg-[#1B1B1B]/80 backdrop-blur-sm border border-[#FFF4E6]/20 rounded-full p-2 text-[#FFF4E6] hover:bg-[#D4A373] hover:border-[#D4A373] hover:text-[#1B1B1B] transition-all duration-300"
                    >
                      {mutedStates[index] ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
                    </button>
                  </div>

                  {/* Play Icon Overlay - Shows when not playing */}
                  {!playingStates[index] && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-[#D4A373] text-[#1B1B1B] rounded-full p-4 md:p-5 transition-all duration-500 group-hover:bg-[#C69062] shadow-lg group-hover:shadow-xl group-hover:scale-110">
                        <FaPlay className="text-lg md:text-xl" />
                      </div>
                    </div>
                  )}

                  {/* Progress Bar - Shows when playing */}
                  {playingStates[index] && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2A2A2A]">
                      <div className="h-full bg-[#D4A373] animate-pulse"></div>
                    </div>
                  )}

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl shadow-none transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#D4A373]/20 pointer-events-none"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              id="prevBtn-mobile"
              className="swiper-button-prev-custom bg-[#2A2A2A] border border-[#D4A373]/30 rounded-full p-3 text-[#F1E3D3] hover:text-[#D4A373] hover:border-[#D4A373] transition-all duration-300"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              id="nextBtn-mobile"
              className="swiper-button-next-custom bg-[#2A2A2A] border border-[#D4A373]/30 rounded-full p-3 text-[#F1E3D3] hover:text-[#D4A373] hover:border-[#D4A373] transition-all duration-300"
            >
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;