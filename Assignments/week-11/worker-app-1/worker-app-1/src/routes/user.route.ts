import { Hono } from "hono";
import { signUp } from "../controllers/user.controller";

const user = new Hono();

user.post("/signup", signUp);

export default user;
