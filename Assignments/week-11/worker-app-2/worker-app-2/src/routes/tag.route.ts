import { Hono } from "hono";
import { getPostsByTag, getTags } from "../controllers/tag.controller";

const tagRouter = new Hono();

tagRouter.get("/tags", getTags);
tagRouter.get("/getPost/:tag", getPostsByTag);

export default tagRouter;
