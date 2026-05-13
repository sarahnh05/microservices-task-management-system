import { Router } from 'express';
import pool from '../db.js';
import * as taskService from '../services/task.services.js';

export const createTask = async (req, res) => {
  try {
    const userId = req.user.userId;

    const { title, description, priority, dueDate } = req.body;

    const task = await taskService.createTask({
      userId,
      title,
      description,
      priority,
      dueDate: dueDate ? new Date(dueDate) : undefined,
    });

    return res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
