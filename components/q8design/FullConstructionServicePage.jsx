import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaRulerCombined, 
  FaArrowRight, 
  FaCheckCircle,
  FaStar,
  FaClock,
  FaShieldAlt,
  FaHome,
  FaBuilding,
  FaStore,
  FaCity,
  FaLeaf,
  FaDoorOpen,
  FaRobot,
  FaPalette,
  FaMoneyBillWave,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaAward,
  FaLightbulb,
  FaQuestionCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaSpa,
  FaTimes,
  FaCouch,
  FaHammer,
  FaTools,
  FaClipboardCheck,
  FaWrench
} from "react-icons/fa";
import ContactForm from "../header/ContactForm";

const FullConstructionServicePage = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  // Các loại hình Thi công Trọn gói Q8 Design thực hiện
  const serviceTypes = [
    {
      icon: FaHome,
      title: "Thi công Nhà phố & Biệt thự",
      description: "Chúng tôi đảm nhận toàn bộ quá trình thi công, từ phần thô (móng, kết cấu, tường, sàn) cho đến hoàn thiện nội thất. Q8 Design sẽ biến bản vẽ thiết kế thành một không gian sống hoàn hảo, đáp ứng mọi yêu cầu về công năng và phong cách của gia chủ.",
      features: [
        "Thi công phần thô hoàn chỉnh",
        "Hoàn thiện nội thất tinh tế",
        "Đảm bảo chất lượng cao nhất",
        "Đồng bộ giữa thiết kế và thi công"
      ],
      image: "/images/thiet-ke-noi-that-biet-thu-q8design.jpg"

    },
    {
      icon: FaBuilding,
      title: "Thi công Văn phòng & Tòa nhà Thương mại",
      description: "Chúng tôi am hiểu rằng không gian làm việc hay kinh doanh là yếu tố then chốt tạo nên bản sắc thương hiệu. Q8 Design cung cấp dịch vụ thi công văn phòng, showroom, nhà hàng, quán cà phê, giúp tối ưu hóa không gian, nâng cao trải nghiệm khách hàng và khẳng định vị thế thương hiệu trên thị trường.",
      features: [
        "Không gian làm việc chuyên nghiệp",
        "Tối ưu hóa công năng sử dụng",
        "Thể hiện bản sắc thương hiệu",
        "Nâng cao trải nghiệm khách hàng"
      ],
      image: "/images/thiet-ke-van-phong-chuyen-nghiep-q8design-2.webp"
    },
    {
      icon: FaCity,
      title: "Thi công Căn hộ & Chung cư cao cấp",
      description: "Đây là loại hình đòi hỏi sự chính xác và tinh tế trong từng chi tiết. Q8 Design chuyên thi công nội thất căn hộ theo thiết kế 3D, sử dụng các vật liệu cao cấp và đội ngũ thợ lành nghề để đảm bảo không gian sống của bạn không chỉ đẹp mà còn tiện nghi, hiện đại.",
      features: [
        "Thi công chính xác, tỉ mỉ",
        "Vật liệu cao cấp, bền vững",
        "Đội ngũ thợ lành nghề",
        "Không gian tiện nghi, hiện đại"
      ],
      image: "/images/thi-cong-noi-that-nha-pho.webp"
    }
  ];

  // Lợi ích khi chọn Dịch vụ Thi công Trọn gói
  const benefits = [
    {
      icon: FaMoneyBillWave,
      title: "Tiết kiệm Thời gian và Chi phí",
      description: "Q8 Design chịu trách nhiệm toàn bộ quy trình từ vật tư, nhân công cho đến giám sát, giúp loại bỏ các chi phí phát sinh không đáng có. Với một kế hoạch chi tiết, chúng tôi cam kết bàn giao đúng tiến độ, giúp bạn tiết kiệm được thời gian và chi phí quản lý."
    },
    {
      icon: FaPalette,
      title: "Đảm bảo Đồng bộ giữa Thiết kế và Thi công",
      description: "Một trong những rủi ro lớn nhất khi làm nhà là sản phẩm thực tế không giống với bản vẽ. Khi Q8 Design đảm nhận cả hai khâu, từ thiết kế đến thi công, chúng tôi đảm bảo mọi đường nét, màu sắc và vật liệu đều được hiện thực hóa một cách chuẩn xác, giữ trọn tinh thần thiết kế ban đầu."
    },
    {
      icon: FaShieldAlt,
      title: "Kiểm soát Chất lượng và Tiến độ",
      description: "Quy trình quản lý chặt chẽ và chuyên nghiệp giúp công trình luôn đạt chất lượng cao nhất. Chúng tôi sử dụng vật liệu đúng chuẩn đã cam kết và tuân thủ các tiêu chuẩn kỹ thuật nghiêm ngặt. Đồng thời, với sự giám sát liên tục, công trình sẽ được bàn giao đúng hạn, không làm lỡ kế hoạch của bạn."
    },
    {
      icon: FaHandshake,
      title: "Giảm thiểu Rủi ro và Trách nhiệm",
      description: "Lựa chọn Q8 Design, bạn không cần phải lo lắng về các vấn đề pháp lý hay an toàn lao động trong suốt quá trình thi công. Chúng tôi chịu trách nhiệm toàn bộ về kỹ thuật, an toàn và pháp lý, giúp bạn hoàn toàn an tâm và chỉ cần theo dõi tiến độ."
    }
  ];

  // Quy trình thi công
  const constructionProcess = [
    {
      step: "01",
      title: "Khảo sát & Báo giá sơ bộ",
      description: "Đây là bước đầu tiên và quan trọng nhất. Đội ngũ kỹ sư của chúng tôi sẽ gặp gỡ bạn để lắng nghe, thấu hiểu về phong cách sống, sở thích, nhu cầu sử dụng và ngân sách. Sau đó, chúng tôi sẽ tiến hành khảo sát thực địa để đo đạc chính xác diện tích, đánh giá hiện trạng không gian và lập dự toán chi tiết."
    },
    {
      step: "02",
      title: "Ký hợp đồng & Chuẩn bị vật liệu",
      description: "Khi đã có bản báo giá và dự toán chi tiết, hai bên sẽ tiến hành ký kết hợp đồng. Q8 Design sẽ lựa chọn nhà cung cấp vật liệu uy tín, cùng bạn chọn mẫu vật liệu, và tiến hành mua sắm để đảm bảo chất lượng, độ bền và tính thẩm mỹ cao nhất."
    },
    {
      step: "03",
      title: "Thi công phần thô",
      description: "Giai đoạn này tập trung vào việc xây dựng nền tảng vững chắc cho công trình. Chúng tôi sẽ tiến hành thi công móng, kết cấu, tường, sàn, và hệ thống điện nước. Mọi công đoạn đều được thực hiện theo tiêu chuẩn kỹ thuật nghiêm ngặt và dưới sự giám sát chặt chẽ của các kỹ sư Q8 Design."
    },
    {
      step: "04",
      title: "Thi công hoàn thiện",
      description: "Sau khi phần thô đã hoàn thành, chúng tôi sẽ chuyển sang giai đoạn thi công hoàn thiện. Giai đoạn này bao gồm việc lắp đặt trần, tường, sơn, cửa, thiết bị và nội thất. Mọi chi tiết đều được trau chuốt tỉ mỉ để đảm bảo công trình thực tế giống hệt với bản vẽ thiết kế ban đầu."
    },
    {
      step: "05",
      title: "Nghiệm thu & Bàn giao",
      description: "Khi công trình hoàn thành, chúng tôi sẽ cùng bạn tiến hành nghiệm thu từng hạng mục. Q8 Design cam kết bàn giao công trình đúng tiến độ, đúng bản vẽ và đảm bảo chất lượng cao nhất."
    },
    {
      step: "06",
      title: "Bảo hành & Hậu mãi",
      description: "Quy trình của chúng tôi không kết thúc khi công trình được bàn giao. Q8 Design sẽ tiếp tục đồng hành bằng việc cung cấp dịch vụ bảo hành và bảo trì định kỳ, đảm bảo bạn luôn an tâm sử dụng không gian sống của mình."
    }
  ];

  // Phong cách Thi công Trọn gói Phổ biến
  const constructionStyles = [
    {
      icon: FaLightbulb,
      title: "Thi công Phong cách Hiện đại",
      description: "Đây là phong cách phổ biến nhất hiện nay, tập trung vào sự tối giản, đường nét thẳng, và không gian mở. Thi công hiện đại đề cao công năng, loại bỏ các chi tiết rườm rà để tạo cảm giác thông thoáng, gọn gàng. Chúng tôi sử dụng các vật liệu như bê tông, kính, thép, và gam màu trung tính để mang lại vẻ đẹp tinh tế, hợp thời."
    },
    {
      icon: FaStar,
      title: "Thi công Phong cách Tân cổ điển",
      description: "Phong cách này là sự kết hợp tinh tế giữa vẻ đẹp cổ điển và sự tiện nghi của kiến trúc hiện đại. Tân cổ điển lược bỏ những chi tiết cầu kỳ, chỉ giữ lại các đường nét, hoa văn tinh xảo để tạo sự sang trọng, lãng mạn. Q8 Design sẽ khéo léo sử dụng các cột trụ, phào chỉ và gam màu kem, trắng để mang lại vẻ đẹp vượt thời gian cho công trình."
    },
    {
      icon: FaAward,
      title: "Thi công Phong cách Cổ điển",
      description: "Dành cho những công trình đòi hỏi sự xa hoa, tráng lệ và bề thế. Thi công cổ điển tập trung vào sự đối xứng, các hoa văn chạm khắc tinh xảo, và hệ thống cột lớn. Mỗi chi tiết đều được chúng tôi trau chuốt tỉ mỉ để tạo nên một tác phẩm nghệ thuật, thể hiện đẳng cấp và quyền uy của gia chủ."
    },
    {
      icon: FaLeaf,
      title: "Thi công Phong cách Tối giản",
      description: "Phong cách này hướng đến sự ít là nhiều. Thi công tối giản chỉ sử dụng những đường nét, hình khối cơ bản và màu sắc đơn giản để tạo ra không gian thoáng đãng, yên bình. Q8 Design sẽ tập trung vào việc tối ưu hóa công năng và sử dụng ánh sáng tự nhiên để biến ngôi nhà trở thành một nơi nghỉ ngơi hoàn hảo."
    },
    {
      icon: FaSpa,
      title: "Scandinavian & Indochine",
      description: "Bên cạnh các phong cách trên, Q8 Design còn am hiểu và thực hiện nhiều phong cách thi công đa dạng khác như Scandinavian, với vẻ đẹp ấm cúng, gần gũi từ gỗ và ánh sáng tự nhiên, hay Indochine, kết hợp nét Á Đông và phương Tây đầy cảm xúc. Dù bạn yêu thích phong cách nào, chúng tôi đều có thể hiện thực hóa."
    }
  ];

  // Tại sao chọn Q8 Design
  const whyChooseUs = [
    {
      icon: FaStar,
      title: "Đội ngũ Chuyên môn cao & Kinh nghiệm dày dặn",
      description: "Q8 Design được dẫn dắt bởi đội ngũ kiến trúc sư được đào tạo bài bản từ các trường đại học hàng đầu, với tư duy sáng tạo và kinh nghiệm dày dặn trong nhiều dự án. Chúng tôi không chỉ là người thiết kế, mà còn là những chuyên gia am hiểu về kỹ thuật, vật liệu và công năng, đảm bảo mọi bản vẽ đều có tính ứng dụng cao và phù hợp với thực tế."
    },
    {
      icon: FaHandshake,
      title: "Dịch vụ Trọn gói, không phát sinh",
      description: "Chúng tôi cung cấp dịch vụ toàn diện từ thiết kế kiến trúc, nội thất đến thi công trọn gói. Điều này đảm bảo sự đồng nhất và chính xác giữa bản vẽ và sản phẩm cuối cùng, giúp bạn tiết kiệm thời gian, công sức và chi phí quản lý."
    },
    {
      icon: FaAward,
      title: "Chất lượng là lời cam kết",
      description: "Q8 Design đặt sự chỉn chu và tỉ mỉ lên hàng đầu. Mỗi công trình đều được thực hiện với sự giám sát chặt chẽ, từ bản vẽ kỹ thuật đến thi công thực tế, cam kết mang lại sản phẩm bền vững và thẩm mỹ."
    },
    {
      icon: FaMoneyBillWave,
      title: "Minh bạch trong Báo giá",
      description: "Chúng tôi cam kết không phát sinh chi phí một cách không hợp lý, giúp bạn hoàn toàn an tâm. Mọi khoản mục đều được liệt kê rõ ràng ngay từ đầu, đảm bảo tính minh bạch tuyệt đối."
    },
    {
      icon: FaLightbulb,
      title: "Phong cách Độc bản",
      description: "Chúng tôi không chạy theo xu hướng mà tập trung vào bản sắc độc đáo. Mỗi thiết kế là một tác phẩm nghệ thuật, thể hiện câu chuyện riêng của gia chủ và vượt qua mọi giới hạn về sáng tạo."
    }
  ];

  // Câu hỏi thường gặp
  const faqs = [
    {
      icon: FaQuestionCircle,
      question: "Thi công trọn gói bao gồm những gì?",
      answer: "Thi công trọn gói tại Q8 Design bao gồm toàn bộ quy trình: từ việc hoàn thiện bản vẽ thiết kế, cung cấp vật liệu, thi công phần thô, hoàn thiện nội thất, đến khâu nghiệm thu và bàn giao công trình. Bạn chỉ cần chia sẻ ý tưởng, mọi việc còn lại đã có chúng tôi lo."
    },
    {
      icon: FaQuestionCircle,
      question: "Thời gian thi công mất bao lâu?",
      answer: "Thời gian thi công phụ thuộc vào diện tích, quy mô và độ phức tạp của từng công trình. Thông thường, đối với các công trình nhà ở dân dụng, thời gian thi công sẽ dao động từ 2 đến 6 tháng. Chúng tôi sẽ có lịch trình làm việc chi tiết và cam kết bàn giao đúng tiến độ."
    },
    {
      icon: FaQuestionCircle,
      question: "Có thể sử dụng vật liệu riêng không?",
      answer: "Có. Q8 Design luôn linh hoạt để đáp ứng mọi yêu cầu của khách hàng. Chúng tôi sẽ tư vấn và hỗ trợ bạn lựa chọn các loại vật liệu phù hợp với ngân sách và sở thích, nhưng vẫn đảm bảo các tiêu chuẩn về chất lượng và độ bền."
    },
    {
      icon: FaQuestionCircle,
      question: "Q8 Design có bảo hành sau bàn giao không?",
      answer: "Có. Q8 Design cam kết bảo hành sản phẩm đã thi công. Chúng tôi cung cấp dịch vụ bảo hành 5 năm cho phần kết cấu và 12 tháng cho phần hoàn thiện, kèm theo dịch vụ bảo trì định kỳ, giúp bạn hoàn toàn an tâm."
    }
  ];

  // Lấy 3 dự án tiêu biểu
  const featuredProjects = [
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      title: "Dự án Biệt thự FLC Sầm Sơn",
      subtitle: "Thi công trọn gói nghỉ dưỡng cao cấp",
      location: "FLC Sầm Sơn, Thanh Hóa",
      area: "350m²",
      type: "Thi công trọn gói",
      slug: "biet-thu-flc-sam-son",
      tags: ["Hiện đại", "Nghỉ dưỡng", "View biển"]
    },
    {
      image: "https://res.cloudinary.com/dwo0cghmc/image/upload/v1759747379/q8desgin/bfwn4vi8kfobgdzx5bhw.png",
      title: "Căn hộ Penthouse The K-Park",
      subtitle: "Thi công nội thất trọn gói",
      location: "The K-Park, Hà Nội",
      area: "120m²",
      type: "Thi công nội thất trọn gói",
      slug: "can-ho-penthouse-the-k-park",
      tags: ["Tối giản", "Sang trọng", "Penthouse"]
    },
    {
      image: "https://res.cloudinary.com/dwo0cghmc/image/upload/v1759469165/q8desgin/pqqjsqpmqm87aorfnhai.jpg",
      title: "Nhà phố liền kề Times City",
      subtitle: "Thi công cải tạo và nội thất",
      location: "Times City, Hà Nội",
      area: "80m²",
      type: "Cải tạo và Thi công nội thất",
      slug: "nha-pho-lin-k-times-city",
      tags: ["Hiện đại", "Ấm cúng", "Tối ưu"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative md:h-[70vh] h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/service-architecture.webp"
            alt="Dịch vụ Thi công Trọn gói Chuyên nghiệp | Q8 Design"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <span className="text-3xl md:text-5xl font-bold mb-8">
            Dịch vụ Thi công Trọn gói 
            <span className="text-orange-400"> Chuyên nghiệp</span>
          </span>
          <p className="text-lg md:text-xl mt-2 text-gray-200 max-w-5xl mx-auto leading-relaxed mb-8">
            Q8 Design – Đơn vị thi công trọn gói chuyên nghiệp từ thiết kế đến hoàn thiện. Cam kết đúng tiến độ, kiểm soát chi phí, đảm bảo chất lượng và thẩm mỹ cao nhất.
          </p>
          <button
            onClick={() => setIsContactPopupOpen(true)}
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all duration-300 group"
          >
            Tư vấn miễn phí
            <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* I. Giới thiệu về Dịch vụ Thi công Trọn gói */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Giới thiệu về Dịch vụ Thi công Trọn gói
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  Một công trình hoàn hảo không chỉ đến từ một bản vẽ đẹp, mà còn từ một quá trình thi công chuẩn xác, tỉ mỉ và chuyên nghiệp. Dù bản thiết kế có sáng tạo đến đâu, nếu không được hiện thực hóa đúng cách, mọi ý tưởng đều trở nên vô nghĩa.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  <Link href="/" className="text-orange-600">Q8 Design</Link> tự hào mang đến dịch vụ thi công trọn gói chuyên nghiệp, nơi mỗi công trình được tạo nên bởi sự thấu hiểu, sáng tạo và tinh tế. Chúng tôi không chỉ xây dựng, mà kiến tạo nên một không gian phản ánh phong cách sống của chủ nhân.
                </p>
              </div>
              
              <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/construction-architecture.webp"
                  alt="Đội ngũ kỹ sư Q8 Design giám sát công trình thi công"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* II. Lợi ích khi chọn Dịch vụ Thi công Trọn gói */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lợi ích khi chọn Dịch vụ Thi công Trọn gói
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lựa chọn dịch vụ thi công trọn gói của Q8 Design không chỉ đơn thuần là việc xây dựng một công trình. Đó là một quyết định thông minh giúp bạn tối ưu hóa toàn bộ quá trình, từ khâu lên ý tưởng cho đến khi cầm chìa khóa ngôi nhà mơ ước.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                        <Icon className="text-2xl text-orange-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <Image
              src="/images/doi-ngu-thiet-ke-noi-that-q8design.webp"
              alt="Lợi ích khi chọn dịch vụ thi công trọn gói chuyên nghiệp"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* III. Các loại hình Thi công Trọn gói Q8 Design thực hiện */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">
              Các loại hình Thi công Trọn gói Q8 Design thực hiện
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto">
              Q8 Design cung cấp dịch vụ thi công trọn gói đa dạng, từ nhà ở dân dụng cho đến các công trình thương mại. Dưới đây là các hạng mục chính mà chúng tôi chuyên sâu, đảm bảo mọi công trình đều được hoàn thiện với chất lượng và tính thẩm mỹ cao nhất.
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {serviceTypes.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
                        <Icon className="text-2xl text-orange-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <FaCheckCircle className="text-orange-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IV. Quy trình Thi công Trọn gói */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quy trình Thi công Trọn gói tại Q8 Design
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Để đảm bảo mỗi công trình là một tác phẩm hoàn hảo, Q8 Design đã xây dựng một quy trình làm việc khoa học, chặt chẽ, từ khâu lắng nghe ý tưởng cho đến khi công trình được hoàn thiện.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {constructionProcess.map((step, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* VI. Tại sao chọn Q8 Design */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn Q8 Design?
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto">
              Trong một thị trường đầy rẫy các đơn vị thi công, Q8 Design nổi bật với triết lý kinh doanh tử tế và sự cam kết về chất lượng. Lựa chọn chúng tôi, bạn không chỉ có một ngôi nhà đẹp mà còn có một người bạn đồng hành tin cậy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {whyChooseUs.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="text-2xl text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* VIII. Câu hỏi thường gặp */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Câu hỏi thường gặp (FAQ)
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dưới đây là những câu hỏi mà Q8 Design thường nhận được từ khách hàng. Chúng tôi đã tổng hợp và giải đáp chi tiết để giúp bạn có cái nhìn rõ ràng nhất về dịch vụ của chúng tôi.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                        <Icon className="text-orange-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IX. CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Hãy để Q8 Design biến bản vẽ thành hiện thực
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Với dịch vụ thi công trọn gói chuyên nghiệp, tiết kiệm và đẳng cấp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className="bg-white hover:bg-orange-50 text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                🗓️ ĐẶT LỊCH KHẢO SÁT CÔNG TRÌNH NGAY HÔM NAY!
              </button>
              <Link 
                href="tel:0988116828"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
              >
                📞 HOTLINE: 098 811 68 28
              </Link>
            </div>
            <div className="mt-8 text-orange-100">
              <p className="text-lg">
                <strong>Địa chỉ:</strong> Đ. Nam An Khánh - KĐT Nam An Khánh, Hà Nội
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Popup */}
      {isContactPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">Đặt lịch tư vấn miễn phí</h3>
              <button
                onClick={() => setIsContactPopupOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullConstructionServicePage;