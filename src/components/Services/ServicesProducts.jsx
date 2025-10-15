import React, { useState, useEffect } from "react";
import {
  FiSearch,
  FiFilter,
  FiTag,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  // Makeup
  { id: 1, name: "Luxury Lipstick", category: "Makeup", price: 25, image: "/home/g1.jpg", bestseller: true },
  { id: 2, name: "Golden Glow Foundation", category: "Makeup", price: 40, image: "/home/g2.jpg" },
  { id: 3, name: "Velvet Blush Palette", category: "Makeup", price: 30, image: "/home/g3.jpg", isNew: true },

  // Skin
  { id: 4, name: "Moisturizing Cream", category: "Skin", price: 28, image: "/home/g2.jpg" },
  { id: 5, name: "Hydrating Face Serum", category: "Skin", price: 32, image: "/home/g4.jpg", isNew: true },

  // Hair
  { id: 6, name: "Argan Oil Shampoo", category: "Hair", price: 22, image: "/home/g5.jpg" },
  { id: 7, name: "Nourishing Hair Mask", category: "Hair", price: 35, image: "/home/g6.jpg" },

  // Body
  { id: 8, name: "Shea Body Butter", category: "Body", price: 27, image: "/home/g3.jpg" },
  { id: 9, name: "Coconut Body Scrub", category: "Body", price: 29, image: "/home/g1.jpg" },

  // Fragrance
  { id: 10, name: "Rose Essence Perfume", category: "Fragrance", price: 50, image: "/home/g4.jpg", bestseller: true },
  { id: 11, name: "Midnight Oud Perfume", category: "Fragrance", price: 65, image: "/home/g6.jpg" },

  // Gifts
  { id: 12, name: "Luxury Gift Box Set", category: "Gifts", price: 70, image: "/home/g5.jpg" },

  // Sale
  { id: 13, name: "Matte Lip Kit (50% Off)", category: "Sale", price: 15, image: "/home/g2.jpg", sale: true },
  { id: 14, name: "Golden Nail Polish (30% Off)", category: "Sale", price: 18, image: "/home/g3.jpg", sale: true },

  // Brands
  { id: 15, name: "Designer Earrings", category: "Brands", price: 35, image: "/home/g6.jpg" },
  { id: 16, name: "Luxury Handbag", category: "Brands", price: 60, image: "/home/g6.jpg" },

  // Mission
  { id: 17, name: "Eco Beauty Pouch", category: "Mission", price: 20, image: "/home/g1.jpg" },
  { id: 18, name: "Sustainable Cotton Tote", category: "Mission", price: 22, image: "/home/g5.jpg" },
];

const categories = [
  "All",
  "Bestsellers",
  "New",
  "Skin",
  "Makeup",
  "Hair",
  "Body",
  "Fragrance",
  "Gifts",
  "Sale",
  "Brands",
  "Mission",
];

const ServicesProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  const filteredProducts = products.filter((product) => {
    let matchesCategory = false;

    if (selectedCategory === "All") matchesCategory = true;
    else if (selectedCategory === "Bestsellers") matchesCategory = product.bestseller === true;
    else if (selectedCategory === "New") matchesCategory = product.isNew === true;
    else matchesCategory = product.category === selectedCategory;

    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#1B1B1B] text-[#FFF4E6] flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar */}
      <aside
        data-aos="fade-right"
        className="w-full md:w-60 bg-[#2A2A2A]/80 border-r border-[#D4A373]/30 
                 p-4 md:p-6 flex md:flex-col items-center md:items-start gap-3
                 overflow-x-auto md:overflow-y-auto scrollbar-thin scrollbar-thumb-[#D4A373]/40 scrollbar-track-[#1B1B1B]"
      >
        <div className="flex md:flex-col gap-3 min-w-max md:min-w-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl 
                whitespace-nowrap transition-all duration-300 text-sm md:text-base
                ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#D4A373] to-[#C69062] text-[#1B1B1B] shadow-lg"
                    : "bg-transparent text-[#F1E3D3]/80 border border-[#D4A373]/20 hover:border-[#D4A373]/50 hover:text-[#FFF4E6]"
                }`}
            >
              <FiTag className="text-sm" /> {cat}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main
        data-aos="fade-left"
        className="flex-1 p-6 md:p-10 flex flex-col gap-6 overflow-x-hidden overflow-y-auto"
      >
        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sticky top-0 bg-[#1B1B1B] z-20 pb-2">
          <div className="flex items-center bg-[#1B1B1B]/70 border border-[#D4A373]/30 rounded-2xl px-4 py-2 w-full sm:w-1/2">
            <FiSearch className="text-[#D4A373] mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent w-full outline-none text-[#FFF4E6] placeholder-[#F1E3D3]/60"
            />
          </div>

          <button
            onClick={() => setFilterVisible(!filterVisible)}
            className="flex items-center gap-2 bg-gradient-to-r from-[#D4A373] to-[#C69062] text-[#1B1B1B] px-4 py-2 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-md"
          >
            <FiFilter /> Filters
          </button>
        </div>

        {/* Filter Panel */}
        {filterVisible && (
          <div
            data-aos="fade-down"
            className="bg-[#2A2A2A]/80 border border-[#D4A373]/30 rounded-2xl p-4 shadow-inner"
          >
            <p className="text-[#D4A373] font-semibold mb-2">Filter by Price:</p>
            <div className="flex gap-4 text-sm text-[#F1E3D3]/80">
              <span className="hover:text-[#C69062] cursor-pointer">Under $30</span>
              <span className="hover:text-[#C69062] cursor-pointer">$30 - $50</span>
              <span className="hover:text-[#C69062] cursor-pointer">Above $50</span>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 overflow-hidden">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={product.id}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
                className="relative bg-[#2A2A2A]/70 border border-[#D4A373]/30 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(212,163,115,0.4)] transition-all duration-500 group"
              >
                {/* ✅ Category + Extra Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                  <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-[#D4A373]/20 border border-[#D4A373]/50 text-[#FFF4E6] uppercase tracking-wide">
                    {product.category}
                  </span>

                  {product.bestseller && (
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase bg-[#C69062] text-[#1B1B1B]">
                      Bestseller
                    </span>
                  )}
                  {product.isNew && (
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase bg-[#4CAF50] text-white">
                      New
                    </span>
                  )}
                  {product.sale && (
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase bg-[#E63946] text-white">
                      Sale
                    </span>
                  )}
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-[#D4A373]">{product.name}</h3>
                  <p className="text-[#F1E3D3]/80 text-sm">${product.price.toFixed(2)}</p>
                  <div className="flex items-center justify-between mt-3">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-[#D4A373] to-[#C69062] text-[#1B1B1B] px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
                      <FiShoppingBag /> Add to Cart
                    </button>
                    <button className="text-[#FFF4E6]/70 hover:text-[#C69062] transition-colors">
                      <FiHeart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p
              data-aos="fade-up"
              className="text-center text-[#F1E3D3]/60 italic col-span-full"
            >
              No products found.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ServicesProducts;