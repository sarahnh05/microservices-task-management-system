import pool from '../db.js';

export const createTask = async (data) => {
  const result = await pool.query(
    `
    INSERT INTO tasks (userId, title, description, priority, dueDate)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `,
    [data.userId, data.title, data.description, data.priority, data.dueDate],
  );

  return result.rows[0];
};
