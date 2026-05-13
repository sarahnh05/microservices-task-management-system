import { Router } from 'express';
import pool from '../db.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { createTask } from '../controllers/task.controller.js';

const router = Router();

router.use(authMiddleware);

router.post('/create', createTask);
// router.get('/', getTasks);
// router.patch('/:id', updateTask);
// router.delete('/:id', deleteTask);

export default router;
