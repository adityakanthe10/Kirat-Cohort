import { Hono } from "hono";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../controllers/post.controller";
import { authmiddleware } from "../middleware/users";

const postRouter = new Hono();

postRouter.post("/posts", authmiddleware, createPost);
postRouter.get("/all-posts", authmiddleware, getAllPosts);
postRouter.get("/post/:id", authmiddleware, getPost);
postRouter.put("/post/:id", authmiddleware, updatePost);
postRouter.delete("/post/:id", authmiddleware, deletePost);

export default postRouter;
