import { useState, useEffect } from 'react';
import { createSlug } from '../../data/projects';
import ImageUploader from './ImageUploader';
import GalleryUploader from './GalleryUploader';

export default function AddProjectForm({ onSuccess, editingProject = null }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const isEditMode = !!editingProject;
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: 'villa',
    location: '',
    area: '',
    type: '',
    year: new Date().getFullYear().toString(),
    client: '',
    style: '',
    budget: '',
    duration: '',
    completion: 'Đang thi công',
    image: '',
    mainImage: '',
    gallery: [],
    description: '',
    tags: '',
    has3D: false,
    model3D: '',
    featured: false,
    overview: '',
    highlights: '',
    features: ''
  });

  // Load data when editing
  useEffect(() => {
    if (editingProject) {
      setFormData({
        title: editingProject.title || '',
        subtitle: editingProject.subtitle || '',
        category: editingProject.category || 'villa',
        location: editingProject.location || '',
        area: editingProject.area || '',
        type: editingProject.type || '',
        year: editingProject.year || new Date().getFullYear().toString(),
        client: editingProject.client || '',
        style: editingProject.style || '',
        budget: editingProject.budget || '',
        duration: editingProject.duration || '',
        completion: editingProject.completion || 'Đang thi công',
        image: editingProject.image || '',
        mainImage: editingProject.mainImage || '',
        gallery: editingProject.gallery || [],
        description: editingProject.description || '',
        tags: editingProject.tags ? editingProject.tags.join(', ') : '',
        has3D: editingProject.has3D || false,
        model3D: editingProject.model3D || '',
        featured: editingProject.featured || false,
        overview: editingProject.overview || '',
        highlights: editingProject.highlights ? editingProject.highlights.join('\n') : '',
        features: editingProject.features ? JSON.stringify(editingProject.features, null, 2) : ''
      });
    }
  }, [editingProject]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    // Validate images
    if (!formData.image || !formData.mainImage) {
      setError('Vui lòng upload ảnh đại diện');
      setIsSubmitting(false);
      return;
    }

    if (!formData.gallery || formData.gallery.length === 0) {
      setError('Vui lòng upload ít nhất 1 ảnh vào gallery');
      setIsSubmitting(false);
      return;
    }

    try {
      // Transform form data
      const projectData = {
        title: formData.title,
        subtitle: formData.subtitle,
        category: formData.category,
        location: formData.location,
        area: formData.area,
        type: formData.type,
        year: formData.year,
        client: formData.client,
        style: formData.style,
        budget: formData.budget,
        duration: formData.duration,
        completion: formData.completion,
        image: formData.image,
        mainImage: formData.mainImage,
        gallery: Array.isArray(formData.gallery) ? formData.gallery : [],
        description: formData.description,
        tags: formData.tags ? formData.tags.split(',').map(s => s.trim()) : [],
        has3D: formData.has3D,
        model3D: formData.model3D || undefined,
        featured: formData.featured,
        slug: createSlug(formData.title),
        overview: formData.overview,
        highlights: formData.highlights ? formData.highlights.split('\n').filter(s => s.trim()) : [],
        features: formData.features ? JSON.parse(formData.features) : []
      };

      // Add ID if editing
      if (isEditMode && editingProject) {
        projectData.id = editingProject.id;
      }

      const url = isEditMode ? '/api/projects/update' : '/api/projects/add';
      const method = isEditMode ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Có lỗi xảy ra');
      }

      setSuccess(isEditMode ? 'Cập nhật dự án thành công!' : 'Thêm dự án thành công!');
      
      // Reset form only if adding (not editing)
      if (!isEditMode) {
        setFormData({
        title: '',
        subtitle: '',
        category: 'villa',
        location: '',
        area: '',
        type: '',
        year: new Date().getFullYear().toString(),
        client: '',
        style: '',
        budget: '',
        duration: '',
        completion: 'Đang thi công',
        image: '',
        mainImage: '',
        gallery: [],
        description: '',
        tags: '',
        has3D: false,
        model3D: '',
        featured: false,
        overview: '',
        highlights: '',
        features: ''
        });
      }

      if (onSuccess) {
        onSuccess(data.project);
      }
    } catch (err) {
      setError(err.message || 'Có lỗi xảy ra khi thêm dự án');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {isEditMode ? '✏️ Chỉnh sửa dự án' : '➕ Thêm dự án mới'}
      </h2>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tiêu đề <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Dự án Biệt thự FLC Sầm Sơn"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phụ đề <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Biệt thự nghỉ dưỡng cao cấp"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Danh mục <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="villa">Biệt thự</option>
              <option value="apartment">Căn hộ</option>
              <option value="townhouse">Nhà phố</option>
              <option value="commercial">Thương mại</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vị trí <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="FLC Sầm Sơn, Thanh Hóa"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Diện tích <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="350m²"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loại dự án <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Thiết kế và Thi công trọn gói"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Năm <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="2024"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Khách hàng <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Gia đình anh H."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phong cách <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="style"
              value={formData.style}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Hiện đại nghỉ dưỡng"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ngân sách <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="3.5 - 4.2 tỷ VNĐ"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Thời gian thực hiện <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="6 tháng"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tình trạng <span className="text-red-500">*</span>
            </label>
            <select
              name="completion"
              value={formData.completion}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Đang thi công">Đang thi công</option>
              <option value="Hoàn thành">Hoàn thành</option>
              <option value="Thiết kế">Thiết kế</option>
            </select>
          </div>
        </div>

        {/* Images */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Hình ảnh</h3>
          
          <ImageUploader
            label="Ảnh đại diện"
            value={formData.image}
            onUpload={(url) => setFormData(prev => ({ ...prev, image: url, mainImage: url }))}
            helperText="Ảnh đại diện sẽ được sử dụng làm thumbnail cho dự án"
          />

          <div className="border-t pt-6">
            <GalleryUploader
              value={formData.gallery}
              onChange={(urls) => setFormData(prev => ({ ...prev, gallery: urls }))}
            />
          </div>
        </div>

        {/* Description & Content */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Nội dung</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mô tả ngắn <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Mô tả ngắn gọn về dự án..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tổng quan <span className="text-red-500">*</span>
            </label>
            <textarea
              name="overview"
              value={formData.overview}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tổng quan chi tiết về dự án..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Điểm nổi bật (mỗi dòng một điểm) <span className="text-red-500">*</span>
            </label>
            <textarea
              name="highlights"
              value={formData.highlights}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Thiết kế tối ưu view biển 180 độ&#10;Không gian mở kết nối với thiên nhiên&#10;Hệ thống ánh sáng thông minh"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags (phân cách bằng dấu phẩy) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Hiện đại, Nghỉ dưỡng, View biển"
            />
          </div>

        </div>

        {/* 3D Model */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Mô hình 3D</h3>
          
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="has3D"
                checked={formData.has3D}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Có mô hình 3D</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Dự án nổi bật</span>
            </label>
          </div>

          {formData.has3D && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Link mô hình 3D
              </label>
              <input
                type="text"
                name="model3D"
                value={formData.model3D}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://sketchfab.com/models/..."
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4 pt-6 border-t">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Hủy
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Đang xử lý...' : (isEditMode ? 'Cập nhật dự án' : 'Thêm dự án')}
          </button>
        </div>
      </form>
    </div>
  );
}

