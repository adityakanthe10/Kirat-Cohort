import { Hono } from "hono";
import {
  createBlog,
  updateBlog,
  getBlogById,
  getAllBlogById,
} from "../controllers/blog.controller";
import { verify } from "hono/jwt";

interface JwtPayload {
  id: string;
}

const blogs = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogs.use("/blog", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  try {
    const user = (await verify(
      authHeader,
      c.env.JWT_SECRET
    )) as unknown as JwtPayload;

    if (user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(411);
      return c.json({
        message: "You are not logged in",
      });
    }
  } catch (error) {
    c.status(403);
    return c.json({
      message: "You are not logged in",
    });
  }
});

blogs.post("/blog", createBlog);
blogs.put("/blog", updateBlog);
blogs.get("/blog/bulk", getAllBlogById);
blogs.get("/blog/:id", getBlogById);

export default blogs;
