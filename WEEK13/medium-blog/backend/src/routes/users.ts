import { Hono } from "hono";
import { signup, signin } from "../controllers/user.controller";

const users = new Hono();

users.post("/signup", signup);
users.post("/signin", signin);

export default users;
