"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  const features = [
    "Đội ngũ giảng viên chuyên nghiệp",
    "Học online từ xa linh hoạt",
    "Chương trình đào tạo dễ theo dõi", 
    "Hỗ trợ trọn đời"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -top-6 -left-6 grid grid-cols-4 gap-2 opacity-30">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-green-500 rounded-full"></div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl p-3 shadow-xl">
              <Image
                src="/images/mc-bich-thut-1.jpg"
                alt="MC Training at BT Academy"
                width={500}
                height={400}
                className="w-full h-auto rounded-xl object-cover"
              />
              
              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Học viên đã đăng ký</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-purple-400 rounded-full opacity-60"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-gray-100 text-gray-700 px-4 py-3 rounded-full text-sm font-bold tracking-wider uppercase">
                Chào mừng đến với BT Academy
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Trung tâm MC BT Academy:{" "}
                <span style={{
                  background: 'linear-gradient(135deg, #9333ea 0%, #2563eb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Con đường
                </span>{" "}
                đến sự{" "}
                <span style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #16a34a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Xuất sắc
                </span>{" "}
                trong Giao tiếp
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Chúng tôi đào tạo những MC và diễn giả tự tin, chuyên nghiệp với khả năng giao tiếp xuất sắc, 
                giúp bạn tỏa sáng ở mọi nơi bạn đến.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex mx-auto sm:flex-row gap-4 pt-2">
              <Link href="/gioi-thieu-bt-academy">
                <button 
                  className="text-white px-5 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)'
                  }}
                >
                  Tìm hiểu thêm
                </button>
              </Link>

              <Link href="/khoa-hoc">
                <button className="btn-white text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Xem khóa học
                </button>
              </Link>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Học viên tốt nghiệp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">10+</div>
                <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Hài lòng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
