"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaPlay, 
  FaCube, 
  FaFilter, 
  FaMapMarkerAlt,
  FaRuler,
  FaCog,
  FaSearch
} from "react-icons/fa";
import { useProjects } from "../../hooks/useProjects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const projectsPerPage = 3;

  // Fetch projects from API
  const { projects: allProjects, loading, error } = useProjects({
    category: activeFilter,
    search: searchTerm,
    limit: 100 // Get more projects for filtering
  });

  // Filter projects locally for pagination
  const filteredProjects = allProjects || [];

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchTerm]);

  const featuredProjectsData = allProjects?.filter(project => project.featured) || [];

  // Create filter categories from API data
  const filterCategories = [
    { id: "all", name: "Tất cả", count: allProjects?.length || 0, color: "gray" },
    { id: "villa", name: "Biệt thự", count: allProjects?.filter(p => p.category === 'villa').length || 0, color: "blue" },
    { id: "apartment", name: "Căn hộ", count: allProjects?.filter(p => p.category === 'apartment').length || 0, color: "green" },
    { id: "townhouse", name: "Nhà phố", count: allProjects?.filter(p => p.category === 'townhouse').length || 0, color: "purple" },
    { id: "commercial", name: "Thương mại", count: allProjects?.filter(p => p.category === 'commercial').length || 0, color: "orange" }
  ];

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải dự án...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Lỗi tải dữ liệu</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banner2.jpg"
            alt="Q8 Design Projects"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30 text-orange-400 font-bold">
              Portfolio của chúng tôi
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-orange-400">Kiệt tác</span> Kiến trúc & 
            Không gian sống
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Mỗi dự án tại Q8 Design là một hành trình sáng tạo, nơi chúng tôi biến ý tưởng của bạn 
            thành một không gian sống độc đáo. Khám phá các công trình đã hoàn thiện của chúng tôi.
          </p>
        </div>
      </section>


      {/* All Projects */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">

          {/* Filter Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-12">
            {/* Search Input */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm dự án..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {paginatedProjects.map((project) => (
              <div key={project.slug} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <Link href={`/du-an/${project.slug}`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                      />
                    </Link>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.has3D && (
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <FaCube className="text-white" />
                        </div>
                      )}
                      <Link href={`/du-an/${project.slug}`} className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <FaArrowRight />
                      </Link>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                        {filterCategories.find(cat => cat.id === project.category)?.name}
                      </span>
                    </div>

                    {/* Project Title */}
                    <div className="absolute bottom-4 left-4">
                      <Link href={`/du-an/${project.slug}`}>
                        <h3 className="text-white font-bold text-lg hover:text-orange-300 transition-colors">
                          {project.title}
                        </h3>
                      </Link>
                      <div className="flex items-center text-white/80 text-sm mt-1 space-x-3">
                        <span className="flex items-center">
                          <FaMapMarkerAlt className="mr-1" />
                          {project.location}
                        </span>
                        <span className="flex items-center">
                          <FaRuler className="mr-1" />
                          {project.area}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-500">
                        <span className="flex items-center">
                          <FaCog className="mr-1" />
                          {project.type}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {project.year}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href={`/du-an/${project.slug}`}
                        className="text-orange-600 hover:text-orange-700 font-medium flex items-center group/link text-sm"
                      >
                        Chi tiết
                        <FaArrowRight className="ml-1 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && !loading && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">
                <FaSearch />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Không tìm thấy dự án</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm 
                  ? `Không có dự án nào phù hợp với từ khóa "${searchTerm}"`
                  : `Không có dự án nào trong danh mục "${filterCategories.find(cat => cat.id === activeFilter)?.name}"`
                }
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchTerm("");
                  }}
                  className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors"
                >
                  Xem tất cả dự án
                </button>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="inline-flex items-center px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-full transition-colors"
                  >
                    Xóa tìm kiếm
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Trước
            </button>

            {/* Page Numbers */}
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current page
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (
                  page === currentPage - 2 ||
                  page === currentPage + 2
                ) {
                  return <span key={page} className="px-2 text-gray-500">...</span>;
                }
                return null;
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Sau
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
    
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Bạn có dự án mới?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hãy để Q8 Design biến ý tưởng của bạn thành hiện thực. 
            Liên hệ ngay để được tư vấn miễn phí và báo giá chi tiết.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/lien-he" 
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors"
            >
              Tư vấn miễn phí
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/dich-vu" 
              className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-bold rounded-full transition-all duration-300"
            >
              Xem dịch vụ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}