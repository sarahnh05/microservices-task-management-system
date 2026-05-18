import * as taskRepository from '../repositories/task.repository.js';

export const createTask = async (data) => {
  if (!data.title) {
    throw new Error('Title is required');
  }

  const task = await taskRepository.createTask(data);

  return task;
};
