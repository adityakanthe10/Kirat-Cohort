import { Hono } from "hono";
import user from "./routes/user.route";
import postRouter from "./routes/post.route";
import tagRouter from "./routes/tag.route";

const app = new Hono();

app.route("/api/v1/user", user);
app.route("/api/v1/posts", postRouter);
app.route("/api/v1/tags", tagRouter);

export default app;
