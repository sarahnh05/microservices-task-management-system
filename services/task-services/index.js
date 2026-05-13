import express from 'express';
import { connectDB } from './db.js';
import taskRoutes from './routes/task.routes.js';

const app = express();
connectDB();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tasks', taskRoutes);

app.listen(5001, () => {
  console.log('Listening on port 5001');
});
