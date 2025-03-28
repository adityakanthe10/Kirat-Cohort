## Week 19.2 Web Sockets and advance Backends

### What is backend communication?
1. In real world you have various backend systems, not just one.

### Types Of Communication

A. <b>Synchronous (Strong Coupling) </b>
 - In synchronous communication, a request is sent from a client to a server (or between services), and the sender waits for a response before proceeding.
    1. HTTPS (REST/GRAPHQL)
    2. Websockets (debatable)

B. <b>Asynchronous (Weak Coupling) </b>
 - In asynchronous communication, the sender does not wait for an immediate response. Instead, it continues executing other tasks while the response arrives later.
    1. Messaging Queues
    2. Pub - Subs
    3. Server - sent events
    4. Websockets(debatable)

### WEBSOCKETS

1. Web - Sockets provide a way to establish a persistent, full-duplex communication channel over a single TCP connection between the client and the server.

- Use Cases of Websockets

- Real-Time Applications: Chat applications, live sports updates, real-time gaming, and any application requiring instant updates can benefit from WebSockets.
- Live Feeds: Financial tickers, news feeds, and social media updates are examples where WebSockets can be used to push live data to users.
- Interactive Services: Collaborative editing tools, live customer support chat, and interactive webinars can use WebSockets to enhance user interaction

### Why not use HTTPS/REST? Why do you need ws?

1. Network handshake happens for every request
2. No way to push server side events(you can use polling but not the best approach)

### Websockets In Node.js

-  There are various libraries that let you create a ws server (similar to how express lets you create an HTTP server)
    - https://www.npmjs.com/package/websocket
    - https://github.com/websockets/ws
    - https://socket.io/
 
- Problems with socket.io - 
    - Even though socket.io is great (it gives you constructs like rooms to make the API much cleaner), it’s harder to support multiple platforms in it (Android, IOS, Rust)
    - There are implementations in most platforms but not very up to date 

### Code Using Express

```
import express from 'express'
import { WebSocketServer } from 'ws'

const app = express()
const httpServer = app.listen(8080)

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send('Hello! Message From Server!!');
});
```

### Client Side Code

```
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])

  return (
    <>
      hi there
    </>
  )
}

export default App
```

### NextJs

```
"use client"
import { useEffect, useState } from 'react'

export default function() {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])

  return (
    <>
      hi there
    </>
  )
}
```

### Scaling Web Servers

- In the real world, you'd want