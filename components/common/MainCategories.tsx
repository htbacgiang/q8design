import { FC, useState } from "react";

interface Props {
  onCategorySelect: (category: string | null) => void; // Hàm xử lý khi danh mục được chọn
}

const MainCategories: FC<Props> = ({ onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
    onCategorySelect(category);
  };

  const categories = [
    { key: null, label: "Tất cả" },
    { key: "Xu hướng", label: "Xu hướng" },
    { key: "Kinh nghiệm", label: "Kinh nghiệm" },
    { key: "Quy trình", label: "Quy trình" },
    { key: "Case Study", label: "Case Study" },
    { key: "Hỏi đáp", label: "Hỏi đáp" },
  ];

  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-full max-w-5xl">
        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          {categories.map((category) => (
            <button
              key={category.key || 'all'}
              onClick={() => handleCategoryClick(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                activeCategory === category.key
                  ? "bg-orange-500 text-white border-orange-500 shadow-lg transform scale-105"
                  : "bg-white hover:bg-orange-50 text-gray-600 hover:text-orange-600 border-gray-200 hover:border-orange-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Category Description */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            {activeCategory 
              ? `Đang xem danh mục: ${categories.find(c => c.key === activeCategory)?.label}`
              : "Khám phá kiến thức thiết kế nội thất và kiến trúc từ Q8 Design"
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainCategories;
