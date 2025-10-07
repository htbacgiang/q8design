import { useState } from 'react';
import { projects as initialProjects } from '../../data/projects';
import AddProjectForm from '../../components/q8design/AddProjectForm';
import ProjectsListDashboard from '../../components/q8design/ProjectsListDashboard';
import AdminLayout from '../../components/layout/AdminLayout';

export default function Q8ProjectsDashboard() {
  const [activeTab, setActiveTab] = useState('list');
  const [projects, setProjects] = useState(initialProjects);
  const [editingProject, setEditingProject] = useState(null);

  const handleProjectAdded = (projectData) => {
    if (editingProject) {
      // Update existing project
      setProjects(projects.map(p => 
        p.id === editingProject.id ? { ...p, ...projectData } : p
      ));
    } else {
      // Add new project
      setProjects([...projects, projectData]);
    }
    
    // Clear editing state and switch to list view
    setTimeout(() => {
      setEditingProject(null);
      setActiveTab('list');
    }, 2000);
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setActiveTab('add');
  };

  const handleDelete = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <AdminLayout title="Q8 Design - Quản lý dự án">
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Q8 Design Dashboard
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Quản lý dự án thiết kế nội thất
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700">
                    Tổng số dự án
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {projects.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Tabs Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('list')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'list'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                📋 Danh sách dự án
              </button>
              <button
                onClick={() => {
                  setActiveTab('add');
                  setEditingProject(null);
                }}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'add'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {editingProject && activeTab === 'add' ? '✏️ Chỉnh sửa dự án' : '➕ Thêm dự án mới'}
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'stats'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                📊 Thống kê
              </button>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'list' && (
            <ProjectsListDashboard 
              projects={projects} 
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
          
          {activeTab === 'add' && (
            <AddProjectForm 
              onSuccess={handleProjectAdded} 
              editingProject={editingProject}
            />
          )}
          
          {activeTab === 'stats' && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Thống kê dự án</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <div className="text-blue-600 text-sm font-medium mb-2">
                    Biệt thự
                  </div>
                  <div className="text-3xl font-bold text-gray-800">
                    {projects.filter(p => p.category === 'villa').length}
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                  <div className="text-green-600 text-sm font-medium mb-2">
                    Căn hộ
                  </div>
                  <div className="text-3xl font-bold text-gray-800">
                    {projects.filter(p => p.category === 'apartment').length}
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                  <div className="text-purple-600 text-sm font-medium mb-2">
                    Nhà phố
                  </div>
                  <div className="text-3xl font-bold text-gray-800">
                    {projects.filter(p => p.category === 'townhouse').length}
                  </div>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                  <div className="text-orange-600 text-sm font-medium mb-2">
                    Thương mại
                  </div>
                  <div className="text-3xl font-bold text-gray-800">
                    {projects.filter(p => p.category === 'commercial').length}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                  <div className="text-yellow-600 text-sm font-medium mb-2">
                    Dự án nổi bật
                  </div>
                  <div className="text-3xl font-bold text-gray-800">
                    {projects.filter(p => p.featured).length}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {((projects.filter(p => p.featured).length / projects.length) * 100).toFixed(1)}% tổng dự án
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
                  <div className="text-indigo-600 text-sm font-medium mb-2">
                    Có mô hình 3D
                  </div>
                  <div className="text-3xl font-bold text-gray-800">
                    {projects.filter(p => p.has3D).length}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {((projects.filter(p => p.has3D).length / projects.length) * 100).toFixed(1)}% tổng dự án
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Trạng thái dự án
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Hoàn thành</span>
                    <div className="flex items-center gap-3">
                      <div className="w-48 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ 
                            width: `${(projects.filter(p => p.completion === 'Hoàn thành').length / projects.length) * 100}%` 
                          }}
                        />
                      </div>
                      <span className="font-semibold text-gray-800 w-12 text-right">
                        {projects.filter(p => p.completion === 'Hoàn thành').length}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Đang thi công</span>
                    <div className="flex items-center gap-3">
                      <div className="w-48 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ 
                            width: `${(projects.filter(p => p.completion === 'Đang thi công').length / projects.length) * 100}%` 
                          }}
                        />
                      </div>
                      <span className="font-semibold text-gray-800 w-12 text-right">
                        {projects.filter(p => p.completion === 'Đang thi công').length}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Thiết kế</span>
                    <div className="flex items-center gap-3">
                      <div className="w-48 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ 
                            width: `${(projects.filter(p => p.completion === 'Thiết kế').length / projects.length) * 100}%` 
                          }}
                        />
                      </div>
                      <span className="font-semibold text-gray-800 w-12 text-right">
                        {projects.filter(p => p.completion === 'Thiết kế').length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

