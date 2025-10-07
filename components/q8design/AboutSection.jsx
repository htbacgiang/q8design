import { FaLightbulb, FaHandshake, FaCog, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const coreValues = [
    {
      icon: FaLightbulb,
      title: "Sáng tạo",
      subtitle: "Creativity",
      description: "Biến ý tưởng thành dấu ấn độc đáo. Chúng tôi luôn tìm tòi, khám phá những ý tưởng đột phá để tạo ra những công trình mang đậm dấu ấn cá nhân, không trùng lặp.",
      number: "01"
    },
    {
      icon: FaHandshake,
      title: "Đồng hành",
      subtitle: "Partnership", 
      description: "Sát cánh cùng bạn trên mọi chặng đường. Mỗi dự án là một hành trình hợp tác, nơi chúng tôi lắng nghe và thấu hiểu mọi mong muốn để mang đến sự hỗ trợ tận tâm nhất.",
      number: "02"
    },
    {
      icon: FaCog,
      title: "Linh hoạt", 
      subtitle: "Flexibility",
      description: "Luôn tìm kiếm giải pháp phù hợp nhất. Chúng tôi không ngừng điều chỉnh và tối ưu để đưa ra các giải pháp thiết kế - thi công phù hợp nhất với nhu cầu và ngân sách của khách hàng.",
      number: "03"
    },
    {
      icon: FaCheckCircle,
      title: "Vẹn tròn",
      subtitle: "Integrity",
      description: "Hoàn thiện từng chi tiết để bạn an tâm. Sự chỉn chu và tỉ mỉ trong từng chi tiết là cam kết của Q8 Design, đảm bảo công trình hoàn thiện với chất lượng tốt nhất.",
      number: "04"
    }
  ];

  return (
    <section className="q8-section q8-section-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23121212' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-50/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-block mb-8">
            <span className="inline-flex items-center px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-sm font-bold tracking-widest uppercase text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-300">
              Về chúng tôi
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 max-w-5xl mx-auto leading-tight">
            Tại sao chọn 
            <span className="relative inline-block ml-3">
              Q8 Design?
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-600 font-light">
            Giới thiệu về giá trị cốt lõi của thương hiệu Q8 Design - nơi sự sáng tạo, 
            đồng hành, linh hoạt và vẹn tròn hòa quyện để tạo nên những không gian sống đẳng cấp.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 md:px-0 px-2">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-300 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Number Badge */}
                <div className="absolute -top-6 -right-1 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                  {value.number}
                </div>

                {/* Icon, Title & Subtitle in one row */}
                <div className="flex items-center gap-6 mb-8">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center group-hover:from-gray-900 group-hover:to-gray-800 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl flex-shrink-0">
                    <Icon className="text-3xl text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Title & Subtitle */}
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                      {value.title}
                    </p>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">
                      {value.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-gray-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Visual Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center md:px-0 px-2">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src="/images/about-image.webp"
                alt="Q8 Design team working"
                width={600}
                height={500}
                className="object-cover w-full h-[500px] transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-5 bg-white rounded-3xl p-6 shadow-2xl border border-gray-200 transform rotate-6 group-hover:rotate-0 transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Dự án hoàn thành</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 -left-4 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
              <div className="absolute bottom-20 -left-8 w-12 h-12 bg-white/10 rounded-full blur-md"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 order-1 lg:order-2 md:px-0 px-2">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Đội ngũ chuyên nghiệp với kinh nghiệm dày dặn
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Với hơn 10 năm kinh nghiệm trong lĩnh vực thiết kế và thi công nội thất, 
                đội ngũ Q8 Design luôn cam kết mang đến những giải pháp tối ưu nhất cho mọi không gian sống.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {[
                "Đội ngũ kiến trúc sư giàu kinh nghiệm",
                "Quy trình làm việc chuyên nghiệp, minh bạch", 
                "Sử dụng vật liệu cao cấp, thân thiện môi trường",
                "Cam kết tiến độ và chất lượng công trình"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaCheckCircle className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link href="/gioi-thieu" className="group inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span>Tìm hiểu thêm về chúng tôi</span>
                <FaArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
