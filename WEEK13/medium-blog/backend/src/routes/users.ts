import { Hono } from "hono";
import { Context } from "hono";
import { sign, verify } from "hono/jwt";
import { signup, signin } from "../controllers/user.controller";

const users = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

users.use("/user", async (c, next) => {
  try {
    const header = c.req.header("authorization") || "";
    console.log("Authorization Header:", header);

    const token = header.split(" ")[1];
    console.log("Extracted Token:", token);

    const verifiedToken = await verify(token, c.env.JWT_SECRET);
    console.log("Verified Token:", verifiedToken);

    if (verifiedToken.id) {
      console.log("Token verification successful");
      await next();
    } else {
      console.log("Unauthorized access");
      c.status(403);
      return c.json({ error: "unauthorized" });
    }
  } catch (error) {
    console.error("Error in middleware:", error);
    c.status(500);
    return c.json({ error: "Internal Server Error" });
  }
});

users.post("/signup", signup);
users.post("/signin", signin);

export default users;
