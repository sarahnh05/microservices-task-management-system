import express from 'express';
import authRoutes from './routes/authRoutes.js';
import { connectDB } from './db.js';

const app = express();
connectDB();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// API routes
app.use('/auth', authRoutes);

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
