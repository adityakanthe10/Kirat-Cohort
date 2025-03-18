import { Hono } from "hono";
import users from "./routes/users";
import blogs from "./routes/blogs";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());
app.route("/api/v1/user", users);
app.route("/api/v1/blog", blogs);

export default app;
