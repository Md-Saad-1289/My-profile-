import { Response } from 'express';
import Project from '../models/Project';
import { AuthRequest } from '../middleware/auth';
import cloudinary from '../utils/cloudinary';

export const getAllProjects = async (req: AuthRequest, res: Response) => {
  try {
    const projects = await Project.find();
    res.json({ projects });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getProjectById = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json({ project });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createProject = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, technologies, gitHubLink, liveLink } = req.body;
    const imageUrl = req.file?.path;

    if (!title || !description || !imageUrl) {
      return res.status(400).json({ error: 'Title, description, and image required' });
    }

    const project = new Project({
      title,
      description,
      imageUrl,
      technologies: technologies ? technologies.split(',') : [],
      gitHubLink,
      liveLink,
    });

    await project.save();
    res.status(201).json({ message: 'Project created', project });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProject = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, technologies, gitHubLink, liveLink } = req.body;

    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    let imageUrl = project.imageUrl;
    if (req.file) {
      const publicId = project.imageUrl.split('/').pop()?.split('.')[0];
      if (publicId) await cloudinary.uploader.destroy(`portfolio/${publicId}`);
      imageUrl = req.file.path;
    }

    project.title = title || project.title;
    project.description = description || project.description;
    project.imageUrl = imageUrl;
    project.technologies = technologies ? technologies.split(',') : project.technologies;
    project.gitHubLink = gitHubLink || project.gitHubLink;
    project.liveLink = liveLink || project.liveLink;

    await project.save();
    res.json({ message: 'Project updated', project });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProject = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    const publicId = project.imageUrl.split('/').pop()?.split('.')[0];
    if (publicId) await cloudinary.uploader.destroy(`portfolio/${publicId}`);

    await Project.findByIdAndDelete(id);
    res.json({ message: 'Project deleted' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
