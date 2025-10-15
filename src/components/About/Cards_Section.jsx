import React from "react";
import { Link } from "react-router-dom";
import {
  FaSprayCan,
  FaBrush,
  FaPalette,
  FaGem,
  FaRegHeart,
  FaShoppingBag,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import "aos/dist/aos.css";

// Note: You'll need to replace these with actual beauty-related images
import beauty1 from "/home/hero.jpg";
import beauty2 from "/home/g5.jpg";
import beauty3 from "/home/g1.jpg";
import beauty4 from "/home/g2.jpg";
import beauty5 from "/home/g4.jpg";

function Cards_Section() {
  // Beauty services data
  const beautyServices = [
    { icon: <FaSprayCan />, name: "Makeup" },
    { icon: <FaBrush />, name: "Skincare" },
    { icon: <FaPalette />, name: "Nail Art" },
    { icon: <FaGem />, name: "Luxury Spa" },
    { icon: <FaRegHeart />, name: "Treatments" },
    { icon: <FaShoppingBag />, name: "Products" },
  ];

  return (
    <section 
      className="py-16 px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: "#1B1B1B" }}
    >
      {/* Header Section */}
      <div
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6"
        data-aos="fade-down"
      >
        <div>
          <h1 
            className="font-bold text-4xl mb-4 leading-tight"
            style={{ color: "#FFF4E6" }}
          >
Our Curated Beauty & Fashion Services
          </h1>
          <p 
            className="text-lg max-w-2xl"
            style={{ color: "#F1E3D3" }}
          >
Indulge in premium treatments and personalized style sessions tailored just for you.          </p>
        </div>
        <Link
          to="/services"
          className="group flex items-center gap-3 transition-all"
          style={{ color: "#D4A373" }}
          data-aos="fade-up"
        >
          <span className="font-medium">View All Services</span>
          <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Beauty Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20 overflow-visible">
        {beautyServices.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-2xl transition-all duration-300 group cursor-pointer overflow-visible"
            style={{ 
              backgroundColor: "#1B1B1B",
              border: "1px solid #D4A373"
            }}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#C69062";
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#1B1B1B";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div 
              className="text-3xl mb-4 transition-colors duration-300"
              style={{ color: "#D4A373" }}
            >
              {service.icon}
            </div>
            <span 
              className="font-medium text-center transition-colors duration-300"
              style={{ color: "#FFF4E6" }}
            >
              {service.name}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 overflow-visible">
        {/* Left - Image Grid */}
        <div className="space-y-6 overflow-visible" data-aos="fade-right">
          <div className="flex gap-6 flex-wrap md:flex-nowrap overflow-visible">
            <div className="relative group w-full md:w-1/2 overflow-visible">
              <img
                src={beauty1}
                alt="Luxury Beauty Treatment"
                className="rounded-2xl w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  boxShadow: "0 0 40px rgba(212, 163, 115, 0.3)" 
                }}
              />
            </div>
            <div className="relative group w-full md:w-1/2 overflow-visible">
              <img
                src={beauty2}
                alt="Skincare Products"
                className="rounded-2xl w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  boxShadow: "0 0 40px rgba(212, 163, 115, 0.3)" 
                }}
              />
            </div>
          </div>
          <div className="relative group overflow-visible">
            <img
              src={beauty3}
              alt="Beauty Studio"
              className="rounded-2xl w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ 
                boxShadow: "0 0 40px rgba(212, 163, 115, 0.3)" 
              }}
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div data-aos="fade-left" className="overflow-visible">
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "#FFF4E6" }}
          >
            Elevate Your Beauty Experience with Expert Care
          </h2>
          <p 
            className="mb-8 leading-relaxed text-lg"
            style={{ color: "#F1E3D3" }}
          >
            Our certified beauty specialists provide personalized treatments using 
            premium products to enhance your natural beauty and boost your confidence.
          </p>

          <ul 
            className="space-y-4 mb-10 overflow-visible"
            style={{ color: "#F1E3D3" }}
          >
            {[
              "Personalized beauty consultations & custom treatments",
              "Premium organic products & advanced technology",
              "Luxurious spa environment with expert therapists"
            ].map((item, index) => (
              <li 
                key={index} 
                className="flex items-center gap-3 overflow-visible"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div 
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#D4A373" }}
                />
                {item}
              </li>
            ))}
          </ul>

          <button 
            className="group px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:shadow-lg overflow-visible"
            style={{ 
              backgroundColor: "#D4A373",
              color: "#1B1B1B"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#C69062";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#D4A373";
            }}
          >
            <span className="font-semibold">Book Consultation</span>
            <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-visible">
        {[
          {
            img: beauty4,
            title: "Ready for a Transformation?",
            description: "Experience our signature treatments that have helped thousands discover their best selves.",
            buttonText: "Book Now"
          },
          {
            img: beauty5,
            title: "Join Our Beauty Community",
            description: "Become part of our exclusive membership for special treatments and premium benefits.",
            buttonText: "Learn More"
          }
        ].map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div 
              className="absolute inset-0 flex flex-col justify-center items-start p-10"
              style={{ 
                background: "linear-gradient(to right, rgba(27, 27, 27, 0.9) 0%, rgba(27, 27, 27, 0.4) 100%)" 
              }}
            >
              <h3 
                className="text-2xl md:text-3xl font-bold mb-4 max-w-md"
                style={{ color: "#FFF4E6" }}
              >
                {item.title}
              </h3>
              <p 
                className="mb-6 max-w-md leading-relaxed"
                style={{ color: "#F1E3D3" }}
              >
                {item.description}
              </p>
              <button 
                className="group px-6 py-3 rounded-full flex items-center gap-2 transition-all border overflow-visible"
                style={{ 
                  backgroundColor: "transparent",
                  borderColor: "#D4A373",
                  color: "#D4A373"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D4A373";
                  e.currentTarget.style.color = "#1B1B1B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#D4A373";
                }}
              >
                {item.buttonText}
                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards_Section;