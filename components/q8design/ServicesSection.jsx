import { FaHome, FaCouch, FaHammer, FaRulerCombined } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactForm from "../header/ContactForm";

export default function   ServicesSection() {
  const [showContactForm, setShowContactForm] = useState(false);
  const services = [
    {
      icon: FaRulerCombined,
      title: "Thiết kế Kiến trúc",
      description: "Chuyên biến ý tưởng thành những công trình kiến trúc độc đáo, tối ưu công năng cho nhà phố và biệt thự.",
      image: "/images/service-architecture.webp",
      features: ["Thiết kế nhà phố", "Thiết kế biệt thự", "Tư vấn quy hoạch", "Giấy phép xây dựng"],
      color: "orange"
    },
    {
      icon: FaCouch,
      title: "Thiết kế Nội thất",
      description: "Tạo ra không gian sống cá nhân hóa, phù hợp với phong cách và nhu cầu của bạn.",
      image: "/images/service-interior-2.webp", 
      features: ["Nội thất nhà phố", "Nội thất chung cư", "Nội thất biệt thự", "Nội thất văn phòng"],
      color: "orange"
    },
    {
      icon: FaHammer,
      title: "Thi công trọn gói",
      description: "Hoàn thiện công trình đúng tiến độ, đảm bảo chất lượng và tính thẩm mỹ theo thiết kế.",
      image: "/images/service-construction.webp",
      features: ["Thi công phần thô", "Thi công hoàn thiện", "Giám sát chất lượng", "Bảo hành dài hạn"],
      color: "orange"
    },
    {
      icon: FaHome,
      title: "Cải tạo không gian",
      description: "Hồi sinh không gian cũ, mang lại vẻ đẹp và công năng mới cho ngôi nhà của bạn.",
      image: "/images/service-renovation.webp",
      features: ["Cải tạo nhà cũ", "Nâng cấp nội thất", "Tối ưu không gian", "Tiết kiệm chi phí"],
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-500",
        gradient: "from-blue-500 to-blue-600",
        light: "bg-blue-50",
        text: "text-blue-600",
        hover: "hover:bg-blue-500"
      },
      orange: {
        bg: "bg-orange-500", 
        gradient: "from-orange-500 to-orange-600",
        light: "bg-orange-50",
        text: "text-orange-600",
        hover: "hover:bg-orange-500"
      },
      green: {
        bg: "bg-green-500",
        gradient: "from-green-500 to-green-600", 
        light: "bg-green-50",
        text: "text-green-600",
        hover: "hover:bg-green-500"
      },
      purple: {
        bg: "bg-purple-500",
        gradient: "from-purple-500 to-purple-600",
        light: "bg-purple-50",
        text: "text-purple-600",
        hover: "hover:bg-purple-500"
      }
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-white md:px-0 px-2">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <h2 className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-base font-medium uppercase tracking-wider">
              Dịch vụ của Q8 Design
            </h2>
          </div>
         
          <p className="text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed">
            Các dịch vụ chính của Q8 Design với giải pháp toàn diện 
            từ thiết kế đến thi công, biến mọi ý tưởng của bạn thành hiện thực một cách hoàn hảo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Icon and Title on same line */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-xl text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>


                  {/* CTA Button */}
                  <Link href="/dich-vu" className={`inline-flex items-center px-6 py-3 ${colors.bg} hover:opacity-90 text-white font-medium rounded-full transition-all duration-300 group`}>
                    Xem chi tiết
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })} 
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-8 md:p-12">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Bạn cần tư vấn chi tiết về dịch vụ?
            </p>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Đội ngũ chuyên gia của Q8 Design luôn sẵn sàng tư vấn miễn phí 
              để tìm ra giải pháp phù hợp nhất cho không gian của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dich-vu" className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors duration-300">
                Xem tất cả dịch vụ
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <button 
                onClick={() => setShowContactForm(true)}
                className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-bold rounded-full transition-all duration-300"
              >
                Tư vấn miễn phí
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
}
