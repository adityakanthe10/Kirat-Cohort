import dotenv from "dotenv";
import express from "express";
import Redis from "ioredis";
import { createServer } from "http";
import { WebSocketServer } from "ws";

dotenv.config();

const redisHost = process.env.REDIS_HOST || "localhost";
const redisPort = process.env.REDIS_PORT || 6379;

const redisClient = new Redis({
  host: redisHost,
  port: redisPort,
});

const redisSub = new Redis({
  host: redisHost,
  port: redisPort,
});

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

// websocket connection handling

wss.on("connection", (ws) => {
  console.log("Web socket server started");
  ws.on("message", async (message) => {
    console.log("New client connected");

    try {
      const { userId } = JSON.parse(message);
      if (!userId) {
        ws.send(JSON.stringify({ error: "userId is required" }));
      }
      console.log(`User ${userId} connected successfully`);

      // Store user WebSocket ID in Redis (key: userId, value: WebSocket ID)
      await redisClient.set(`user:${userId}`, "connected");

      // Subscribe the user to the Pub/Sub Channel
      await redisSub.subscribe(`user:${userId}`);
    } catch (error) {
      console.error("Error parsing message:", error);
    }
  });

  ws.on("close", async () => {
    // Remove disconnected users from redis
    const userId = [...clients.entries()].find(([, client]) => client.ws)?.[0];
    if (userId) {
      await redisClient.del(`user:${userId}`);
      console.log(`User ${userId} disconnected`);
    }
  });
});

// Redis Subscriber listens to messages and forward them to users

redisSub.on("messsage", async (channel, message) => {
  const userId = channel.split(":")[1]; // Extracting the userId from channel

  // check if user is still stored in Redis

  const isConnected = await redisClient.get(`user:${userId}`);
  if (isConnected) {
    const userSocket = [...clients.entries()].find(
      ([id]) => id === userId
    )?.[1];
    if (userSocket) {
      userSocket.send(message);
      console.log(`send message to user ${userId}:`, message);
    }
  }
});

app.get("/", (req, res) => {
  res.send("Websocket server is running");
});

// Start Server

server.listen(8080, () => {
  console.log("websockets server running on port 8080");
});
