import Image from "next/image";
import Link from "next/link";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaPinterest,
  FaArrowRight,
  FaLinkedin,
  FaClock,
  FaAward
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Giới thiệu", href: "/gioi-thieu" },
      { name: "Tầm nhìn & Sứ mệnh", href: "/gioi-thieu#tam-nhin" },
      { name: "Đội ngũ chuyên gia", href: "/gioi-thieu#doi-ngu" },
      { name: "Văn hóa doanh nghiệp", href: "/gioi-thieu#van-hoa" }
    ],
    services: [
      { name: "Thiết kế kiến trúc", href: "/dich-vu/thiet-ke-kien-truc" },
      { name: "Thiết kế nội thất", href: "/dich-vu/thiet-ke-noi-that" },
      { name: "Thi công trọn gói", href: "/dich-vu/thi-cong-tron-goi" },
      { name: "Cải tạo không gian", href: "/dich-vu/cai-tao-noi-that-chung-cu" }
    ],
    support: [
      { name: "Liên hệ", href: "/lien-he" },
      { name: "Tuyển dụng", href: "/tuyen-dung" },
      { name: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
      { name: "Điều khoản sử dụng", href: "/dieu-khoan-su-dung" }
    ]
  };

  const socialLinks = [
    { 
      name: "Facebook", 
      icon: FaFacebookF, 
      href: "https://facebook.com/Q8designvn",
      color: "hover:bg-blue-600"
    },
    { 
      name: "LinkedIn", 
      icon: FaLinkedin, 
      href: "https://linkedin.com/q8design",
      color: "hover:bg-red-500"
    },

    { 
      name: "Instagram", 
      icon: FaInstagram, 
      href: "https://instagram.com/q8design",
      color: "hover:bg-pink-600"
    },
    { 
      name: "YouTube", 
      icon: FaYoutube, 
      href: "https://youtube.com/@q8design",
      color: "hover:bg-red-600"
    },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
      
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <Link href="/" className="inline-block">
                    <div className="flex items-center">
                      <div className="w-20 h-20 rounded-xl overflow-hidden">
                        <Image
                          src="/logo-q8-02.png"
                          alt="Q8 Design Logo"
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">Q8 Design</div>
                        <div className="text-orange-400 text-sm">Nâng tầm không gian sống</div>
                      </div>
                    </div>
                  </Link>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Biến ý tưởng thành hiện thực với những thiết kế đột phá và dịch vụ tận tâm. 
                  Chúng tôi đồng hành cùng bạn để kiến tạo không gian sống mơ ước.
                </p>

                {/* Awards & Certifications */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FaAward className="text-orange-400" />
                    <span className="text-sm text-gray-300">Top 10 Công ty thiết kế nội thất 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaAward className="text-orange-400" />
                    <span className="text-sm text-gray-300">Chứng nhận ISO 9001:2015</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {/* Company */}
                  <div>
                    <p className="text-lg font-bold mb-6 text-white">Công ty</p>
                    <ul className="space-y-3">
                      {footerLinks.company.map((link, index) => (
                        <li key={index}>
                          <Link 
                            href={link.href}
                            className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services */}
                  <div>
                    <p className="text-lg font-bold mb-6 text-white">Dịch vụ</p>
                    <ul className="space-y-3">
                      {footerLinks.services.map((link, index) => (
                        <li key={index}>
                          <Link 
                            href={link.href}
                            className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>


                  {/* Support */}
                  <div>
                    <p className="text-lg font-bold mb-6 text-white">Hỗ trợ</p>
                    <ul className="space-y-3">
                      {footerLinks.support.map((link, index) => (
                        <li key={index}>
                          <Link 
                            href={link.href}
                            className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-1">
                <p className="text-lg font-bold mb-6 text-white">Liên hệ</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">
                        Đ. Nam An Khánh - KĐT Nam An Khánh,
                        Hà Nội
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-orange-400 flex-shrink-0" />
                    <div>
                      <a 
                        href="tel:0988116828" 
                        className="text-gray-300 hover:text-orange-400 transition-colors"
                      >
                        098 811 68 28
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-orange-400 flex-shrink-0" />
                    <div>
                      <a 
                        href="mailto:info@q8design.vn" 
                        className="text-gray-300 hover:text-orange-400 transition-colors"
                      >
                        info@q8design.vn
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaClock className="text-orange-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">
                        T2-T7: 8:00 - 18:00<br />
                        CN: 9:00 - 17:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <p className="font-bold mb-4 text-white">Kết nối với chúng tôi</p>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 bg-gray-800 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110`}
                          aria-label={social.name}
                        >
                          <Icon className="text-white" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400">
                  © {currentYear} Q8 Design. Tất cả quyền được bảo lưu.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center md:justify-end space-x-6">
                <Link 
                  href="/chinh-sach-bao-mat" 
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Chính sách bảo mật
                </Link>
                <Link 
                  href="/dieu-khoan-su-dung" 
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Điều khoản sử dụng
                </Link>
                <Link 
                  href="/api/sitemap.xml" 
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                >
                  Sơ đồ trang web
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Company Brand Statement */}
        <div className="border-t border-gray-800 py-4 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-gray-500 text-base ">
                Q8 Design - Công ty cổ phần  Q8 Việt Nam
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
