import React, { useState, useEffect } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How is clean skin care different from conventional skin care?",
      answer: "The main difference between clean skin care and conventional skin care is the absence of potentially harmful ingredients such as parabens, sulfates, and phthalates. All of these ingredients are commonly found in conventional skin care products. At Credo Beauty, we pride ourselves on our industry-leading standards and rigorous vetting process, ensuring that the clean products we offer are not only effective but also safer and more sustainable."
    },
    {
      question: "Are your products cruelty-free and vegan?",
      answer: "Yes! All our products are 100% cruelty-free and never tested on animals. Over 85% of our collection is vegan, and we clearly label each product. We're committed to ethical sourcing and sustainable practices throughout our supply chain."
    },
    {
      question: "How long until I see results with your products?",
      answer: "Most customers notice visible improvements within 2-4 weeks of consistent use. However, skin cycle typically takes 28-45 days, so we recommend using products for at least one full cycle to see significant results. Individual results may vary based on skin type and concerns."
    },
    {
      question: "Can I use these products if I have sensitive skin?",
      answer: "Absolutely! Our formulations are specifically designed to be gentle yet effective. We exclude common irritants like synthetic fragrances, alcohol, and harsh preservatives. However, we always recommend patch testing new products and consulting with your dermatologist if you have specific concerns."
    },
    {
      question: "What is your return and exchange policy?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, you can return unused products within 30 days for a full refund or exchange. Opened products can be returned for store credit. We believe in our products and want you to love them too!"
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. All international orders include tracking and are responsibly packaged to ensure your products arrive safely. Customs duties and taxes are the responsibility of the customer."
    }
  ];

  return (
    <div className="py-14 bg-[#1f1c1c] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#D4A373]/10 rounded-full blur-xl" data-aos="fade-right"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#D4A373]/5 rounded-full blur-2xl" data-aos="fade-left"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A373]/30 bg-[#1B1B1B]/60 backdrop-blur-sm mb-6">
            <FaQuestionCircle className="text-[#D4A373] text-sm" />
            <span className="text-[#D4A373] text-sm font-medium tracking-wider">F.A.Q</span>
          </div>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFF4E6] mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#D4A373] to-[#C69062] bg-clip-text text-transparent">
              Questions
            </span>
          </h3>
          <p className="text-lg text-[#F1E3D3] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our clean skincare products and practices
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6" data-aos="fade-up">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transition-all duration-500 ease-out"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Question Card */}
              <div 
                className={`flex items-start gap-4 p-6 rounded-2xl border-2 transition-all duration-300 ease-out ${
                  activeIndex === index 
                    ? "border-[#D4A373] bg-gradient-to-r from-[#1B1B1B] to-[#2A2A2A] shadow-2xl shadow-[#D4A373]/20" 
                    : "border-[#F1E3D3]/10 bg-[#1F1F1F] hover:border-[#D4A373]/30 hover:bg-[#2A2A2A] hover:shadow-lg"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-gradient-to-br from-[#D4A373] to-[#C69062] text-[#1B1B1B] rotate-12 scale-110" 
                    : "bg-[#2A2A2A] text-[#D4A373] group-hover:bg-[#D4A373]/20"
                }`}>
                  {activeIndex === index ? <FaMinus size={16} /> : <FaPlus size={16} />}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className={`text-lg font-semibold leading-relaxed transition-colors duration-300 ${
                      activeIndex === index ? "text-[#FFF4E6]" : "text-[#FFF4E6] group-hover:text-[#D4A373]"
                    }`}>
                      {faq.question}
                    </h4>
                  </div>

                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}>
                    <div className="border-t border-[#D4A373]/20 pt-4">
                      <p className="text-[#F1E3D3] leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-gradient-to-r from-[#1F1F1F] to-[#2A2A2A] border border-[#F1E3D3]/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-[#FFF4E6] mb-3">
              Still have questions?
            </h4>
            <p className="text-[#F1E3D3] mb-6 max-w-md mx-auto">
              Our skincare experts are here to help you find the perfect routine
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4A373] to-[#C69062] text-[#1B1B1B] font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Contact Support
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;