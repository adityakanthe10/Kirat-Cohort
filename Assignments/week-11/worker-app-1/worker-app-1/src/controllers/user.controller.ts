import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signupSchema } from "../zod/user";
import { Jwt } from "hono/utils/jwt";

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSION = 403,
  SERVERERROR = 500,
}

// const prisma = new PrismaClient({
//   datasources: {
//     db: {
//       url: env.DATABASE_URL, // This should now correctly reference the env variable
//     },
//   },
// }).$extends(withAccelerate());

export const signUp = async (c: Context) => {
  // Initialize the prisma client
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());

  try {
    //Parsing the request Body
    const body: { username: string; email: string; password: string } =
      await c.req.json();
    //Validating input using signupSchema
    const parsedSchema = signupSchema.safeParse(body);

    if (!parsedSchema.success) {
      return c.json(
        { message: "Invalid username or password" },
        StatusCode.BADREQ
      );
    }
    //Checking if the email already exists
    const isUserExist = await prisma.user.findFirst({
      where: { email: body.email },
    });

    if (isUserExist) {
      return c.json({ message: "Email already exists" }, StatusCode.BADREQ);
    }
    //Creating the User in the database
    const res = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
      },
    });

    //Generating a JWT TOken
    const userId = res.id;

    const token = await Jwt.sign(userId, c.env.JWT_TOKEN);

    return c.json({
      msg: "User created successfully",
      token: token,
      user: {
        userId: res.id,
        username: res.username,
        email: res.email,
      },
    });
    //Returning the response
  } catch (error) {
    //Error Handling
    return c.json(
      { message: `Internal Server Error : ${error}` },
      StatusCode.SERVERERROR
    );
  }
};
