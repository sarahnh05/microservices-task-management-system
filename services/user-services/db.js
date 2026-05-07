import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

export const connectDB = async () => {
  try {
    await pool.connect();

    console.log('Database connected');
  } catch (error) {
    console.error('Database connection failed', error);

    process.exit(1);
  }
};

// const pool = new Pool({
//   user: 'postgres',
//   password: 'pass123',
//   host: 'localhost',
//   port: 5432,
//   database: 'user-management',
// });

export default pool;
