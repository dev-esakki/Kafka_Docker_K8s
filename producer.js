const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-producer",
  brokers: [ process.env.KAFKA_BROKER || "kafka:9092"], // kafka service name from docker-compose
});

console.log("KAFKA BROKER: ", process.env.KAFKA_BROKER);

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  console.log("🚀 Producer connected");

  setInterval(async () => {
    const message = { value: `Hello Kafka ${new Date().toISOString()}` };
    await producer.send({
      topic: "test-topic",
      messages: [message],
    });
    console.log("✅ Sent:", message.value);
  }, 5000);
};

run().catch(console.error);
