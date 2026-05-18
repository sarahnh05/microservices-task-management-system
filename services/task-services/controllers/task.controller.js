import { Router } from 'express';
import pool from '../db.js';
import * as taskService from '../services/task.services.js';
import { publishToQueue } from '../config/rabbitmq.js';

export const createTask = async (req, res) => {
  try {
    const { userId, email } = req.user;
    const { title, description, priority, dueDate } = req.body;

    const task = await taskService.createTask({
      userId,
      title,
      description,
      priority,
      dueDate: dueDate ? new Date(dueDate) : undefined,
    });

    const event = {
      taskId: task.id.toString(),
      userId: task.userid,
      email,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      completed: task.completed,
    };

    console.log('event', event);
    await publishToQueue('task_created', event);

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
