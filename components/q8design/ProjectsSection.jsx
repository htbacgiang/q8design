import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaPlay, FaCube } from "react-icons/fa";
import { filterCategories, getFeaturedProjects, createSlug } from "../../data/projects";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const featuredProjects = getFeaturedProjects();

  const filteredProjects = activeFilter === "all" 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === activeFilter);

  const featuredProjectsOnly = featuredProjects.filter(project => project.featured);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <h2 className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-base font-medium uppercase tracking-wider">
              Dự án đã hoàn thành
            </h2>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá gallery gồm những dự án tiêu biểu nhất của Q8 Design. 
            Mỗi dự án là một câu chuyện thiết kế độc đáo, phản ánh dấu ấn cá nhân và phong cách sống của gia chủ.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-orange-500 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.slice(0, 6).map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Link href={`/du-an/${project.slug}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                  />
                </Link>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <Link 
                      href={`/du-an/${project.slug}`} 
                      className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group/btn"
                    >
                      Xem chi tiết
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                
                <h3 className="text-xl font-bold cursor-pointer text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                 <Link href={`/du-an/${project.slug}`}> {project.title} </Link>
                </h3>

                {/* Project Details */}
                <div className="space-y-1 mb-4 text-sm text-gray-600">
                  <p><span className="font-medium">Vị trí:</span> {project.location}</p>
                  <p><span className="font-medium">Diện tích:</span> {project.area}</p>
                  <p><span className="font-medium">Dịch vụ:</span> {project.type}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* CTA */}
                <Link 
                  href={`/du-an/${project.slug}`}
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors group/link"
                >
                  Xem chi tiết
                  <FaArrowRight className="ml-2 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>


        {/* Bottom CTA */}
        <div className="text-center">
      
          <Link 
            href="/du-an"
            className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors duration-300 group"
          >
            Khám phá thêm dự án
            <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
