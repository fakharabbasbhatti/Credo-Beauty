import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    id: 1,
    name: "Luxury Matte Lipstick",
    price: 25,
    image: "/home/g1.jpg",
  },
  {
    id: 2,
    name: "Golden Glow Foundation",
    price: 40,
    image: "/home/g2.jpg",
  },
  {
    id: 3,
    name: "Velvet Blush Palette",
    price: 30,
    image: "/home/g3.jpg",
  },
  {
    id: 4,
    name: "Silk Scarf - Limited Edition",
    price: 45,
    image: "/home/g5.jpg",
  },
];

const AddToCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out" });
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#1B1B1B] text-[#FFF4E6] flex flex-col items-center px-6 py-10">
      {/* Header */}
      <div data-aos="fade-down" className="flex items-center gap-3 mt-20 mb-10">
        <FiShoppingCart className="text-[#D4A373] text-3xl" />
        <h1 className="text-2xl md:text-4xl font-bold text-[#D4A373] md:tracking-wide">
          Beauty & Fashion Boutique
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-6xl">
        {products.map((product, index) => (
          <div
            key={product.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="relative bg-[#1B1B1B]/80 border border-[#D4A373]/30 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(212,163,115,0.4)] transition-all duration-500 group"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-[#D4A373] tracking-wide">
                {product.name}
              </h3>
              <p className="text-[#F1E3D3]/80 text-sm">
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 bg-gradient-to-r from-[#D4A373] to-[#C69062] text-[#1B1B1B] rounded-full py-2 font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div
        data-aos="fade-up"
        className="w-full max-w-3xl mt-16 bg-[#2A2A2A]/80 border border-[#D4A373]/30 rounded-3xl p-8 shadow-[0_0_20px_rgba(212,163,115,0.15)]"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-2xl font-semibold text-[#D4A373] flex items-center gap-2">
            <FiShoppingCart /> Your Cart
          </h3>
          <div className="relative">
            <FiShoppingCart className="text-2xl text-[#F1E3D3]" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-[#D4A373] to-[#C69062] text-[#1B1B1B] text-xs font-bold px-2 py-[1px] rounded-full shadow-md">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </div>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-[#F1E3D3]/50 italic">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-[#1B1B1B]/60 border border-[#D4A373]/20 rounded-2xl p-4 hover:border-[#D4A373]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="text-[#D4A373] text-sm md:text-xl font-medium">
                      {item.name}
                    </h4>
                    <p className="text-[#F1E3D3]/70 text-sm">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[#FFF4E6]/60 hover:text-[#C69062] transition-colors"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            ))}

            <div className="text-right pt-5 border-t border-[#D4A373]/20">
              <p className="text-lg font-semibold text-[#D4A373] mb-3">
                Total: ${total.toFixed(2)}
              </p>
              <button className="bg-gradient-to-r from-[#D4A373] to-[#C69062] text-[#1B1B1B] px-8 py-2 rounded-full font-semibold hover:scale-105 transition-transform shadow-md text-nowrap">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
