import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { initializeEmailTransporter } from './config/email.config.js';
import {
  closeRabbitMQ,
  connectRabbitMQ,
  consumeFromQueue,
} from './config/rabbitmq.js';

const app = express();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializeEmailTransporter();
await connectRabbitMQ();
await consumeFromQueue();

app.listen(5002, () => {
  console.log('Listening on port 5001');
});
