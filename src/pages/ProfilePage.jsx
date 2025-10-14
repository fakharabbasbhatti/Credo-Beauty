import React, { useEffect, useState } from "react";
import {
  FiUser,
  FiMail,
  FiEdit2,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";
import {
  FaFacebookF,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ProfilePage = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
    bio: "“Beauty Curator | Fashion Aficionado | Inspiring Confidence Through Style ✨”",
  });

  const [tempProfile, setTempProfile] = useState(profile);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const handleSave = () => {
    setProfile(tempProfile);
    setEditing(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#1B1B1B] overflow-hidden p-6 text-[#FFF4E6]">
      {/* Background Glows */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#D4A373]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C69062]/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Profile Card */}
      <div
        data-aos="fade-up"
        className="relative w-full mt-15 max-w-lg bg-gradient-to-br from-[#2A2A2A]/80 to-[#1B1B1B]/90 backdrop-blur-xl border border-[#D4A373]/40 rounded-3xl shadow-[0_0_25px_rgba(212,163,115,0.2)] p-4 md:p-8 flex flex-col items-center transform transition-transform hover:scale-[1.02] hover:-rotate-1 duration-500"
      >
        {/* Animated Glow Border */}
        <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br from-[#D4A373]/30 via-transparent to-[#C69062]/30 blur-lg -z-10"></div>

        {/* Avatar Section */}
        <div data-aos="zoom-in" className="relative mb-6">
          <div className="w-32 h-32 rounded-full p-[3px] bg-gradient-to-tr from-[#D4A373] to-[#C69062] shadow-[0_0_25px_rgba(212,163,115,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#1B1B1B]">
              <img
                src="https://i.pravatar.cc/300"
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={() => setEditing(!editing)}
            className="absolute bottom-1 right-1 bg-gradient-to-br from-[#D4A373] to-[#C69062] text-[#1B1B1B] p-2 rounded-full shadow-md transition-transform duration-300"
          >
            <FiEdit2 size={16} />
          </button>
        </div>

        {/* Profile Info */}
        <div className="text-center space-y-4 w-full">
          {editing ? (
            <div className="space-y-5" data-aos="fade-up">
              <input
                type="text"
                value={tempProfile.name}
                onChange={(e) =>
                  setTempProfile({ ...tempProfile, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-[#D4A373]/60 text-center text-lg outline-none focus:border-[#D4A373] transition-all pb-1"
              />
              <input
                type="email"
                value={tempProfile.email}
                onChange={(e) =>
                  setTempProfile({ ...tempProfile, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-[#D4A373]/60 text-center text-sm outline-none focus:border-[#D4A373] transition-all pb-1"
              />
              <textarea
                value={tempProfile.bio}
                onChange={(e) =>
                  setTempProfile({ ...tempProfile, bio: e.target.value })
                }
                className="w-full bg-transparent border border-[#D4A373]/40 rounded-xl p-3 text-sm outline-none focus:border-[#D4A373] transition-all resize-none"
              />
              <button
                onClick={handleSave}
                className="bg-gradient-to-r from-[#D4A373] to-[#C69062] text-[#1B1B1B] px-8 py-2.5 rounded-2xl font-semibold hover:shadow-[0_0_20px_rgba(212,163,115,0.3)] hover:scale-105 transition-all animate-pulse-slow"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <>
              <h2
                className="text-3xl font-bold text-[#D4A373] tracking-wide"
                data-aos="fade-up"
              >
                {profile.name}
              </h2>
              <p
                className="flex items-center justify-center gap-2 text-[#F1E3D3]/80 text-sm"
                data-aos="fade-up"
              >
                <FiMail /> {profile.email}
              </p>
              <p
                className="text-[#FFF4E6]/80 text-sm leading-relaxed max-w-md mx-auto italic"
                data-aos="fade-up"
              >
                {profile.bio}
              </p>
            </>
          )}
        </div>

        {/* Divider */}
        <div className="w-2/3 border-t border-[#D4A373]/20 my-6"></div>

        {/* Social Links */}
        <div
          className="flex justify-center space-x-8 text-2xl"
          data-aos="fade-up"
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C69062] transition-all transform hover:scale-125"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C69062] transition-all transform hover:scale-125"
          >
            <FiInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C69062] transition-all transform hover:scale-125"
          >
            <FiTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C69062] transition-all transform hover:scale-125"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
