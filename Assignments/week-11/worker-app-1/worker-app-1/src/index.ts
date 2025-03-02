import { Hono } from "hono";
import user from "./routes/user.route";
import postRouter from "./routes/post.route";

const app = new Hono();

app.route("/api/v1/user", user);
app.route("/api/v1/posts", postRouter);

export default app;
