"use server";

import { prisma } from "@/lib/prisma";
import { newsletterSchema, NewsletterSchemaValue } from "@/schemas/newsletter";

export async function createNewsletter(values: NewsletterSchemaValue) {
  try {
    // ✅ Validate input using Zod
    const parsed = newsletterSchema.safeParse(values);
    if (!parsed.success) {
      return {
        success: false,
        message: "Invalid email format.",
      };
    }

    const email = parsed.data.email.toLowerCase().trim();

    // ✅ Use findUnique if `email` is unique in your Prisma schema
    const existing = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existing) {
      return {
        success: false,
        message: "This email is already subscribed.",
      };
    }

    // ✅ Create subscription
    await prisma.newsletter.create({
      data: { email },
    });

    return {
      success: true,
      message: "Successfully subscribed to the newsletter.",
    };
  } catch (error) {
    console.error("Error creating newsletter subscription:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
