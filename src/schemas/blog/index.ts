import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Content cannot be empty" }),
  author: z.string().min(1, { message: "Author name is required" }),
  thumbnail: z.string().url({ message: "Thumbnail must be a valid URL" }),
});

export type BlogSchemaValue = z.infer<typeof blogSchema>;
