const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-consumer",
  brokers: [process.env.KAFKA_BROKER || "kafka:9092"],
});

console.log("KAFKA BROKER: ", process.env.KAFKA_BROKER);
 
const consumer = kafka.consumer({ groupId: "test-group" });

const run = async () => {
  await consumer.connect();
  console.log("🚀 Consumer connected");

  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(
        `📩 Received: ${message.value.toString()} (partition: ${partition}), topic ${topic}`
      );
    },
  });
};

run().catch(console.error);
