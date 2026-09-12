import express from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController';
import { authMiddleware, adminMiddleware } from '../middleware/auth';
import { upload } from '../utils/cloudinary';

const router = express.Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById);

router.post('/', authMiddleware, adminMiddleware, upload.single('image'), createProject);
router.put('/:id', authMiddleware, adminMiddleware, upload.single('image'), updateProject);
router.delete('/:id', authMiddleware, adminMiddleware, deleteProject);

export default router;
