"use server";

import { backendClient } from "@/lib/edgestore-server";
import { prisma } from "@/lib/prisma";
import { blogSchema, BlogSchemaValue } from "@/schemas/blog";
import { revalidatePath } from "next/cache";

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

    revalidatePath("/dashboard/blog-management");
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

export async function deleteBlogAction(id: string): Promise<ActionResponse> {
  try {
    // Check if the blog exists
    const existingBlog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!existingBlog) {
      return {
        success: false,
        message: "Blog not found",
      };
    }

    // Delete blog
    const deleteRes = await prisma.blog.delete({
      where: { id },
    });

    await backendClient.publicFiles.deleteFile({
      url: deleteRes.thumbnail,
    });

    revalidatePath("/dashboard/blog-management");
    return {
      success: true,
      message: "Blog deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting blog:", error);

    return {
      success: false,
      message: "An unexpected error occurred while deleting the blog.",
    };
  }
}
