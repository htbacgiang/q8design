// Q8 Design Projects Data
// Centralized data for all projects used across ProjectsSection, ProjectsPage, and ProjectDetailPage

export const projects = [
  {
    id: 1,
    title: "Dự án Biệt thự FLC Sầm Sơn",
    subtitle: "Biệt thự nghỉ dưỡng cao cấp",
    category: "villa",
    location: "FLC Sầm Sơn, Thanh Hóa",
    area: "350m²",
    type: "Thiết kế và Thi công trọn gói",
    year: "2024",
    client: "Gia đình anh H.",
    style: "Hiện đại nghỉ dưỡng",
    budget: "3.5 - 4.2 tỷ VNĐ",
    duration: "6 tháng",
    completion: "Hoàn thành",
    image: "/du-an/van-quan/1.jpg",
    mainImage: "/du-an/van-quan/1.jpg",
    gallery: [
      "/du-an/van-quan/1.jpg",
      "/du-an/van-quan/2.jpg", 
      "/du-an/van-quan/3.jpg",
      "/du-an/van-quan/4.jpg",
      "/du-an/van-quan/5.jpg",
      "/du-an/van-quan/6.jpg"
    ],
    description: "Biệt thự nghỉ dưỡng cao cấp với phong cách hiện đại, tận dụng tối đa view biển và ánh sáng tự nhiên.",
    tags: ["Hiện đại", "Nghỉ dưỡng", "View biển"],
    has3D: true,
    model3D: "https://sketchfab.com/models/2e85bf66e2dd4d48b683d6843e040a2b/embed?autostart=1&ui_controls=1&ui_infos=1&ui_inspector=1&ui_stop=1&ui_watermark=1&ui_watermark_link=1",
    featured: true,
    slug: "biet-thu-flc-sam-son",
    overview: "Dự án biệt thự FLC Sầm Sơn là một công trình nghỉ dưỡng cao cấp, được thiết kế với phong cách hiện đại tối giản, tập trung vào việc tận dụng tối đa view biển tuyệt đẹp và ánh sáng tự nhiên.",
    highlights: [
      "Thiết kế tối ưu view biển 180 độ",
      "Không gian mở kết nối với thiên nhiên", 
      "Hệ thống ánh sáng thông minh",
      "Vật liệu cao cấp bền vững với môi trường biển"
    ],
    features: [
      { icon: "🏖️", title: "View biển trực diện", desc: "Tận hưởng view biển tuyệt đẹp từ mọi góc nhìn" },
      { icon: "🌅", title: "Ánh sáng tự nhiên", desc: "Thiết kế tối ưu ánh sáng và thông gió" },
      { icon: "🏊‍♂️", title: "Hồ bơi riêng", desc: "Hồ bơi infinity với view ra biển" },
      { icon: "🌿", title: "Vườn nhiệt đới", desc: "Khu vườn nhiệt đới với thực vật bản địa" }
    ]
  },
  {
    id: 2,
    title: "Căn hộ Penthouse The K-Park",
    subtitle: "Nâng tầm không gian sống hiện đại",
    category: "apartment",
    location: "The K-Park, Hà Nội", 
    area: "120m²",
    type: "Thiết kế và Thi công nội thất trọn gói",
    year: "2024",
    client: "Gia đình anh T.",
    style: "Hiện đại tối giản",
    budget: "1.2 - 1.5 tỷ VNĐ", 
    duration: "3 tháng",
    completion: "Hoàn thành",
    image: "/du-an/van-quan/1.jpg",
    mainImage: "/du-an/van-quan/1.jpg",
    gallery: [
      "/du-an/van-quan/1.jpg",
      "/du-an/van-quan/2.jpg",
      "/du-an/van-quan/3.jpg",
      "/du-an/van-quan/4.jpg"
    ],
    description: "Căn hộ penthouse với thiết kế tối giản, sang trọng, tận dụng tối đa không gian và ánh sáng.",
    tags: ["Tối giản", "Sang trọng", "Penthouse"],
    has3D: true,
    model3D: "https://sketchfab.com/models/2e85bf66e2dd4d48b683d6843e040a2b/embed?autostart=1&ui_controls=1&ui_infos=1&ui_inspector=1&ui_stop=1&ui_watermark=1&ui_watermark_link=1",
    featured: true,
    slug: "can-ho-penthouse-the-k-park",
    overview: "Căn hộ penthouse tại The K-Park được thiết kế theo phong cách hiện đại tối giản, tập trung vào việc tối ưu hóa không gian sống và tạo ra một môi trường sống sang trọng, tiện nghi.",
    highlights: [
      "Thiết kế mở tạo cảm giác rộng rãi",
      "Hệ thống tủ âm tường tiết kiệm không gian",
      "Màu sắc trung tính tạo sự thanh lịch",
      "Nội thất cao cấp được chọn lọc kỹ lưỡng"
    ],
    features: [
      { icon: "🏢", title: "View thành phố", desc: "Tầm nhìn panorama ra toàn thành phố" },
      { icon: "💡", title: "Hệ thống thông minh", desc: "Smart home với điều khiển tự động" },
      { icon: "🛋️", title: "Nội thất cao cấp", desc: "Nội thất nhập khẩu từ châu Âu" },
      { icon: "🌟", title: "Không gian mở", desc: "Thiết kế mở kết nối các khu vực" }
    ]
  },
  {
    id: 3,
    title: "Nhà phố liền kề Times City",
    subtitle: "Tối ưu không gian sống gia đình",
    category: "townhouse",
    location: "Times City, Hà Nội",
    area: "80m²",
    type: "Cải tạo và Thiết kế nội thất",
    year: "2023",
    client: "Gia đình chị M.",
    style: "Hiện đại ấm cúng",
    budget: "800 triệu - 1 tỷ VNĐ",
    duration: "4 tháng", 
    completion: "Hoàn thành",
    image: "/images/q8design/project-townhouse-1.jpg",
    mainImage: "/images/q8design/project-townhouse-1.jpg",
    gallery: [
      "/images/q8design/project-townhouse-1.jpg",
      "/images/q8design/project-townhouse-2.jpg",
      "/images/q8design/project-townhouse-3.jpg"
    ],
    description: "Cải tạo nhà phố liền kề với thiết kế thông minh, tối ưu hóa từng m² để tạo không gian sống tiện nghi.",
    tags: ["Cải tạo", "Tối ưu", "Gia đình"],
    has3D: false,
    featured: true,
    slug: "nha-pho-lien-ke-times-city",
    overview: "Dự án cải tạo nhà phố liền kề tại Times City tập trung vào việc tối ưu hóa không gian sống cho gia đình trẻ, tạo ra một môi trường sống hiện đại nhưng vẫn giữ được sự ấm cúng.",
    highlights: [
      "Cải tạo layout tối ưu công năng sử dụng",
      "Tăng diện tích sử dụng 30% so với ban đầu",
      "Hệ thống lưu trữ thông minh",
      "Ánh sáng tự nhiên được tối ưu hóa"
    ],
    features: [
      { icon: "🏡", title: "Không gian đa năng", desc: "Mỗi góc nhà đều được tận dụng hiệu quả" },
      { icon: "👨‍👩‍👧‍👦", title: "Thân thiện gia đình", desc: "Thiết kế an toàn cho trẻ em" },
      { icon: "💾", title: "Lưu trữ thông minh", desc: "Hệ thống tủ âm tường tiết kiệm diện tích" },
      { icon: "🌞", title: "Ánh sáng tự nhiên", desc: "Tối ưu hóa ánh sáng và thông gió" }
    ]
  },
  {
    id: 4,
    title: "Biệt thự Vinhomes Riverside",
    subtitle: "Sang trọng bên dòng sông Hồng",
    category: "villa",
    location: "Vinhomes Riverside, Hà Nội",
    area: "280m²",
    type: "Thiết kế nội thất cao cấp",
    year: "2024",
    client: "Gia đình anh K.",
    style: "Tân cổ điển",
    budget: "2.8 - 3.2 tỷ VNĐ",
    duration: "5 tháng",
    completion: "Đang thi công",
    image: "/images/q8design/project-villa-2.jpg",
    mainImage: "/images/q8design/project-villa-2.jpg",
    gallery: [
      "/images/q8design/project-villa-2.jpg",
      "/images/q8design/project-villa-3.jpg"
    ],
    description: "Biệt thự cao cấp với phong cách tân cổ điển, kết hợp giữa nét đẹp truyền thống và hiện đại.",
    tags: ["Tân cổ điển", "Cao cấp", "View sông"],
    has3D: true,
    featured: true,
    slug: "biet-thu-vinhomes-riverside",
    overview: "Biệt thự Vinhomes Riverside được thiết kế theo phong cách tân cổ điển, kết hợp hài hòa giữa nét đẹp truyền thống và sự tiện nghi hiện đại, tạo nên một không gian sống đẳng cấp.",
    highlights: [
      "Phong cách tân cổ điển tinh tế",
      "Vật liệu cao cấp nhập khẩu",
      "View sông Hồng thơ mộng",
      "Không gian mở kết nối với sân vườn"
    ],
    features: [
      { icon: "🏛️", title: "Tân cổ điển", desc: "Thiết kế kết hợp truyền thống và hiện đại" },
      { icon: "🌊", title: "View sông", desc: "Tầm nhìn tuyệt đẹp ra sông Hồng" },
      { icon: "💎", title: "Vật liệu cao cấp", desc: "Đá marble, gỗ tự nhiên nhập khẩu" },
      { icon: "🎨", title: "Nội thất bespoke", desc: "Nội thất được thiết kế riêng theo yêu cầu" }
    ]
  },
  {
    id: 5,
    title: "Căn hộ Landmark 81",
    subtitle: "Luxury living trên cao",
    category: "apartment",
    location: "Landmark 81, TP.HCM",
    area: "95m²",
    type: "Thiết kế nội thất luxury",
    year: "2023",
    client: "Anh D.",
    style: "Luxury hiện đại",
    budget: "1.8 - 2.2 tỷ VNĐ",
    duration: "3 tháng",
    completion: "Hoàn thành",
    image: "/images/q8design/project-apartment-luxury.jpg",
    mainImage: "/images/q8design/project-apartment-luxury.jpg",
    gallery: [
      "/images/q8design/project-apartment-luxury.jpg"
    ],
    description: "Căn hộ cao cấp tại tòa nhà cao nhất Việt Nam với thiết kế luxury hiện đại.",
    tags: ["Luxury", "High-end", "Landmark"],
    has3D: true,
    featured: false,
    slug: "can-ho-landmark-81",
    overview: "Căn hộ tại Landmark 81 được thiết kế theo phong cách luxury hiện đại, tận dụng tối đa tầm nhìn panorama của thành phố và sông Sài Gòn.",
    highlights: [
      "View toàn cảnh thành phố từ tầng cao",
      "Nội thất luxury hàng đầu thế giới",
      "Hệ thống smart home cao cấp",
      "Thiết kế tối ưu ánh sáng tự nhiên"
    ],
    features: [
      { icon: "🏙️", title: "View thành phố", desc: "Tầm nhìn 360 độ ra toàn thành phố" },
      { icon: "✨", title: "Luxury finish", desc: "Hoàn thiện với vật liệu luxury hàng đầu" },
      { icon: "🤖", title: "Smart home", desc: "Hệ thống điều khiển thông minh tối tân" },
      { icon: "🌟", title: "Exclusive design", desc: "Thiết kế độc quyền không trùng lặp" }
    ]
  }
];

// Utility functions
export const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/dự án /g, '')
    .replace(/biệt thự /g, 'biet-thu-')
    .replace(/căn hộ /g, 'can-ho-')
    .replace(/nhà phố /g, 'nha-pho-')
    .replace(/penthouse /g, 'penthouse-')
    .replace(/times city/g, 'times-city')
    .replace(/the k-park/g, 'the-k-park')
    .replace(/flc sầm sơn/g, 'flc-sam-son')
    .replace(/vinhomes/g, 'vinhomes')
    .replace(/landmark/g, 'landmark')
    .replace(/riverside/g, 'riverside')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]/g, '')
    .replace(/-+/g, '-')
    .trim();
};

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const searchProjects = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(term) ||
    project.location.toLowerCase().includes(term) ||
    project.tags.some(tag => tag.toLowerCase().includes(term)) ||
    project.description.toLowerCase().includes(term)
  );
};

// Function to count projects by category
const getProjectCountByCategory = (categoryId) => {
  if (categoryId === "all") {
    return projects.length;
  }
  return projects.filter(project => project.category === categoryId).length;
};

// Dynamic filter categories with real counts
export const filterCategories = [
  { id: "all", name: "Tất cả", count: 0, color: "gray" },
  { id: "villa", name: "Biệt thự", count: 0, color: "blue" },
  { id: "apartment", name: "Căn hộ", count: 0, color: "green" },
  { id: "townhouse", name: "Nhà phố", count: 0, color: "purple" },
  { id: "commercial", name: "Thương mại", count: 0, color: "orange" }
].map(category => ({
  ...category,
  count: getProjectCountByCategory(category.id)
}));
