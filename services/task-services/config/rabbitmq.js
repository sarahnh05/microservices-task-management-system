import RabbitMQClient from '@sarah_org/common';

const rabbitMQ = new RabbitMQClient({
  serviceName: 'Task Service',
  queues: ['task_created'],
});

export const publishToQueue = async (queue, message) => {
  await rabbitMQ.publishToQueue(queue, message);
};

export const connectRabbitMQ = async () => rabbitMQ.connect();
export const closeRabbitMQ = async () => rabbitMQ.close();
