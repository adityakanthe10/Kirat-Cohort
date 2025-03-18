import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {
  createBlogInput,
  updateBlogPost,
} from "@adityakanthe2024/complete-medium-commmon";

export const createBlog = async (c: Context) => {
  const body = await c.req.json();

  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs are not correct",
    });
  }

  const userId = c.get("userId");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(userId),
    },
  });

  return c.json({
    id: blog.id,
    msg: "blog created successfully",
  });
};
export const updateBlog = async (c: Context) => {
  const body = await c.req.json();

  const { success } = updateBlogPost.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs are not correct",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.update({
    data: {
      title: body.title,
      content: body.content,
    },
    where: { id: body.id },
  });

  return c.json({
    id: blog.id,
  });
};
export const getBlogById = async (c: Context) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findFirst({
      where: { id: Number(id) },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({
      blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({ message: "Error while fetching data" });
  }
};

// Todo add pagination
export const getAllBlogById = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const blog = await prisma.post.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: { name: true },
      },
    },
  });
  return c.json({
    blog,
  });
};
