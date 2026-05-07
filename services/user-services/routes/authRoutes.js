import { Router } from 'express';
import pool from '../db.js';
import { validate } from '../middleware/validate.js';
import {
  loginSchema,
  registerUserSchema,
} from '../validations/user.validation.js';
import { login, register } from '../controllers/authController.js';

const router = Router();

router.post('/register', validate(registerUserSchema), register);
router.post('/login', validate(loginSchema), login);

export default router;
