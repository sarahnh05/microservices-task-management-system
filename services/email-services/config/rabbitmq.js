import RabbitMQClient from '@sarah_org/common';
import { handleTaskCreated } from '../services/email.service.js';

const rabbitMQ = new RabbitMQClient({
  serviceName: 'Task Service',
  queues: ['task_created'],
});

export const consumeFromQueue = async () => {
  await rabbitMQ.consumeFromQueue(
    'task_created',
    async (event) => {
      console.log('Received task_created event:', event);
      await handleTaskCreated(event);
    },
    { noAck: false },
  );
};

export const connectRabbitMQ = async () => rabbitMQ.connect();
export const closeRabbitMQ = async () => rabbitMQ.close();
