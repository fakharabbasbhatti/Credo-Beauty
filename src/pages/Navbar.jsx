import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiMessageCircle,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#1B1B1B] fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#D4A373] flex items-center tracking-tight">
          credo{" "}
          <span className="ml-1 text-xs font-light tracking-wide text-[#F1E3D3]">
            BEAUTY
          </span>
        </div>

        {/* Desktop Menu or Search Input */}
        {!showSearch ? (
          <ul className="hidden lg:flex items-center space-x-10 text-[15px] font-semibold text-[#F1E3D3]">
            {navItems.map((item, i) => (
              <li key={i} className="relative cursor-pointer group">
                <Link
                  to={item.path}
                  className="transition-colors duration-200 group-hover:text-[#D4A373]"
                >
                  {item.name.toUpperCase()}
                </Link>
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[#D4A373] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="hidden lg:flex flex-1 justify-center">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-2/3 border border-[#D4A373]/40 bg-[#1B1B1B] text-[#FFF4E6] placeholder-[#F1E3D3]/60 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A373] transition-all duration-200"
              autoFocus
            />
          </div>
        )}

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center space-x-5 text-[#F1E3D3]">
          {showSearch ? (
            <FiX
              className="text-xl cursor-pointer hover:text-[#C69062] transition-colors"
              onClick={() => setShowSearch(false)}
            />
          ) : (
            <FiSearch
              className="text-xl cursor-pointer hover:text-[#C69062] transition-colors"
              onClick={() => setShowSearch(true)}
            />
          )}

          {/* Chat */}
          <Link
            to="/livechat"
            className="text-xl cursor-pointer hover:text-[#C69062] transition-colors"
          >
            <FiMessageCircle />
          </Link>

          <div className="border-l h-5 border-[#D4A373]/40" />

          {/* Profile */}
          <Link
            to="/profile"
            className="text-xl cursor-pointer hover:text-[#C69062] transition-colors"
          >
            <FiUser />
          </Link>

          {/* Cart */}
          <Link
            to="/addtocart"
            className="text-xl cursor-pointer hover:text-[#C69062] transition-colors"
          >
            <FiShoppingBag />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-2xl text-[#F1E3D3]"
          onClick={() => {
            setIsOpen(!isOpen);
            setMobileSearch(false);
          }}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#1B1B1B] border-t border-[#D4A373]/30 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {/* Search Field on Mobile */}
        {mobileSearch ? (
          <div className="flex flex-col p-4 space-y-3">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border border-[#D4A373]/40 bg-[#1B1B1B] text-[#FFF4E6] placeholder-[#F1E3D3]/60 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A373] transition-all duration-200"
              autoFocus
            />
            <button
              className="text-[#D4A373] font-semibold text-sm underline"
              onClick={() => setMobileSearch(false)}
            >
              Back to Menu
            </button>
          </div>
        ) : (
          <>
            {/* Mobile Menu Items */}
            <ul className="flex flex-col p-4 space-y-6 text-sm font-medium text-[#F1E3D3]">
              {navItems.map((item, i) => (
                <li key={i} className="relative cursor-pointer group text-center">
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)} // close menu on click
                    className="transition-colors duration-200 group-hover:text-[#D4A373] text-center"
                  >
                    {item.name.toUpperCase()}
                  </Link>
                  <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#D4A373] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            {/* Mobile Icons */}
            <div className="flex items-center justify-around py-5 border-t border-[#D4A373]/30 text-[#F1E3D3]">
              <button
                className="text-xl hover:text-[#C69062] transition-colors"
                onClick={() => setMobileSearch(true)}
              >
                <FiSearch />
              </button>

              <Link
                to="/livechat"
                className="text-xl cursor-pointer hover:text-[#C69062] transition-colors"
              >
                <FiMessageCircle />
              </Link>

              <Link
                to="/profile"
                className="text-xl cursor-pointer hover:text-[#C69062] transition-colors"
              >
                <FiUser />
              </Link>

              <Link
                to="/addtocart"
                className="text-xl cursor-pointer hover:text-[#C69062] transition-colors"
              >
                <FiShoppingBag />
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
