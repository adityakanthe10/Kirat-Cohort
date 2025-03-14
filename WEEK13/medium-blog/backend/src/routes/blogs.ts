import { Hono } from "hono";
import {
  createBlog,
  updateBlog,
  getBlogById,
  getAllBlogById,
} from "../controllers/blog.controller";
const blogs = new Hono();

blogs.post("/blog", createBlog);
blogs.put("/blog", updateBlog);
blogs.get("/blog/:id", getBlogById);
blogs.get("/blog/bulk", getAllBlogById);

export default blogs;
