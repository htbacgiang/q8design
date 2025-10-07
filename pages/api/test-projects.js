import dbConnect from '../../lib/mongodb';
import Project from '../../models/Project';

export default async function handler(req, res) {
  try {
    await dbConnect();
    
    const projects = await Project.find({}).limit(5);
    
    return res.status(200).json({
      success: true,
      message: 'Test API working',
      count: projects.length,
      projects: projects
    });
  } catch (error) {
    console.error('Test API error:', error);
    return res.status(500).json({
      success: false,
      message: 'Test API failed',
      error: error.message
    });
  }
}
