import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSend, AiOutlineUser } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const LiveChat = () => {
  const [messages, setMessages] = useState([
    { user: "Bot", text: "✨ Welcome! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // 💬 Smart Bot Reply
  const botReply = (userMessage) => {
    const lower = userMessage.toLowerCase();
    if (lower.includes("hello") || lower.includes("hi")) {
      return "👋 Hi there! How’s your day going?";
    } else if (lower.includes("help")) {
      return "Of course! Just tell me what you need help with 💡";
    } else if (lower.includes("price")) {
      return "Our prices depend on your project type — can you specify the service?";
    } else if (lower.includes("thank")) {
      return "You're very welcome! 😊";
    } else {
      return "Interesting... please tell me more about that!";
    }
  };

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { user: "You", text: input }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = botReply(input);
      setMessages((prev) => [...prev, { user: "Bot", text: reply }]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1B1B1B] text-[#FFF4E6] p-6">
      <div
        data-aos="fade-up"
        className="w-full max-w-2xl relative mt-18 mb-10 rounded-3xl border border-[#D4A373]/40 bg-[#2A2A2A]/60 backdrop-blur-md shadow-2xl p-2 md:p-5 flex flex-col overflow-hidden"
      >
        {/* Decorative gradient border glow */}
        <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br from-[#D4A373]/20 via-transparent to-[#C69062]/30 blur-xl -z-10"></div>

        <h2
          className="text-center text-3xl font-bold mb-4 bg-gradient-to-r from-[#D4A373] to-[#C69062] bg-clip-text text-transparent tracking-wide"
          data-aos="fade-down"
        >
          Live Chat
        </h2>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 px-1 scrollbar-thin scrollbar-thumb-[#D4A373]/40 scrollbar-track-[#1B1B1B]">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.user === "You" ? "justify-end" : "justify-start"
              }`}
              data-aos="fade-up"
            >
              <div
                className={`px-4 py-3 rounded-2xl text-sm md:text-base shadow-md max-w-[75%] transition-all duration-300 ${
                  msg.user === "You"
                    ? "bg-gradient-to-br from-[#D4A373] to-[#C69062] text-[#1B1B1B] shadow-[#D4A373]/20"
                    : "bg-[#1B1B1B]/80 border border-[#D4A373]/40 text-[#FFF4E6]"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div
              className="flex justify-start"
              data-aos="fade-up"
            >
              <div className="bg-[#1B1B1B]/80 border border-[#D4A373]/40 text-[#D4A373] text-sm px-4 py-2 rounded-2xl italic animate-pulse">
                Bot is typing...
              </div>
            </div>
          )}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input Section */}
        <div
  className="flex items-center gap-2 sm:gap-3 bg-[#1B1B1B]/80 border border-[#D4A373]/40 rounded-3xl px-3 sm:px-4 py-2 sm:py-3 shadow-inner w-full"
  data-aos="fade-up"
>
  {/* User Icon */}
  <AiOutlineUser className="text-[#D4A373] text-xl sm:text-2xl shrink-0" />

  {/* Input Field */}
  <input
    type="text"
    placeholder="Type a message..."
    className="bg-transparent flex-1 text-[#FFF4E6] placeholder-[#F1E3D3]/60 focus:outline-none text-sm sm:text-base"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
  />

  {/* Send Button */}
  <button
    onClick={sendMessage}
    className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-[#D4A373] to-[#C69062] text-[#1B1B1B] hover:scale-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center shrink-0"
  >
    <AiOutlineSend size={16} className="sm:size-[18px]" />
  </button>
</div>

      </div>
    </div>
  );
};

export default LiveChat;
