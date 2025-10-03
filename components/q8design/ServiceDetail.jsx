import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  FaRulerCombined, 
  FaHammer, 
  FaHome, 
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
  FaPhone,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaPlay
} from "react-icons/fa";

const iconMap = {
  FaRulerCombined,
  FaHammer,
  FaHome,
  FaShieldAlt
};

export default function ServiceDetail({ serviceData }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPricing, setSelectedPricing] = useState('standard');

  const Icon = iconMap[serviceData.icon];
  
  // Debug: log để kiểm tra icon
  console.log('serviceData.icon:', serviceData.icon);
  console.log('Icon component:', Icon);

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500',
      text: 'text-blue-600',
      bgLight: 'bg-blue-50'
    },
    green: {
      bg: 'bg-green-500',
      text: 'text-green-600',
      bgLight: 'bg-green-50'
    },
    purple: {
      bg: 'bg-purple-500',
      text: 'text-purple-600',
      bgLight: 'bg-purple-50'
    },
    orange: {
      bg: 'bg-orange-500',
      text: 'text-orange-600',
      bgLight: 'bg-orange-50'
    }
  };

  // Đảm bảo colorClass luôn có giá trị hợp lệ - mặc định sử dụng màu cam
  const colorClass = colorClasses[serviceData.color] || colorClasses.orange;
  
  // Fallback nếu colorClass vẫn undefined
  const safeColorClass = colorClass || {
    bg: 'bg-orange-500',
    text: 'text-orange-600',
    bgLight: 'bg-orange-50'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src={serviceData.heroImage || "/images/banner2.jpg"}
            alt={`Q8 Design - ${serviceData.title}`}
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
                <span>/</span>
                <Link href="/dich-vu" className="hover:text-white transition-colors">Dịch vụ</Link>
                <span>/</span>
                <span className="text-white">{serviceData.title}</span>
              </nav>

              <div className="flex items-center gap-4 md:gap-6 mb-6">
                <div className={`w-12 h-12 md:w-16 md:h-16 ${safeColorClass.bgLight} rounded-2xl flex items-center justify-center flex-shrink-0`} style={{ minWidth: '48px', minHeight: '48px' }}>
                  {Icon ? (
                    <Icon className={`text-xl md:text-2xl ${safeColorClass.text} block`} style={{ display: 'block' }} />
                  ) : (
                    <div className={`text-xl md:text-2xl ${safeColorClass.text} block`} style={{ display: 'block' }}>📐</div>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  {serviceData.title}
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {serviceData.shortDescription}
              </p>

              <div className="flex flex-row gap-4 flex-nowrap">
                <Link
                  href="#contact"
                  className={`inline-flex items-center px-8 py-4 ${safeColorClass.bg} text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 group`}
                >
                  Tư vấn miễn phí
                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#gallery"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 group"
                >
                  <FaPlay className="mr-2" />
                  Xem gallery
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={serviceData.image}
                  alt={serviceData.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-8 py-4">
            {[
              { id: 'overview', label: 'Tổng quan' },
              { id: 'process', label: 'Quy trình' },
              { id: 'pricing', label: 'Bảng giá' },
              { id: 'faq', label: 'FAQ' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors rounded-t-lg ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600 bg-orange-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* Service Description */}
            <section>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Về dịch vụ {serviceData.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    {serviceData.fullDescription}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Dịch vụ bao gồm:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceData.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 ${safeColorClass.bg} rounded-full`}></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${safeColorClass.bgLight} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <FaCheckCircle className={`text-xl ${safeColorClass.text}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quy trình làm việc
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Chúng tôi có quy trình làm việc chuyên nghiệp và minh bạch để đảm bảo dự án của bạn được thực hiện một cách tốt nhất.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceData.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full">
                    <div className={`w-16 h-16 ${safeColorClass.bg} text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto`}>
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow connector */}
                  {index < serviceData.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <FaArrowRight className="text-gray-300 text-2xl" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bảng giá dịch vụ
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Chúng tôi cung cấp các gói dịch vụ linh hoạt phù hợp với mọi nhu cầu và ngân sách.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(serviceData.pricing).map(([key, pkg], index) => (
                <div 
                  key={key}
                  className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                    key === 'standard' 
                      ? `border-orange-500 transform scale-105` 
                      : 'border-gray-200'
                  }`}
                >
                  {key === 'standard' && (
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold`}>
                      Phổ biến nhất
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <FaCheckCircle className={`text-orange-500 mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    key === 'standard'
                      ? `bg-orange-500 text-white hover:bg-orange-600`
                      : `border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white`
                  }`}>
                    Chọn gói này
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thư viện dự án
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Khám phá những dự án tiêu biểu mà chúng tôi đã thực hiện.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceData.gallery.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-square relative rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${serviceData.title} - Hình ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              ))}
            </div>

            {/* Image Modal */}
            {selectedImage !== null && (
              <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4">
                <div className="relative max-w-4xl max-h-full">
                  <Image
                    src={serviceData.gallery[selectedImage]}
                    alt={`${serviceData.title} - Hình ${selectedImage + 1}`}
                    width={800}
                    height={600}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                  
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                  >
                    ×
                  </button>

                  <button
                    onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : serviceData.gallery.length - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300"
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    onClick={() => setSelectedImage(selectedImage < serviceData.gallery.length - 1 ? selectedImage + 1 : 0)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Đánh giá từ khách hàng
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Những phản hồi tích cực từ khách hàng đã sử dụng dịch vụ của chúng tôi.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {serviceData.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaQuoteLeft className={`text-2xl text-orange-500 mr-4`} />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                  &quot;{testimonial.comment}&quot;
                  </p>

                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.project}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Câu hỏi thường gặp
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Những câu hỏi phổ biến về dịch vụ {serviceData.title}.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {serviceData.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Contact CTA */}
      <section id="contact" className={`bg-gradient-to-r from-orange-600 to-orange-700 text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Sẵn sàng bắt đầu dự án của bạn?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và báo giá chi tiết cho dự án của bạn.
            </p>
            
            <div className="flex flex-row gap-4 justify-center flex-nowrap">
              <a
                href="tel:0988116828"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                <FaPhone className="mr-2" />
                098 811 68 28
              </a>
              <a
                href="mailto:info@q8design.vn"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <FaEnvelope className="mr-2" />
                info@q8design.vn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

