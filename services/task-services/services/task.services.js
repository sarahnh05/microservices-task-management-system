import { publishToQueue } from '../config/rabbitmq.js';
import * as taskRepository from '../repositories/task.repository.js';

export const createTask = async (data) => {
  if (!data.title) {
    throw new Error('Title is required');
  }

  const task = await taskRepository.createTask(data);

  const event = {
    taskId: task.id.toString(),
    userId: task.userId,
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    priority: task.priority,
    completed: task.completed,
  };

  await publishToQueue('task_created', event);

  return task;
};
