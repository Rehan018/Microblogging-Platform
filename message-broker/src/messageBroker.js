const amqp = require('amqplib');

async function startMessageBroker() {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();

        const queueName = 'messages';

        await channel.assertQueue(queueName, { durable: false });

        console.log('Message broker service connected to RabbitMQ');

        channel.consume(queueName, (message) => {
            console.log('Received message:', message.content.toString());
        }, { noAck: true });
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
    }
}

startMessageBroker();
