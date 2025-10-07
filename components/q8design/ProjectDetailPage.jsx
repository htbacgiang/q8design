import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaRuler,
  FaCog,
  FaCalendarAlt,
  FaUser,
  FaPalette,
  FaDollarSign,
  FaChevronLeft,
  FaChevronRight,
  FaCube,
  FaPlay,
  FaArrowRight,
  FaCheckCircle,
  FaHeart,
  FaShare
} from "react-icons/fa";
// import { getProjectBySlug, projects } from "../../data/projects";
import NoiThatViewer from "./NoiThatViewer";
import ContactForm from "../header/ContactForm";

export default function ProjectDetailPage({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
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

  // Project data is now passed as prop from getServerSideProps

  // If no project found, show 404 or redirect
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-900 mb-4">Không tìm thấy dự án</p>
          <p className="text-gray-600 mb-8">Dự án bạn tìm kiếm không tồn tại hoặc đã được gỡ bỏ.</p>
          <Link href="/du-an" className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors">
            Quay lại danh sách dự án
          </Link>
        </div>
      </div>
    );
  }

  // Related projects will be passed as prop from getServerSideProps
  const relatedProjects = project?.relatedProjects || [];

  const nextImage = () => {
    if (project.gallery && project.gallery.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === project.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project.gallery && project.gallery.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.gallery.length - 1 : prev - 1
      );
    }
  };

  // Fallback data for missing fields
  const projectData = {
    ...project,
    challenges: project.challenges || [
      "Tối ưu hóa không gian sử dụng",
      "Cân bằng giữa tính thẩm mỹ và công năng",
      "Tận dụng ánh sáng tự nhiên",
      "Đảm bảo ngân sách hợp lý"
    ],
    solutions: project.solutions || [
      "Thiết kế không gian mở thông minh",
      "Sử dụng vật liệu chất lượng cao",
      "Áp dụng công nghệ hiện đại",
      "Tối ưu hóa quy trình thi công"
    ],
    spaces: project.spaces || [
      {
        name: "Không gian chính",
        description: project.description || "Không gian được thiết kế hiện đại và tiện nghi.",
        images: project.gallery ? project.gallery.slice(0, 2) : [project.image]
      }
    ],
    materials: project.materials || [
      "Vật liệu cao cấp được tuyển chọn",
      "Đảm bảo độ bền và thẩm mỹ",
      "Thân thiện với môi trường",
      "Phù hợp với khí hậu Việt Nam"
    ],
    timeline: project.timeline || [
      {
        phase: "Tư vấn & Thiết kế",
        duration: "2-3 tuần",
        description: "Khảo sát, tư vấn và hoàn thiện bản vẽ thiết kế"
      },
      {
        phase: "Chuẩn bị vật liệu",
        duration: "1 tuần",
        description: "Đặt hàng và chuẩn bị vật liệu chất lượng"
      },
      {
        phase: "Thi công chính",
        duration: project.duration || "6-8 tuần",
        description: "Thi công theo đúng thiết kế và tiêu chuẩn chất lượng"
      },
      {
        phase: "Hoàn thiện & Bàn giao",
        duration: "1 tuần",
        description: "Nghiệm thu và bàn giao công trình hoàn chỉnh"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Gallery */}
      <section className="relative">
        {/* Main Image */}
        <div className="relative md:h-[70vh] h-[30vh] overflow-hidden">
          <Image
            src={(project.gallery && project.gallery.length > 0) ? project.gallery[currentImageIndex] : (project.mainImage || project.image)}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Navigation Arrows - only show if gallery exists */}
          {project.gallery && project.gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-40"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-40"
              >
                <FaChevronRight />
              </button>
            </>
          )}


          {/* Project Info Overlay - Hidden on mobile, shown on desktop */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white hidden md:block">
            <div className="container mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags && project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-3xl md:text-5xl font-bold mb-2">{project.title}</p>
              {project.subtitle && <p className="text-xl text-gray-200">{project.subtitle}</p>}
            </div>
          </div>
        </div>

        {/* Mobile Project Info - shown only on mobile */}
        <div className="bg-white py-6 md:hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags && project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-2">{project.title}</p>
            {project.subtitle && <p className="text-lg text-gray-600">{project.subtitle}</p>}
          </div>
        </div>

        {/* Image Thumbnails - only show if gallery exists */}
        {project.gallery && project.gallery.length > 1 && (
          <div className="bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-5 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden ${index === currentImageIndex ? 'ring-2 ring-orange-500' : ''
                      }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Project Details */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Project Summary */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Tóm tắt dự án
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {project.overview || project.description}
                </p>
              </div>
              {/* 3D Viewer - chỉ hiển thị nếu project có 3D */}
              {project.has3D && project.model3D && (
                <div className="mb-12">
                  <NoiThatViewer
                    model3D={project.model3D}
                    projectTitle={project.title}
                  />
                </div>
              )}
              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Thách thức</h3>
                  <ul className="space-y-3">
                    {projectData.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Giải pháp</h3>
                  <ul className="space-y-3">
                    {projectData.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Space Breakdown */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Trình bày từng không gian
                </h2>

                {projectData.spaces.map((space, index) => (
                  <div key={index} className="mb-12 last:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {space.name}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {space.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="relative h-64 rounded-xl overflow-hidden">
                          <Image
                            src={image}
                            alt={`${space.name} ${imgIndex + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {space.description}
                    </p>
                  </div>
                ))}
              </div>



              {/* Timeline */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Quy trình thực hiện
                </h2>

                <div className="space-y-6">
                  {projectData.timeline.map((phase, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-900">{phase.phase}</h4>
                          <span className="text-sm text-orange-600 font-medium">{phase.duration}</span>
                        </div>
                        <p className="text-gray-700">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Vật liệu sử dụng
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectData.materials.map((material, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-3xl p-8 sticky top-8">
                {/* Project Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-6">Thông tin dự án</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <FaUser className="text-orange-500 flex-shrink-0" />
                    <div>
                      <span className="text-sm text-gray-500">Chủ đầu tư</span>
                      <p className="font-medium text-gray-900">{project.client || "N/A"}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-orange-500 flex-shrink-0" />
                    <div>
                      <span className="text-sm text-gray-500">Vị trí</span>
                      <p className="font-medium text-gray-900">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaRuler className="text-orange-500 flex-shrink-0" />
                    <div>
                      <span className="text-sm text-gray-500">Diện tích</span>
                      <p className="font-medium text-gray-900">{project.area}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaCog className="text-orange-500 flex-shrink-0" />
                    <div>
                      <span className="text-sm text-gray-500">Dịch vụ</span>
                      <p className="font-medium text-gray-900">{project.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaCalendarAlt className="text-orange-500 flex-shrink-0" />
                    <div>
                      <span className="text-sm text-gray-500">Năm hoàn thành</span>
                      <p className="font-medium text-gray-900">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaPalette className="text-orange-500 flex-shrink-0" />
                    <div>
                      <span className="text-sm text-gray-500">Phong cách</span>
                      <p className="font-medium text-gray-900">{project.style || "N/A"}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaDollarSign className="text-orange-500 flex-shrink-0" />
                    <div>
                      <span className="text-sm text-gray-500">Ngân sách</span>
                      <p className="font-medium text-gray-900">{project.budget || "N/A"}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/lien-he"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-center transition-colors duration-300 flex items-center justify-center"
                  >
                    Tư vấn dự án tương tự
                    <FaArrowRight className="ml-2" />
                  </Link>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dự án liên quan
              </h2>
              <p className="text-lg text-gray-600">
                Khám phá thêm các dự án tương tự khác của Q8 Design
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <div key={relatedProject.slug} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <Link href={`/du-an/${relatedProject.slug}`}>
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                      />
                    </Link>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link href={`/du-an/${relatedProject.slug}`} className="bg-white/20 backdrop-blur-sm text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      <Link href={`/du-an/${relatedProject.slug}`}>
                        {relatedProject.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {relatedProject.category} • {relatedProject.area}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/du-an"
                className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors duration-300"
              >
                Xem tất cả dự án
                <FaArrowRight className="ml-3" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Bạn có muốn kiến tạo một không gian sống như thế này?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn miễn phí và bắt đầu
            hành trình thiết kế không gian sống mơ ước của bạn.
          </p>

          <div className="flex flex-row gap-4 justify-center flex-nowrap">
            <button
              onClick={toggleForm}
              className="inline-flex items-center px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Liên hệ tư vấn
            </button>
            <Link
              href="/dich-vu"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold rounded-full transition-all duration-300"
            >
              Xem dịch vụ
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
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
    </div>
  );
}