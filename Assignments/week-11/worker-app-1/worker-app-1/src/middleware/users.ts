import { Context, Next } from "hono";
import { Jwt } from "hono/utils/jwt";

export async function authmiddleware(c: any, next: Next) {
  const JWT_TOKEN = "AdityaKanthe";

  try {
    const token: string = c.req.header("Authorization").split(" ")[1];
    if (token !== null || token !== undefined) {
      const decode = await Jwt.verify(token, JWT_TOKEN);
      if (decode) {
        c.set("userId", decode);
        await next();
      } else {
        return c.body("you are unauthorised user sorry", 401);
      }
    } else {
      return c.body("you are unauthorized user", 401);
    }
  } catch (error) {
    return c.body("unauthorized" + error, 401);
  }
}
