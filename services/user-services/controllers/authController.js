import { Router } from 'express';
import pool from '../db.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/generateToken.js';
import {
  createUser,
  findByEmail,
  findUserByEmail,
} from '../repositories/user.repository.js';
import * as userService from '../service/user.service.js';

const router = Router();

const register = async (req, res) => {
  try {
    const validated = req.validatedData;

    const user = await userService.register(validated);

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const validated = req.validatedData;

    const result = await userService.login(validated);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export { register, login };
