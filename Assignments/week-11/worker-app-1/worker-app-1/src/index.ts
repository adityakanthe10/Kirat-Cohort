import { Hono } from "hono";
// import { todos } from "./routes/todos.route";
import user from "./routes/user.route";

const app = new Hono();

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

app.route("/api/v1/user", user);
app.route("/api/v1/todo", user);

export default app;
