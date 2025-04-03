import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";
import Redis from "ioredis";

dotenv.config();

const redisHost = process.env.REDIS_HOST || "localhost";
const redisPort = Number(process.env.REDIS_PORT) || 6379;

// Redis clients for storing user connections and subscribing to messages
const redisClient = new Redis({ host: redisHost, port: redisPort });
const redisSub = new Redis({ host: redisHost, port: redisPort });

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

// Store active WebSocket connections
const clients = new Map<string, WebSocket>();

console.log("WebSocket server started...");

wss.on("connection", (ws: WebSocket) => {
  console.log("New client connected");

  ws.on("message", async (message: string) => {
    try {
      const { userId } = JSON.parse(message);
      if (!userId) {
        ws.send(JSON.stringify({ error: "userId is required!" }));
        return;
      }

      console.log(`User ${userId} connected`);

      // Store user connection in memory
      clients.set(userId, ws);

      // Store user connection status in Redis
      await redisClient.set(`user:${userId}`, "connected");

      // Subscribe user to Redis channel
      redisSub.subscribe(`user:${userId}`);
    } catch (err) {
      console.error("Error parsing message:", err);
    }
  });

  ws.on("close", async () => {
    // Remove disconnected user
    const userId = [...clients.entries()].find(
      ([, client]) => client === ws
    )?.[0];
    if (userId) {
      clients.delete(userId);
      await redisClient.del(`user:${userId}`);
      console.log(`User ${userId} disconnected`);
    }
  });
});

// Redis Subscriber - Listens for messages and forwards them to users
redisSub.on("message", async (channel, message) => {
  const userId = channel.split(":")[1];

  // Check if user is still connected
  const isConnected = await redisClient.get(`user:${userId}`);
  if (isConnected) {
    const userSocket = clients.get(userId);
    if (userSocket) {
      userSocket.send(message);
      console.log(`Sent message to user ${userId}:`, message);
    }
  }
});

app.get("/", (req, res) => {
  res.send("WebSocket server is running");
});

// Start server
server.listen(8080, () => {
  console.log("WebSocket Server running on port 8080");
});
