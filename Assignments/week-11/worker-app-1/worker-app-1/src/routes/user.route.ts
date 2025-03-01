import { Hono } from "hono";
import { signIn, signUp } from "../controllers/user.controller";

const user = new Hono();

user.post("/signup", signUp);
user.post("/signin", signIn);

export default user;
