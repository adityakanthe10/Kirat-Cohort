import z from "zod";

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlogPost = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});

// typeinference in zod
export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreateBlogPost = z.infer<typeof createBlogInput>;
export type UpdateBlogPost = z.infer<typeof updateBlogPost>;
