import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import TestimonialsSection from './TestimonialsSection';
import BlogSection from './BlogSection';
import FurnitureViewer from '../tantruonggiang/FurnitureViewer';
import NoiThatViewer from './NoiThatViewer';
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      {/* About Section - Giới thiệu nhanh về Q8 Design */}
      <AboutSection />
      
      {/* Services Section - Các dịch vụ nổi bật */}
      <ServicesSection />
      
      {/* Projects Section - Dự án tiêu biểu và nhúng 3D */}
      <ProjectsSection />
      
      <FurnitureViewer />
      {/* Testimonials Section - Đánh giá từ khách hàng */}
      <TestimonialsSection />
      
      {/* Blog Section - Tin tức & Kiến thức */}
      <BlogSection />
    </div>
  );
}
