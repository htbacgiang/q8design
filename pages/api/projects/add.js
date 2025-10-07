import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const newProject = req.body;

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

    // Generate new ID
    const maxId = Math.max(...projects.map(p => p.id), 0);
    const newId = maxId + 1;

    // Add ID to new project
    const projectToAdd = {
      id: newId,
      ...newProject
    };

    // Add new project to array
    projects.push(projectToAdd);

    // Generate the new file content
    const newProjectsString = JSON.stringify(projects, null, 2)
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
      message: 'Project added successfully',
      project: projectToAdd
    });

  } catch (error) {
    console.error('Error adding project:', error);
    return res.status(500).json({ 
      error: 'Failed to add project',
      details: error.message 
    });
  }
}

