import { Router } from 'express';
import pool from '../db.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/generateToken.js';
import {
  createUser,
  findByEmail,
  findUserByEmail,
} from '../repositories/user.repository.js';

const router = Router();

const register = async (req, res) => {
  try {
    const { name, email, password } = req.validatedData;

    const existingUser = await findByEmail(email);

    if (existingUser) {
      return res.status(400).json({
        message: 'Email already exists',
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create User
    const user = await createUser({
      name,
      email,
      password: hashedPassword,
    });

    //generate JWT token
    const token = generateToken(user.id);

    res.status(201).json({
      status: 'success',
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const login = async (req, res) => {
  console.log('check');
  try {
    const { email, password } = req.validatedData;

    console.log('check');
    // check user exists
    const user = await findUserByEmail(email);

    console.log('user', user);

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    //generate JWT token
    const token = generateToken(user.id, res);

    res.status(200).json({
      status: 'success',
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export { register, login };
