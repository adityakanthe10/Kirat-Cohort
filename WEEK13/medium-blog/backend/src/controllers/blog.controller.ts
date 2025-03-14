import { Context } from "hono";

export const createBlog = async (c: Context) => {
  console.log("hi there");
  return c.text("Hello world");
};
export const updateBlog = async (c: Context) => {
  console.log("hi there");
  return c.text("Hello world");
};
export const getBlogById = async (c: Context) => {
  console.log("hi there");
  return c.text("Hello world");
};
export const getAllBlogById = async (c: Context) => {
  console.log("hi there");
  return c.text("Hello world");
};
