import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import ContactForm from "../header/ContactForm";

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Toggle form visibility
  const toggleForm = useCallback(() => {
    setIsFormOpen((prev) => !prev);
  }, []);

  // Close form with Escape key
  useEffect(() => {
    if (!isFormOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") toggleForm();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFormOpen, toggleForm]);

  return (
    <section className="q8-hero-section relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner2.jpg"
          alt="Q8 Design - Không gian nội thất ấn tượng"
          fill
          priority
          className="object-cover brightness-50"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-start ">
          <div className="max-w-5xl text-white text-left">
          {/* Main Heading */}
          <p   className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            <span className="mb-4 uppercase bg-gradient-to-r from-white to-white/80 bg-clip-text  drop-shadow-lg">
              <span className="block md:inline">Q8 Design</span>
              <span className="block md:inline md:ml-2">Kiến tạo không gian sống</span>
            </span>
         
            <span className="block font-bold md:mt-4 mt-2 uppercase text-white drop-shadow-lg">
              đẳng cấp và khác biệt
            </span>
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-3xl font-light drop-shadow-md">
            Chúng tôi không chỉ thiết kế và thi công các công trình. Chúng tôi kiến tạo nên những 
            <span className="font-medium text-white/95"> không gian sống đầy cảm hứng</span>, 
            nơi mỗi chi tiết đều phản ánh dấu ấn cá nhân và câu chuyện của gia chủ.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-2 sm:gap-4 mb-6">
            <button
              onClick={toggleForm}
              className="group inline-flex items-center justify-center px-4 sm:px-8 py-3 q8-bg-cod-gray hover:q8-bg-nevada text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-400/20 flex-1 sm:flex-none"
            >
              <span className="text-sm sm:text-base">Đặt lịch tư vấn</span>
              <FaArrowRight className="ml-1 sm:ml-2 transition-transform group-hover:translate-x-1 text-sm" />
            </button>
            
            <button className="group inline-flex items-center justify-center px-3 sm:px-6 py-3 border-2 border-white/60 hover:border-white text-white hover:text-white font-bold rounded-full transition-all duration-300 backdrop-blur-md hover:bg-white/10 shadow-lg flex-1 sm:flex-none">
              <FaPlay className="mr-1 sm:mr-2 text-white/80 text-sm" />
              <span className="text-sm">Video giới thiệu</span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 md:gap-6 pt-6 border-t border-white/30">
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-gray-200 bg-clip-text text-orange-500 mb-1 transition-transform duration-300 group-hover:scale-105 drop-shadow-md ">500+</div>
              <div className="text-white/80 font-medium tracking-wide text-sm">Dự án hoàn thành</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-gray-200 bg-clip-text text-orange-500 mb-1 transition-transform duration-300 group-hover:scale-105 drop-shadow-md">10+</div>
              <div className="text-white/80 font-medium tracking-wide text-sm">Năm kinh nghiệm</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-gray-200 bg-clip-text text-orange-500 mb-1 transition-transform duration-300 group-hover:scale-105 drop-shadow-md">100%</div>
              <div className="text-white/80 font-medium tracking-wide text-sm">Khách hàng hài lòng</div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {isFormOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) toggleForm();
          }}
        >
          <div className="relative bg-white rounded-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              onClick={toggleForm}
              aria-label="Đóng form"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Registration Form */}
            <ContactForm />
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20" style={{ animationDuration: '2s' }}>
        <div className="flex flex-col items-center justify-center group cursor-pointer hover:text-orange-200 transition-colors duration-300">
          <span className="text-xs mb-1 font-medium tracking-wide drop-shadow-md text-center">Khám phá thêm</span>
          <div className="w-6 h-6 border-2 border-white/60 rounded-full flex items-center justify-center group-hover:border-orange-300 transition-colors duration-300">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
