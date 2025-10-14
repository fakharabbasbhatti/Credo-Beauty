import React, { useState, useEffect } from "react";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash, FaCrown, FaCheck } from "react-icons/fa";
import { FiLogIn } from 'react-icons/fi';
import AOS from "aos";
import "aos/dist/aos.css";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-20 bg-[#1B1B1B]">
      {/* Backgrounds Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1606761568499-6d2451b23c57?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      {/* Luxurys Card */}
      <div 
        className="w-full max-w-xl bg-[#1B1B1B]/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden border border-[#D4A373]/30 relative z-10"
        data-aos="zoom-in"
      >
        
        {/* Elegants Header */}
        <div className="bg-gradient-to-r from-[#D4A373] to-[#C69062] py-8 px-6 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-[#FFF4E6]/10 rounded-full -translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#FFF4E6]/10 rounded-full translate-x-8 translate-y-8"></div>
          
          <div className="relative z-10">
            <FaCrown className="mx-auto text-[#1B1B1B] mb-3 text-2xl" />
            <h1 className="text-[#1B1B1B] font-serif text-3xl font-bold" data-aos="fade-down">
              Join Our Community
            </h1>
            <p className="text-[#1B1B1B]/80 mt-2 font-light" data-aos="fade-up" data-aos-delay="200">
              Create your beauty account
            </p>
          </div>
        </div>

        {/* Forms Body */}
        <div className="p-8">
          {/* Full Name Field */}
          <div className="mb-6" data-aos="fade-right" data-aos-delay="300">
            <label className="block text-[#FFF4E6] font-semibold mb-3 text-sm uppercase tracking-wide">
              Full Name
            </label>
            <div className="relative group">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4A373] transition-colors duration-300 group-hover:text-[#C69062]" size={18} />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-12 pr-4 py-4 bg-transparent border border-[#F1E3D3]/30 rounded-xl text-[#FFF4E6] placeholder-[#F1E3D3]/50 focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300 hover:border-[#D4A373]/50"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-6" data-aos="fade-left" data-aos-delay="400">
            <label className="block text-[#FFF4E6] font-semibold mb-3 text-sm uppercase tracking-wide">
              Email Address
            </label>
            <div className="relative group">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4A373] transition-colors duration-300 group-hover:text-[#C69062]" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-4 bg-transparent border border-[#F1E3D3]/30 rounded-xl text-[#FFF4E6] placeholder-[#F1E3D3]/50 focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300 hover:border-[#D4A373]/50"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6" data-aos="fade-right" data-aos-delay="500">
            <label className="block text-[#FFF4E6] font-semibold mb-3 text-sm uppercase tracking-wide">
              Password
            </label>
            <div className="relative group">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4A373] transition-colors duration-300 group-hover:text-[#C69062]" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-4 bg-transparent border border-[#F1E3D3]/30 rounded-xl text-[#FFF4E6] placeholder-[#F1E3D3]/50 focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300 hover:border-[#D4A373]/50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D4A373] hover:text-[#C69062] transition-colors duration-300"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6" data-aos="fade-left" data-aos-delay="600">
            <label className="block text-[#FFF4E6] font-semibold mb-3 text-sm uppercase tracking-wide">
              Confirm Password
            </label>
            <div className="relative group">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4A373] transition-colors duration-300 group-hover:text-[#C69062]" size={18} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full pl-12 pr-12 py-4 bg-transparent border border-[#F1E3D3]/30 rounded-xl text-[#FFF4E6] placeholder-[#F1E3D3]/50 focus:outline-none focus:ring-2 focus:ring-[#D4A373] focus:border-transparent transition-all duration-300 hover:border-[#D4A373]/50"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D4A373] hover:text-[#C69062] transition-colors duration-300"
              >
                {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="mb-8" data-aos="fade-up" data-aos-delay="700">
            <label className="flex items-start text-[#F1E3D3] text-sm cursor-pointer">
              <input 
                type="checkbox" 
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mr-3 mt-1 w-4 h-4 text-[#D4A373] bg-transparent border-[#F1E3D3]/30 rounded focus:ring-[#D4A373] focus:ring-2" 
              />
              <span>
                I agree to the{" "}
                <a href="/terms" className="text-[#D4A373] hover:text-[#C69062] underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-[#D4A373] hover:text-[#C69062] underline">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>

          {/* Signup Button */}
          <button 
            className="w-full bg-gradient-to-r from-[#D4A373] to-[#C69062] hover:from-[#C69062] hover:to-[#D4A373] text-[#1B1B1B] cursor-pointer font-bold py-4 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mb-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            data-aos="zoom-in" 
            data-aos-delay="800"
            
          >
            <FiLogIn className="text-lg" />
            Signup
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-6" data-aos="fade-in" data-aos-delay="900">
            <div className="flex-grow border-t border-[#F1E3D3]/20"></div>
            <span className="mx-4 text-[#F1E3D3] text-sm">Or sign up with</span>
            <div className="flex-grow border-t border-[#F1E3D3]/20"></div>
          </div>

          {/* Social Signup Options */}
          <div className="grid grid-cols-2 gap-4 mb-8" data-aos="fade-up" data-aos-delay="1000">
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-[#F1E3D3]/30 rounded-xl text-[#FFF4E6] hover:bg-[#D4A373] hover:text-[#1B1B1B] hover:border-[#D4A373] transition-all duration-300">
              <FaUser className="text-sm" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-[#F1E3D3]/30 rounded-xl text-[#FFF4E6] hover:bg-[#D4A373] hover:text-[#1B1B1B] hover:border-[#D4A373] transition-all duration-300">
              <FaUser className="text-sm" />
              Facebook
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center" data-aos="fade-in" data-aos-delay="1100">
            <span className="text-[#F1E3D3]">Already have an account? </span>
            <a
              href="/login"
              className="text-[#D4A373] hover:text-[#C69062] font-semibold transition-colors duration-300 hover:underline"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-[#D4A373] rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-20 w-4 h-4 bg-[#D4A373] rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-[#D4A373] rounded-full opacity-50 animate-ping"></div>
    </div>
  );
}