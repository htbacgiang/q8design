import db from '../../../utils/db';
import Project from '../../../models/Project';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  try {
    await db.connectDb();

    const { id, slug } = req.body;
    
    console.log('Updating project with ID:', id, 'Slug:', slug);
    console.log('Update data:', req.body);

    // Find project by ID or slug
    let project;
    if (id) {
      project = await Project.findById(id);
    } else if (slug) {
      project = await Project.findOne({ slug });
    } else {
      return res.status(400).json({
        success: false,
        message: 'Missing project ID or slug'
      });
    }

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy dự án'
      });
    }

    // Update project
    const updatedProject = await Project.findByIdAndUpdate(
      project._id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: updatedProject,
      message: 'Dự án đã được cập nhật thành công'
    });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(400).json({
      success: false,
      message: 'Lỗi khi cập nhật dự án',
      error: error.message
    });
  }
}