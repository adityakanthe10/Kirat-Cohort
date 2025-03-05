import { Context } from "hono";
import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signupSchema, signinSchema } from "../zod/user";
import { Jwt } from "hono/utils/jwt";

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSION = 403,
  SERVERERROR = 500,
}

export const signUp = async (c: Context) => {
  console.log("Status Code", StatusCode);
  console.log("Environment variables:", c.env);

  console.log(c.env.DATABASE_URL, "env database url");
  console.log("DATABASE_URL from context:", c.env.DATABASE_URL);
  console.log("DIRECT_URL from context:", c.env.DIRECT_URL);
  console.log("JWT_TOKEN from context:", c.env.JWT_TOKEN);

  // Initialize the prisma client

  if (!c.env.DATABASE_URL) {
    console.error("DATABASE_URL is missing in environment variables!");
    return c.json(
      { message: "Internal Server Error: Missing database URL" },
      StatusCode.SERVERERROR
    );
  }
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
    console.log(body, "body");
    //Validating input using signupSchema
    const parsedSchema = signupSchema.safeParse(body);
    console.log("parsed Schema", parsedSchema);
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
    console.log("Is user exist:", isUserExist);
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
    console.log("User created:", res);

    //Generating a JWT TOken
    const userId = res.id;

    if (!userId) {
      console.log("User ID is undefined!");
      return c.json(
        { message: "Internal Server Error: User ID is missing" },
        StatusCode.SERVERERROR
      );
    }

    if (!c.env.JWT_TOKEN) {
      console.log("JWT_TOKEN is missing in environment variables!");
      return c.json(
        { message: "Internal Server Error: Missing JWT token" },
        StatusCode.SERVERERROR
      );
    }

    const token = await Jwt.sign(userId, c.env.JWT_TOKEN);
    console.log("Generated token:", token);

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

export const signIn = async (c: Context) => {
  // Initialize the prisma client

  const databaseUrl = c.env.DATABASE_URL;
  console.log("c.env", databaseUrl);

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
  }).$extends(withAccelerate());

  try {
    const body: {
      email: string;
      password: string;
    } = await c.req.json();
    // parsing the request body
    const parsedSchema = signinSchema.safeParse(body);

    if (!parsedSchema.success) {
      return c.body("Invalid Email Id or Password", StatusCode.BADREQ);
    }
    // Finding if user exists
    const responseIsUser = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    console.log("responseIsUser", responseIsUser);
    if (responseIsUser == null) {
      return c.body("User does not exists", StatusCode.BADREQ);
    }
    // Generating a token

    const userId = responseIsUser?.id;

    const token = await Jwt.sign(userId, c.env.JWT_TOKEN);
    // Returning a response

    return c.json({
      message: "user Logged in Successfully",
      token: token,
      user: {
        userId: userId,
        username: responseIsUser.username,
        password: responseIsUser.password,
      },
    });
  } catch (error) {
    // Error handling
    return c.json(
      {
        message: "Internal Server Error",
        error,
      },
      StatusCode.SERVERERROR
    );
  }
};
