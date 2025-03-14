import { Hono } from "hono";
import users from "./routes/users";
import blogs from "./routes/blogs";

const app = new Hono();

app.route("/api/v1/user", users);
app.route("/api/v1/blog", blogs);

export default app;
