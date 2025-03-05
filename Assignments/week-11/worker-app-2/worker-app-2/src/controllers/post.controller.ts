import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSION = 403,
  SERVERERROR = 500,
}

export const createPost = async (c: Context) => {
  // Initialize prisma
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  //
  try {
    const body: {
      title: string;
      body: string;
      tags: string;
    } = await c.req.json();

    // check the inputs body and title
    if ((body.body && body.title) == null) {
      return c.body("Invalid User input", StatusCode.BADREQ);
    }

    // split and clean tags into the array
    const tagNames = body.tags.split(",").map((tag) => tag.trim());
    // creating the post in the database
    const res = await prisma.post.create({
      data: {
        title: body.title,
        body: body.body,
        userId: c.get("userId"),
        tags: {
          connectOrCreate: tagNames.map((tag) => ({
            where: {
              tag: tag,
            },
            create: {
              tag: tag,
            },
          })),
        },
      },
      include: {
        tags: true,
      },
    });

    // return the response
    return c.json({
      message: "Post created successfully",
      post: {
        id: res.id,
        title: res.title,
        body: res.body,
        tags: res.tags.map((tag) => tag.tag),
        createdAt: res.createdAt,
      },
    });
  } catch (error) {
    // Error Handling
    return c.body(`Internal Server Error:${error}`, StatusCode.SERVERERROR);
  }
};

export const getAllPosts = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const response = await prisma.post.findMany({
      include: {
        tags: true,
        user: true,
      },
    });
    return c.json({
      post: response.map((res) => ({
        id: res.id,
        username: res.user.username,
        userId: res.user.id,
        title: res.title,
        body: res.body,
        tags: res.tags,
        createdAt: res.createdAt,
      })),
    });
  } catch (error) {
    return c.json(
      {
        message: `Internal Server Error, ${error}`,
      },
      StatusCode.SERVERERROR
    );
  }
};

export const getPost = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const id: number = Number(c.req.param("id"));

    const isPostExist = await prisma.post.findFirst({
      where: {
        id: id,
        userId: c.get("userId"),
      },
      include: {
        tags: true,
      },
    });

    if (isPostExist == null) {
      return (
        c.json({
          message: `Post does not exist `,
        }),
        StatusCode.NOTFOUND
      );
    }

    return c.json({
      data: {
        id: isPostExist.id,
        title: isPostExist.title,
        body: isPostExist.body,
        tags: isPostExist.tags,
        createdAt: isPostExist.createdAt,
      },
    });
  } catch (error) {
    return c.json(
      {
        message: `Internal Server Error, ${error}`,
      },
      StatusCode.SERVERERROR
    );
  }
};

export const updatePost = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const id: Number = Number(c.req.param("id"));

    const body: {
      title: string;
      body: string;
      tags: string;
    } = await c.req.json();

    const tagNames = body.tags.split(",").map((tag) => tag.trim());

    const isPostExist = await prisma.post.findFirst({
      where: {
        id: id,
        userId: c.get("userId"),
      },
    });

    if (isPostExist == null) {
      return c.json("Post does not exist", StatusCode.NOTFOUND);
    }

    const res = await prisma.post.update({
      where: {
        id: id,
        userId: c.get("userId"),
      },
      data: {
        title: body.title,
        body: body.body,
        tags: {
          connectOrCreate: tagNames.map((tag) => ({
            where: { tag },
            create: { tag },
          })),
        },
      },
      include: {
        tags: true,
      },
    });

    return c.json({
      data: {
        id: res.id,
        title: res.title,
        body: res.body,
        tags: res.tags,
        createdAt: res.createdAt,
      },
    });
  } catch (error) {
    return c.json(
      {
        message: `Internal Server Error,${error}`,
      },
      StatusCode.SERVERERROR
    );
  }
};

export const deletePost = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const id: Number = Number(c.req.param("id"));

    const isPostExist = await prisma.post.findFirst({
      where: {
        id: id,
        userId: c.get("userId"),
      },
    });

    if (isPostExist == null) {
      return (
        c.json({
          message: "Post does not exist",
        }),
        StatusCode.NOTFOUND
      );
    }

    const res = await prisma.post.delete({
      where: {
        id: id,
        userId: c.get("userId"),
      },
    });

    return c.json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    return (
      c.json({
        message: "Internal Server Error",
      }),
      StatusCode.SERVERERROR
    );
  }
};
