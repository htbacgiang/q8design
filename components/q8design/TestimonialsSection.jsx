import { useState } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Anh Minh Tuấn",
      role: "Chủ đầu tư Biệt thự FLC Sầm Sơn",
      location: "Thanh Hóa",
      image: "/images/banner2.jpg",
      videoThumbnail: "/images/banner2.jpg",
      hasVideo: true,
      rating: 5,
      content: "Q8 Design đã biến giấc mơ về một ngôi biệt thự nghỉ dưỡng hoàn hảo của gia đình tôi thành hiện thực. Từ khâu thiết kế ban đầu cho đến thi công hoàn thiện, đội ngũ luôn tận tâm, chuyên nghiệp và lắng nghe mọi ý kiến của chúng tôi. Kết quả vượt xa mong đợi!",
      project: "Biệt thự nghỉ dưỡng 350m²",
      year: "2024"
    },
    {
      id: 2,
      name: "Chị Lan Anh",
      role: "Chủ nhân Penthouse The K-Park", 
      location: "Hà Nội",
      image: "/images/banner2.jpg",
      videoThumbnail: "/images/banner2.jpg",
      hasVideo: true,
      rating: 5,
      content: "Tôi đặc biệt ấn tượng với khả năng tối ưu không gian của Q8 Design. Căn penthouse 120m² của tôi được thiết kế vô cùng thông minh, mỗi góc nhỏ đều được tận dụng hiệu quả. Đội ngũ rất chu đáo trong từng chi tiết và luôn đúng tiến độ cam kết.",
      project: "Căn hộ Penthouse 120m²",
      year: "2024"
    },
    {
      id: 3,
      name: "Anh Đức Thắng",
      role: "Chủ sở hữu Nhà phố Times City",
      location: "Hà Nội", 
      image: "/images/banner2.jpg",
      videoThumbnail: "/images/banner2.jpg",
      hasVideo: false,
      rating: 5,
      content: "Dự án cải tạo nhà phố của Q8 Design thực sự xuất sắc. Họ đã biến căn nhà cũ 4 tầng thành một không gian sống hiện đại, tiện nghi cho gia đình trẻ. Đặc biệt, chi phí rất hợp lý so với chất lượng nhận được.",
      project: "Nhà phố 4 tầng 80m²",
      year: "2023"
    },
    {
      id: 4,
      name: "Chị Hương Giang",
      role: "Chủ đầu tư Biệt thự Ecopark",
      location: "Hưng Yên",
      image: "/images/banner2.jpg",
      videoThumbnail: "/images/banner2.jpg",
      hasVideo: true,
      rating: 5,
      content: "Q8 Design hiểu rõ phong cách sống của gia đình tôi. Biệt thự vườn được thiết kế hài hòa với thiên nhiên, mang lại cảm giác bình yên và thư thái. Quy trình làm việc minh bạch, đội ngũ nhiệt tình và chuyên nghiệp.",
      project: "Biệt thự vườn 280m²",
      year: "2023"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium uppercase tracking-wider">
              Khách hàng nói về Q8 Design
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cảm nhận từ khách hàng
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lắng nghe những chia sẻ chân thực từ các khách hàng đã tin tưởng 
            và đồng hành cùng Q8 Design trong hành trình kiến tạo không gian sống mơ ước.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Video/Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {currentData.hasVideo ? (
                  // Video Thumbnail with Play Button
                  <div className="relative group cursor-pointer">
                    <Image
                      src={currentData.videoThumbnail}
                      alt={`Video phỏng vấn ${currentData.name}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-96 transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300 shadow-2xl">
                        <FaPlay className="text-white text-2xl ml-1" />
                      </div>
                    </div>
                    
                    {/* Video Label */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        Video phỏng vấn
                      </span>
                    </div>
                  </div>
                ) : (
                  // Static Image
                  <Image
                    src={currentData.image}
                    alt={currentData.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-96"
                  />
                )}
              </div>
              
              {/* Quote Icon */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <FaQuoteLeft className="text-white text-xl" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              {/* Stars Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(currentData.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg md:text-xl leading-relaxed text-gray-700 italic">
                &ldquo;{currentData.content}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="border-l-4 border-orange-500 pl-6">
                <p className="text-xl font-bold text-gray-900 mb-1">
                  {currentData.name}
                </p>
                <p className="text-orange-600 font-medium mb-1">
                  {currentData.role}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  {currentData.location} • {currentData.year}
                </p>
                <p className="text-gray-700 font-medium">
                  {currentData.project}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? "bg-orange-500 w-8" 
                      : "bg-gray-300 hover:bg-orange-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-gray-600">Dự án hoàn thành</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">100%</div>
            <div className="text-gray-600">Khách hàng hài lòng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">10+</div>
            <div className="text-gray-600">Năm kinh nghiệm</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-600">Hỗ trợ khách hàng</div>
          </div>
        </div>
    
      </div>
    </section>
  );
}
