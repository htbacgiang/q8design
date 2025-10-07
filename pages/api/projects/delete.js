import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;
    
    if (!id) {
      return res.status(400).json({ error: 'Project ID is required' });
    }

    const projectId = parseInt(id);

    // Read current projects file
    const projectsFilePath = path.join(process.cwd(), 'data', 'projects.js');
    const fileContent = fs.readFileSync(projectsFilePath, 'utf8');

    // Extract the projects array
    const projectsArrayMatch = fileContent.match(/export const projects = (\[[\s\S]*?\]);/);
    if (!projectsArrayMatch) {
      throw new Error('Could not parse projects array');
    }

    // Parse existing projects
    const projectsString = projectsArrayMatch[1];
    const projects = eval(projectsString);

    // Filter out the project to delete
    const updatedProjects = projects.filter(p => p.id !== projectId);

    if (updatedProjects.length === projects.length) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Generate the new file content
    const newProjectsString = JSON.stringify(updatedProjects, null, 2)
      .replace(/"([^"]+)":/g, '$1:')  // Remove quotes from keys
      .replace(/: "([^"]*?)"/g, (match, value) => {
        // Keep quotes only for string values, not numbers or booleans
        if (value === 'true' || value === 'false' || !isNaN(value)) {
          return `: ${value}`;
        }
        return match;
      });

    const newFileContent = fileContent.replace(
      /export const projects = \[[\s\S]*?\];/,
      `export const projects = ${newProjectsString};`
    );

    // Write back to file
    fs.writeFileSync(projectsFilePath, newFileContent, 'utf8');

    return res.status(200).json({ 
      success: true, 
      message: 'Project deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting project:', error);
    return res.status(500).json({ 
      error: 'Failed to delete project',
      details: error.message 
    });
  }
}

