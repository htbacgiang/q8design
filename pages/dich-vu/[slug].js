import Head from "next/head";
import { useRouter } from "next/router";
import DefaultLayout from "../../components/layout/DefaultLayout";
import ServiceDetail from "../../components/q8design/ServiceDetail";

// Dữ liệu các dịch vụ
const servicesData = {
  "thiet-ke-kien-truc": {
    id: "thiet-ke-kien-truc",
    title: "Thiết kế Kiến trúc",
    shortDescription: "Chúng tôi kiến tạo những công trình kiến trúc độc đáo và bền vững.",
    fullDescription: "Từ nhà phố, biệt thự đến các công trình thương mại, Q8 Design mang đến giải pháp kiến trúc hiện đại, phù hợp với phong cách sống Việt Nam. Chúng tôi cam kết tạo ra những công trình không chỉ đẹp mắt mà còn bền vững, tiết kiệm năng lượng và thân thiện với môi trường.",
    image: "/images/service-architecture.jpg",
    gallery: [
      "/images/q8design/architecture-1.jpg",
      "/images/q8design/architecture-2.jpg", 
      "/images/q8design/architecture-3.jpg",
      "/images/q8design/architecture-4.jpg",
      "/images/q8design/architecture-5.jpg",
      "/images/q8design/architecture-6.jpg"
    ],
    services: [
      "Thiết kế kiến trúc nhà phố", 
      "Thiết kế kiến trúc biệt thự",
      "Thiết kế kiến trúc thương mại",
      "Thiết kế kiến trúc công nghiệp", 
      "Thiết kế quy hoạch khu đô thị",
      "Tư vấn cải tạo kiến trúc"
    ],
    process: [
      {
        step: 1,
        title: "Khảo sát & Phân tích",
        description: "Khảo sát địa hình, phân tích điều kiện tự nhiên, quy hoạch và định hướng thiết kế kiến trúc."
      },
      {
        step: 2, 
        title: "Concept & Quy hoạch",
        description: "Phát triển ý tưởng kiến trúc, quy hoạch tổng thể và tạo concept thiết kế ban đầu."
      },
      {
        step: 3,
        title: "Thiết kế kỹ thuật",
        description: "Hoàn thiện bản vẽ kỹ thuật chi tiết, tính toán kết cấu và hệ thống kỹ thuật."
      },
      {
        step: 4,
        title: "Bàn giao & Giám sát",
        description: "Bàn giao hồ sơ thiết kế hoàn chỉnh và giám sát thi công đảm bảo chất lượng."
      }
    ],
    features: [
      {
        title: "Kiến trúc bền vững",
        description: "Thiết kế kiến trúc thân thiện với môi trường, tiết kiệm năng lượng và sử dụng vật liệu bền vững."
      },
      {
        title: "Tối ưu không gian",
        description: "Khai thác tối đa tiềm năng đất đai, tạo ra không gian sống và làm việc hiệu quả."
      },
      {
        title: "Phong cách hiện đại",
        description: "Kết hợp hài hòa giữa kiến trúc hiện đại và văn hóa truyền thống Việt Nam."
      },
      {
        title: "Tuân thủ quy chuẩn",
        description: "Đảm bảo tuân thủ đầy đủ các quy chuẩn xây dựng và quy định pháp luật."
      }
    ],
    pricing: {
      basic: {
        name: "Gói Cơ bản",
        price: "200.000đ - 400.000đ/m²",
        description: "Thiết kế kiến trúc cơ bản và bản vẽ 2D",
        includes: [
          "Khảo sát và tư vấn",
          "Thiết kế concept kiến trúc",
          "Bản vẽ mặt bằng, mặt đứng 2D",
          "Bản vẽ mặt cắt cơ bản"
        ]
      },
      standard: {
        name: "Gói Tiêu chuẩn", 
        price: "400.000đ - 700.000đ/m²",
        description: "Thiết kế kiến trúc chi tiết với hình ảnh 3D",
        includes: [
          "Tất cả dịch vụ gói cơ bản",
          "Bản vẽ kỹ thuật chi tiết",
          "Hình ảnh 3D kiến trúc",
          "Bản vẽ kết cấu cơ bản",
          "Hỗ trợ xin phép xây dựng"
        ]
      },
      premium: {
        name: "Gói Cao cấp",
        price: "700.000đ - 1.000.000đ/m²", 
        description: "Thiết kế kiến trúc hoàn chỉnh và cao cấp",
        includes: [
          "Tất cả dịch vụ gói tiêu chuẩn",
          "Video 3D walkthrough",
          "Thiết kế cảnh quan",
          "Giám sát thi công",
          "Bảo hành thiết kế 3 năm"
        ]
      }
    },
    faqs: [
      {
        question: "Thời gian thiết kế kiến trúc mất bao lâu?",
        answer: "Thời gian thiết kế kiến trúc phụ thuộc vào quy mô dự án. Nhà phố 3-4 tầng mất 3-4 tuần, biệt thự lớn có thể mất 6-8 tuần, công trình thương mại mất 8-12 tuần."
      },
      {
        question: "Có hỗ trợ xin phép xây dựng không?",
        answer: "Có, chúng tôi hỗ trợ hoàn thiện hồ sơ xin phép xây dựng và các thủ tục pháp lý liên quan đến dự án."
      },
      {
        question: "Thiết kế có tuân thủ quy chuẩn không?",
        answer: "Tất cả thiết kế đều tuân thủ đầy đủ quy chuẩn xây dựng Việt Nam và các quy định của địa phương."
      },
      {
        question: "Có thiết kế kiến trúc xanh không?",
        answer: "Có, chúng tôi chuyên về thiết kế kiến trúc xanh, tiết kiệm năng lượng và thân thiện với môi trường."
      }
    ],
    testimonials: [
      {
        name: "Anh Trần Minh Tuấn", 
        project: "Thiết kế kiến trúc biệt thự",
        rating: 5,
        comment: "Đội ngũ thiết kế rất chuyên nghiệp, lắng nghe và hiểu rõ nhu cầu. Biệt thự được thiết kế hiện đại nhưng vẫn ấm cúng."
      },
      {
        name: "Chị Lê Thị Hương",
        project: "Thiết kế kiến trúc nhà phố",
        rating: 5,
        comment: "Q8 Design đã tạo ra một ngôi nhà đẹp và tiện nghi cho gia đình tôi. Thiết kế tối ưu không gian rất tốt."
      }
    ],
    color: "orange",
    icon: "FaRulerCombined"
  },
  "thiet-ke-noi-that": {
    id: "thiet-ke-noi-that",
    title: "Thiết kế Nội thất",
    shortDescription: "Biến không gian sống của bạn thành tác phẩm nghệ thuật với sự sáng tạo và tinh tế.",
    fullDescription: "Q8 Design chuyên thiết kế nội thất cao cấp, tối ưu công năng và thể hiện cá tính riêng của gia chủ. Từ căn hộ chung cư đến biệt thự sang trọng, chúng tôi tạo ra những không gian sống đẹp mắt, tiện nghi và phù hợp với phong cách sống hiện đại.",
    image: "/images/service-interior-2.jpg",
    gallery: [
      "/images/q8design/interior-1.jpg",
      "/images/q8design/interior-2.jpg", 
      "/images/q8design/interior-3.jpg",
      "/images/q8design/interior-4.jpg",
      "/images/q8design/interior-5.jpg",
      "/images/q8design/interior-6.jpg"
    ],
    services: [
      "Thiết kế nội thất nhà phố",
      "Thiết kế nội thất chung cư", 
      "Thiết kế nội thất biệt thự",
      "Thiết kế nội thất văn phòng",
      "Thiết kế nội thất cửa hàng",
      "Thiết kế nội thất khách sạn"
    ],
    process: [
      {
        step: 1,
        title: "Tư vấn & Khảo sát",
        description: "Gặp gỡ trao đổi ý tưởng, khảo sát không gian, phân tích nhu cầu và định hướng phong cách nội thất."
      },
      {
        step: 2, 
        title: "Concept & Bố cục",
        description: "Phát triển ý tưởng nội thất, bố cục không gian và tạo concept thiết kế chi tiết."
      },
      {
        step: 3,
        title: "Thiết kế chi tiết",
        description: "Hoàn thiện bản vẽ nội thất, chọn lựa vật liệu, màu sắc và các chi tiết trang trí."
      },
      {
        step: 4,
        title: "Bàn giao & Hỗ trợ",
        description: "Bàn giao hồ sơ thiết kế hoàn chỉnh và hỗ trợ giám sát thi công nội thất."
      }
    ],
    features: [
      {
        title: "Thiết kế độc đáo",
        description: "Mỗi không gian đều được thiết kế riêng biệt, phù hợp với cá tính và nhu cầu của gia chủ."
      },
      {
        title: "Tối ưu công năng",
        description: "Khai thác tối đa tiềm năng của không gian, tạo ra sự hài hòa giữa thẩm mỹ và công năng sử dụng."
      },
      {
        title: "Vật liệu cao cấp",
        description: "Lựa chọn và tư vấn các vật liệu nội thất cao cấp, bền đẹp và phù hợp với ngân sách."
      },
      {
        title: "Phong cách đa dạng",
        description: "Thiết kế theo nhiều phong cách từ hiện đại, tối giản đến cổ điển, phù hợp với sở thích khách hàng."
      }
    ],
    pricing: {
      basic: {
        name: "Gói Cơ bản",
        price: "300.000đ - 500.000đ/m²",
        description: "Thiết kế nội thất cơ bản và bản vẽ 2D",
        includes: [
          "Khảo sát và tư vấn",
          "Thiết kế concept nội thất",
          "Bản vẽ mặt bằng nội thất 2D",
          "Danh sách vật liệu cơ bản"
        ]
      },
      standard: {
        name: "Gói Tiêu chuẩn", 
        price: "500.000đ - 800.000đ/m²",
        description: "Thiết kế nội thất chi tiết với hình ảnh 3D",
        includes: [
          "Tất cả dịch vụ gói cơ bản",
          "Bản vẽ kỹ thuật nội thất chi tiết",
          "Hình ảnh 3D chất lượng cao",
          "Danh sách vật liệu chi tiết",
          "Hỗ trợ thi công nội thất"
        ]
      },
      premium: {
        name: "Gói Cao cấp",
        price: "800.000đ - 1.200.000đ/m²", 
        description: "Dịch vụ thiết kế nội thất hoàn chỉnh và cao cấp",
        includes: [
          "Tất cả dịch vụ gói tiêu chuẩn",
          "Video 3D walkthrough",
          "Thiết kế nội thất chi tiết từng phòng",
          "Giám sát thi công nội thất",
          "Bảo hành thiết kế 2 năm"
        ]
      }
    },
    faqs: [
      {
        question: "Thời gian thiết kế nội thất mất bao lâu?",
        answer: "Thời gian thiết kế nội thất phụ thuộc vào quy mô dự án. Căn hộ 80-100m² mất 2-3 tuần, nhà phố 4-5 tầng mất 3-4 tuần, biệt thự lớn có thể mất 4-6 tuần."
      },
      {
        question: "Có thiết kế theo phong cách nào?",
        answer: "Chúng tôi thiết kế theo nhiều phong cách: hiện đại, tối giản, cổ điển, industrial, scandinavian, tropical... phù hợp với sở thích khách hàng."
      },
      {
        question: "Có hỗ trợ chọn nội thất không?",
        answer: "Có, chúng tôi tư vấn và hỗ trợ chọn lựa nội thất phù hợp với thiết kế và ngân sách của khách hàng."
      },
      {
        question: "Có thiết kế nội thất thông minh không?",
        answer: "Có, chúng tôi chuyên thiết kế nội thất thông minh với hệ thống smarthome, tiết kiệm năng lượng và tiện nghi."
      }
    ],
    testimonials: [
      {
        name: "Chị Nguyễn Thu Hà",
        project: "Thiết kế nội thất căn hộ Vinhomes",
        rating: 5,
        comment: "Q8 Design đã biến căn hộ nhỏ của tôi thành một không gian sống tuyệt vời. Thiết kế vừa đẹp vừa tối ưu, rất hài lòng!"
      },
      {
        name: "Anh Phạm Văn Đức",
        project: "Thiết kế nội thất văn phòng",
        rating: 5,
        comment: "Văn phòng được thiết kế rất chuyên nghiệp và hiện đại. Nhân viên làm việc hiệu quả hơn trong không gian mới."
      }
    ],
    color: "orange",
    icon: "FaCouch"
  },
  "thi-cong-tron-goi": {
    id: "thi-cong-tron-goi",
    title: "Thi công trọn gói",
    shortDescription: "Đảm bảo công trình được hoàn thiện đúng tiến độ, chất lượng và thẩm mỹ theo thiết kế.",
    fullDescription: "Chúng tôi quản lý và giám sát chặt chẽ mọi công đoạn, từ xây dựng phần thô đến hoàn thiện nội thất, để bạn hoàn toàn an tâm. Với đội ngũ thợ lành nghề và quy trình quản lý chất lượng nghiêm ngặt, Q8 Design cam kết mang đến công trình hoàn hảo nhất.",
    image: "/images/service-construction.jpg",
    gallery: [
      "/images/q8design/construction-1.jpg",
      "/images/q8design/construction-2.jpg",
      "/images/q8design/construction-3.jpg", 
      "/images/q8design/construction-4.jpg",
      "/images/q8design/construction-5.jpg",
      "/images/q8design/construction-6.jpg"
    ],
    services: [
      "Thi công trọn gói từ A-Z",
      "Thi công phần thô", 
      "Thi công đồ gỗ nội thất",
      "Thi công hoàn thiện theo bản vẽ",
      "Thi công kiến trúc", 
      "Giám sát chất lượng 24/7"
    ],
    process: [
      {
        step: 1,
        title: "Khảo sát & Báo giá",
        description: "Khảo sát thực tế, đánh giá hiện trạng và đưa ra báo giá chi tiết cho từng hạng mục."
      },
      {
        step: 2,
        title: "Ký hợp đồng & Chuẩn bị",
        description: "Ký kết hợp đồng thi công, chuẩn bị vật liệu, thiết bị và lên kế hoạch thi công chi tiết."
      },
      {
        step: 3,
        title: "Thi công & Giám sát",
        description: "Triển khai thi công theo đúng kế hoạch với sự giám sát chặt chẽ về chất lượng và tiến độ."
      },
      {
        step: 4,
        title: "Nghiệm thu & Bảo hành",
        description: "Nghiệm thu công trình, bàn giao và cam kết bảo hành theo quy định."
      }
    ],
    features: [
      {
        title: "Đội ngũ thợ lành nghề",
        description: "Đội ngũ thợ có kinh nghiệm lâu năm, được đào tạo chuyên nghiệp và thường xuyên cập nhật kỹ thuật mới."
      },
      {
        title: "Vật liệu chính hãng",
        description: "Sử dụng 100% vật liệu chính hãng từ các thương hiệu uy tín, có chứng nhận chất lượng."
      },
      {
        title: "Quản lý tiến độ",
        description: "Hệ thống quản lý tiến độ hiện đại, cập nhật thông tin công trình hàng ngày cho khách hàng."
      },
      {
        title: "Bảo hành dài hạn",
        description: "Cam kết bảo hành lên đến 24 tháng cho các hạng mục chính và hỗ trợ suốt đời."
      }
    ],
    pricing: {
      basic: {
        name: "Gói Phần thô",
        price: "3.500.000đ - 5.000.000đ/m²",
        description: "Thi công phần kết cấu và hoàn thiện cơ bản",
        includes: [
          "Móng, cột, dầm, sàn",
          "Tường xây, trát",
          "Mái, chống thấm",
          "Hệ thống điện nước cơ bản"
        ]
      },
      standard: {
        name: "Gói Hoàn thiện",
        price: "6.000.000đ - 9.000.000đ/m²", 
        description: "Thi công hoàn thiện đầy đủ nội ngoại thất",
        includes: [
          "Tất cả hạng mục gói phần thô",
          "Ốp lát, sơn nước",
          "Cửa, cửa sổ",
          "Hệ thống điện nước hoàn chỉnh",
          "Nội thất cơ bản"
        ]
      },
      premium: {
        name: "Gói Cao cấp",
        price: "10.000.000đ - 15.000.000đ/m²",
        description: "Thi công trọn gói với nội thất cao cấp",
        includes: [
          "Tất cả hạng mục gói hoàn thiện",
          "Nội thất cao cấp theo thiết kế",
          "Hệ thống smarthome",
          "Sân vườn, tiểu cảnh",
          "Bảo hành 24 tháng"
        ]
      }
    },
    faqs: [
      {
        question: "Thời gian thi công mất bao lâu?",
        answer: "Thời gian thi công phụ thuộc vào quy mô dự án. Căn hộ 80-100m² mất 2-3 tháng, nhà phố 4-5 tầng mất 4-6 tháng, biệt thự có thể mất 6-12 tháng."
      },
      {
        question: "Có bảo hành bao lâu?",
        answer: "Chúng tôi bảo hành 12-24 tháng tùy theo hạng mục. Kết cấu bảo hành 24 tháng, hoàn thiện bảo hành 12 tháng, nội thất bảo hành 6-12 tháng."
      },
      {
        question: "Thanh toán như thế nào?",
        answer: "Thanh toán theo tiến độ: 30% khi khởi công, 40% khi hoàn thành phần thô, 25% khi hoàn thiện và 5% sau nghiệm thu 30 ngày."
      },
      {
        question: "Có giám sát chất lượng không?",
        answer: "Có, chúng tôi có đội ngũ giám sát chuyên nghiệp kiểm tra chất lượng hàng ngày và báo cáo định kỳ cho khách hàng."
      }
    ],
    testimonials: [
      {
        name: "Anh Lê Văn Nam",
        project: "Thi công nhà phố 4 tầng",
        rating: 5,
        comment: "Thi công đúng tiến độ, chất lượng tốt. Đội ngũ làm việc chuyên nghiệp, tôi rất hài lòng với kết quả."
      },
      {
        name: "Chị Phạm Thị Lan",
        project: "Thi công biệt thự",
        rating: 5, 
        comment: "Q8 Design thi công rất tỉ mỉ, từ khâu chuẩn bị đến hoàn thiện. Biệt thự của tôi đẹp hơn cả mong đợi."
      }
    ],
    color: "orange",
    icon: "FaHammer"
  },
  "cai-tao-khong-gian": {
    id: "cai-tao-khong-gian",
    title: "Cải tạo không gian",
    shortDescription: "Biến hóa không gian cũ thành mới với chi phí tối ưu và thời gian nhanh chóng.",
    fullDescription: "Dù là cải tạo toàn bộ hay chỉ một phần không gian, chúng tôi sẽ giúp bạn tối ưu hóa công năng sử dụng và nâng cao tính thẩm mỹ. Với kinh nghiệm trong việc xử lý các vấn đề kỹ thuật phức tạp, Q8 Design đảm bảo mang lại không gian mới hoàn toàn phù hợp với nhu cầu hiện tại.",
    image: "/images/service-renovation.jpg",
    gallery: [
      "/images/q8design/renovation-before-1.jpg",
      "/images/q8design/renovation-after-1.jpg",
      "/images/q8design/renovation-before-2.jpg", 
      "/images/q8design/renovation-after-2.jpg",
      "/images/q8design/renovation-before-3.jpg",
      "/images/q8design/renovation-after-3.jpg"
    ],
    services: [
      "Cải tạo nhà cũ thành mới",
      "Cải tạo căn hộ cũ",
      "Mở rộng không gian",
      "Thay đổi công năng phòng",
      "Nâng cấp hệ thống kỹ thuật",
      "Cải tạo mặt tiền"
    ],
    process: [
      {
        step: 1,
        title: "Khảo sát hiện trạng",
        description: "Đánh giá tình trạng công trình, xác định các vấn đề cần khắc phục và tiềm năng cải tạo."
      },
      {
        step: 2,
        title: "Thiết kế cải tạo",
        description: "Đưa ra phương án cải tạo tối ưu, phù hợp với ngân sách và nhu cầu sử dụng."
      },
      {
        step: 3,
        title: "Tháo dỡ & Cải tạo",
        description: "Tiến hành tháo dỡ an toàn và thi công cải tạo theo đúng thiết kế đã duyệt."
      },
      {
        step: 4,
        title: "Hoàn thiện & Bàn giao",
        description: "Hoàn thiện các hạng mục cuối cùng và bàn giao không gian mới cho khách hàng."
      }
    ],
    features: [
      {
        title: "Tối ưu ngân sách",
        description: "Tư vấn phương án cải tạo hiệu quả, tận dụng tối đa kết cấu hiện có để tiết kiệm chi phí."
      },
      {
        title: "Xử lý kỹ thuật",
        description: "Giải quyết các vấn đề kỹ thuật phức tạp như chống thấm, gia cường kết cấu, nâng cấp hệ thống."
      },
      {
        title: "Thi công nhanh chóng",
        description: "Quy trình thi công được tối ưu hóa để rút ngắn thời gian và giảm thiểu ảnh hưởng đến sinh hoạt."
      },
      {
        title: "Đảm bảo an toàn",
        description: "Tuân thủ nghiêm ngặt các quy định về an toàn lao động và an toàn công trình."
      }
    ],
    pricing: {
      basic: {
        name: "Cải tạo cơ bản",
        price: "2.000.000đ - 4.000.000đ/m²",
        description: "Cải tạo nội thất và hoàn thiện bề mặt",
        includes: [
          "Tháo dỡ nội thất cũ",
          "Sửa chữa tường, trần",
          "Ốp lát, sơn mới",
          "Thay cửa, thiết bị vệ sinh"
        ]
      },
      standard: {
        name: "Cải tạo toàn diện",
        price: "4.000.000đ - 7.000.000đ/m²",
        description: "Cải tạo bao gồm hệ thống kỹ thuật",
        includes: [
          "Tất cả hạng mục cải tạo cơ bản",
          "Nâng cấp hệ thống điện nước",
          "Thay đổi bố cục không gian",
          "Gia cường kết cấu nếu cần"
        ]
      },
      premium: {
        name: "Cải tạo cao cấp",
        price: "7.000.000đ - 12.000.000đ/m²",
        description: "Cải tạo hoàn toàn với nội thất cao cấp",
        includes: [
          "Tất cả hạng mục cải tạo toàn diện",
          "Nội thất cao cấp theo thiết kế",
          "Hệ thống thông minh",
          "Bảo hành 18 tháng"
        ]
      }
    },
    faqs: [
      {
        question: "Cải tạo có cần xin phép không?",
        answer: "Tùy thuộc vào quy mô cải tạo. Cải tạo nội thất thông thường không cần xin phép, nhưng thay đổi kết cấu hoặc mặt tiền cần có giấy phép."
      },
      {
        question: "Thời gian cải tạo mất bao lâu?",
        answer: "Căn hộ 80m² cải tạo cơ bản mất 1-2 tháng, cải tạo toàn diện mất 2-3 tháng. Nhà phố có thể mất 3-4 tháng."
      },
      {
        question: "Có ảnh hưởng đến hàng xóm không?",
        answer: "Chúng tôi cam kết thi công trong giờ quy định, sử dụng biện pháp giảm tiếng ồn và bụi bẩn, thông báo trước với hàng xóm."
      },
      {
        question: "Chi phí phát sinh có nhiều không?",
        answer: "Chúng tôi khảo sát kỹ lưỡng và báo giá chi tiết từ đầu. Chi phí phát sinh chỉ xảy ra khi có yêu cầu thay đổi từ khách hàng."
      }
    ],
    testimonials: [
      {
        name: "Ông Nguyễn Văn Hùng",
        project: "Cải tạo nhà cũ 20 năm",
        rating: 5,
        comment: "Nhà cũ của tôi được cải tạo thành không gian hiện đại, thoáng đãng. Q8 Design làm việc rất chuyên nghiệp và chu đáo."
      },
      {
        name: "Bà Trần Thị Mai",
        project: "Cải tạo căn hộ chung cư",
        rating: 5,
        comment: "Căn hộ 15 năm tuổi được cải tạo hoàn toàn, không gian thoáng hơn và tiện nghi hơn rất nhiều."
      }
    ],
    color: "orange",
    icon: "FaHome"
  },
  "tu-van-ho-tro": {
    id: "tu-van-ho-tro",
    title: "Tư vấn và hỗ trợ",
    shortDescription: "Đồng hành cùng khách hàng từ khâu ý tưởng đến khi hoàn thiện dự án.",
    fullDescription: "Chúng tôi không chỉ cung cấp dịch vụ thiết kế và thi công mà còn là người bạn đồng hành đáng tin cậy trong suốt hành trình tạo nên ngôi nhà mơ ước. Từ tư vấn pháp lý, hỗ trợ thủ tục đến giám sát chất lượng, Q8 Design luôn sẵn sàng hỗ trợ bạn mọi lúc mọi nơi.",
    image: "/images/service-interior.jpg",
    gallery: [
      "/images/q8design/consulting-1.jpg",
      "/images/q8design/consulting-2.jpg",
      "/images/q8design/consulting-3.jpg",
      "/images/q8design/consulting-4.jpg", 
      "/images/q8design/consulting-5.jpg",
      "/images/q8design/consulting-6.jpg"
    ],
    services: [
      "Tư vấn thiết kế miễn phí",
      "Hỗ trợ thủ tục xây dựng",
      "Giám sát thi công",
      "Tư vấn phong thủy",
      "Hỗ trợ sau bàn giao",
      "Bảo trì định kỳ"
    ],
    process: [
      {
        step: 1,
        title: "Tiếp nhận yêu cầu",
        description: "Lắng nghe và ghi nhận mọi yêu cầu, thắc mắc của khách hàng một cách tỉ mỉ và chu đáo."
      },
      {
        step: 2,
        title: "Phân tích & Tư vấn",
        description: "Phân tích tình huống cụ thể và đưa ra lời tư vấn chuyên nghiệp, phù hợp nhất."
      },
      {
        step: 3,
        title: "Triển khai hỗ trợ",
        description: "Thực hiện các biện pháp hỗ trợ cụ thể theo yêu cầu và cam kết đã thỏa thuận."
      },
      {
        step: 4,
        title: "Theo dõi & Đánh giá",
        description: "Theo dõi kết quả và đánh giá mức độ hài lòng để cải thiện chất lượng dịch vụ."
      }
    ],
    features: [
      {
        title: "Tư vấn 24/7",
        description: "Đội ngũ tư vấn viên sẵn sàng hỗ trợ khách hàng mọi lúc, kể cả ngoài giờ làm việc."
      },
      {
        title: "Kinh nghiệm phong phú",
        description: "Đội ngũ tư vấn có nhiều năm kinh nghiệm trong lĩnh vực xây dựng và thiết kế."
      },
      {
        title: "Hỗ trợ toàn diện",
        description: "Từ tư vấn kỹ thuật đến hỗ trợ pháp lý, chúng tôi đồng hành trong mọi khía cạnh của dự án."
      },
      {
        title: "Cam kết chất lượng",
        description: "Cam kết mang đến những lời tư vấn chính xác, khách quan và có trách nhiệm."
      }
    ],
    pricing: {
      basic: {
        name: "Tư vấn cơ bản",
        price: "Miễn phí",
        description: "Tư vấn ban đầu và định hướng dự án",
        includes: [
          "Tư vấn ý tưởng thiết kế",
          "Định hướng phong cách",
          "Ước tính ngân sách sơ bộ",
          "Tư vấn qua điện thoại/email"
        ]
      },
      standard: {
        name: "Tư vấn chuyên sâu",
        price: "2.000.000đ - 5.000.000đ",
        description: "Tư vấn chi tiết và hỗ trợ thủ tục",
        includes: [
          "Tất cả dịch vụ tư vấn cơ bản",
          "Khảo sát thực địa",
          "Báo cáo chi tiết",
          "Hỗ trợ thủ tục xây dựng",
          "Tư vấn phong thủy"
        ]
      },
      premium: {
        name: "Hỗ trợ toàn diện",
        price: "5.000.000đ - 10.000.000đ",
        description: "Đồng hành suốt quá trình dự án",
        includes: [
          "Tất cả dịch vụ tư vấn chuyên sâu",
          "Giám sát thi công định kỳ",
          "Hỗ trợ 24/7",
          "Bảo trì sau bàn giao",
          "Ưu đãi dịch vụ thiết kế"
        ]
      }
    },
    faqs: [
      {
        question: "Tư vấn có mất phí không?",
        answer: "Tư vấn ban đầu hoàn toàn miễn phí. Chỉ có các dịch vụ tư vấn chuyên sâu và hỗ trợ đặc biệt mới có phí."
      },
      {
        question: "Có hỗ trợ từ xa không?",
        answer: "Có, chúng tôi hỗ trợ tư vấn qua điện thoại, email, video call và các ứng dụng nhắn tin."
      },
      {
        question: "Thời gian phản hồi như thế nào?",
        answer: "Chúng tôi cam kết phản hồi trong vòng 2-4 giờ đối với các yêu cầu thông thường và ngay lập tức với các trường hợp khẩn cấp."
      },
      {
        question: "Có cam kết về chất lượng tư vấn không?",
        answer: "Có, chúng tôi cam kết hoàn tiền 100% nếu khách hàng không hài lòng với chất lượng tư vấn trong 7 ngày đầu."
      }
    ],
    testimonials: [
      {
        name: "Chị Võ Thị Hồng",
        project: "Tư vấn thiết kế nhà phố",
        rating: 5,
        comment: "Đội ngũ tư vấn rất nhiệt tình và chuyên nghiệp. Họ đã giúp tôi giải quyết nhiều vướng mắc trong quá trình xây nhà."
      },
      {
        name: "Anh Đỗ Minh Đức",
        project: "Hỗ trợ thủ tục xây dựng",
        rating: 5,
        comment: "Q8 Design đã hỗ trợ tôi hoàn thành mọi thủ tục một cách nhanh chóng và thuận lợi. Rất đáng tin cậy!"
      }
    ],
    color: "orange",
    icon: "FaShieldAlt"
  }
};

export default function ServiceDetailPage({ meta, serviceData }) {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <DefaultLayout 
      title={meta?.title}
      desc={meta?.description}
      thumbnail={meta?.og?.image}
      meta={meta}
    >
      <Head>
        {/* JSON-LD Schema.org cho trang chi tiết dịch vụ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": serviceData.title,
              "description": serviceData.fullDescription,
              "image": `https://q8design.vn${serviceData.image}`,
              "url": `https://q8design.vn/dich-vu/${router.query.slug}`,
              "provider": {
                "@type": "Organization",
                "name": "Q8 Design",
                "url": "https://q8design.vn",
                "logo": "https://q8design.vn/images/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+84-98-811-68-28",
                  
                  "contactType": "customer service",
                  "areaServed": "VN",
                  "availableLanguage": "Vietnamese"
                }
              },
              "serviceType": "Design and Construction Services",
              "category": "Architecture and Interior Design",
              "areaServed": {
                "@type": "Country",
                "name": "Vietnam"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": `${serviceData.title} - Gói dịch vụ`,
                "itemListElement": Object.values(serviceData.pricing).map((pkg, index) => ({
                  "@type": "Offer",
                  "position": index + 1,
                  "name": pkg.name,
                  "description": pkg.description,
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": pkg.price,
                    "priceCurrency": "VND"
                  },
                  "availability": "https://schema.org/InStock",
                  "validFrom": new Date().toISOString().split('T')[0]
                }))
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceRange": "200000-15000000",
                "priceCurrency": "VND",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "Q8 Design"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": serviceData.testimonials?.length || 0,
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": serviceData.testimonials?.map(testimonial => ({
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": testimonial.name
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": testimonial.rating,
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "reviewBody": testimonial.comment
              })) || []
            })
          }}
        />
      </Head>

      <h1 className="visually-hidden">
        {serviceData.title} - Q8 Design
      </h1>
      
      <ServiceDetail serviceData={serviceData} />
    </DefaultLayout>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const serviceData = servicesData[slug];

  if (!serviceData) {
    return {
      notFound: true,
    };
  }

  const meta = {
    title: `${serviceData.title} - Q8 Design`,
    description: serviceData.fullDescription,
    keywords: `${serviceData.title}, Q8 Design, thiết kế kiến trúc, thiết kế nội thất, thi công xây dựng`,
    robots: "index, follow",
    author: "Q8 Design",
    canonical: `https://q8design.vn/dich-vu/${slug}`,
    og: {
      title: `${serviceData.title} - Q8 Design`,
      description: serviceData.fullDescription,
      type: "website",
      image: `https://q8design.vn${serviceData.image}`,
      imageWidth: "1200",
      imageHeight: "630",
      url: `https://q8design.vn/dich-vu/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.title} - Q8 Design`,
      description: serviceData.fullDescription,
      image: `https://q8design.vn${serviceData.image}`,
    },
  };

  return {
    props: {
      meta,
      serviceData,
    },
  };
}

export async function getStaticPaths() {
  const paths = Object.keys(servicesData).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

