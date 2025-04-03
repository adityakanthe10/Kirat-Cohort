import Redis from "ioredis";

const redisPub = new Redis({
  host: "localhost",
  port: 6379,
});

const userId = "user123";
const message = JSON.stringify({
  event: "New Notification",
  data: "Hello from Redis!",
});

// Publish event to Redis
redisPub.publish(`user:${userId}`, message);
console.log(`Published event for user ${userId}`);
