import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSION = 403,
  SERVERERROR = 500,
}

export const getPostsByTag = async (c: Context) => {
  // Initialize prisma
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const res = await prisma.tags.findMany({
      where: {
        tag: String(c.req.param("tag")),
      },
      select: {
        post: {
          select: {
            user: {
              select: { username: true },
            },
            id: true,
            userId: true,
            title: true,
            body: true,
            createdAt: true,
          },
        },
      },
    });
    console.log(res, "response");

    if (res.length === 0) {
      return c.json({ posts: [] }, 200);
    }
    const posts = res.flatMap((tag) =>
      tag.post.map((post) => ({
        username: post.user.username,
        id: post.id,
        title: post.title,
        user: post.userId,
        body: post.body,
        createdAt: post.createdAt,
      }))
    );

    return c.json({ posts }, 200);
  } catch (error) {
    return (
      c.json({
        message: `Internal Server Error ${error || error}`,
      }),
      StatusCode.SERVERERROR
    );
  }
};

export const getTags = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const res = await prisma.tags.findMany();

    return c.json({
      tags: res,
    });
  } catch (error) {
    return c.body(`Internal Server Error: ${error}`, StatusCode.SERVERERROR);
  }
};
