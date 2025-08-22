"use server";

import { prisma } from "@/lib/prisma";
import { blogSchema, BlogSchemaValue } from "@/schemas/blog";

type ActionResponse = {
  success: boolean;
  message: string;
};

export async function createBlogAction(
  values: BlogSchemaValue
): Promise<ActionResponse> {
  try {
    // Validate incoming values
    const parsed = blogSchema.safeParse(values);
    if (!parsed.success) {
      return {
        success: false,
        message: parsed.error.message,
      };
    }

    // Create blog entry
    await prisma.blog.create({
      data: parsed.data,
    });

    return {
      success: true,
      message: "Blog created successfully",
    };
  } catch (error) {
    console.error("Error creating blog:", error);

    return {
      success: false,
      message: "An unexpected error occurred while creating the blog.",
    };
  }
}
