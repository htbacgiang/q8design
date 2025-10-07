import db from '../../../utils/db';
import Project from '../../../models/Project';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  try {
    await db.connectDb();

    console.log('Received project data:', req.body);
    console.log('Required fields check:');
    console.log('- title:', req.body.title);
    console.log('- location:', req.body.location);
    console.log('- area:', req.body.area);
    console.log('- type:', req.body.type);
    console.log('- year:', req.body.year);
    console.log('- description:', req.body.description);
    console.log('- image:', req.body.image);
    console.log('- mainImage:', req.body.mainImage);
    console.log('- slug:', req.body.slug);

    // Validate required fields (status has default value in model)
    const requiredFields = ['title', 'location', 'area', 'type', 'year', 'description', 'image', 'mainImage', 'slug'];
    const missingFields = requiredFields.filter(field => !req.body[field] || req.body[field].toString().trim() === '');
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`,
        missingFields
      });
    }

    const project = new Project(req.body);
    await project.save();
    
    res.status(201).json({
      success: true,
      data: project,
      message: 'Dự án đã được tạo thành công'
    });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(400).json({
      success: false,
      message: 'Lỗi khi tạo dự án',
      error: error.message
    });
  }
}

