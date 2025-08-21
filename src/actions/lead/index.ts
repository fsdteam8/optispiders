"use server";

import { prisma } from "@/lib/prisma";
import { leadFormSchema, LeadFormValues } from "@/schemas/lead";

export async function leadCollectAction(data: LeadFormValues) {
  try {
    // ✅ Validate input with Zod schema
    const parsed = leadFormSchema.safeParse(data);
    if (!parsed.success) {
      return {
        success: false,
        message: "Invalid form data. Please check your inputs.",
        errors: parsed.error.message, // provide detailed validation errors
      };
    }

    const {
      email,
      companyName,
      country,
      firstName,
      jobTitle,
      lastName,
      phone,
      retailers,
      terms,
    } = parsed.data;

    // ✅ Check if lead already exists by email
    const exist = await prisma.lead.findFirst({
      where: { email },
    });

    if (exist) {
      return {
        success: false,
        message: "A lead with this email already exists.",
      };
    }

    // ✅ Create lead in DB
    await prisma.lead.create({
      data: {
        companyName,
        email,
        firstName,
        lastName,
        jobTitle,
        phone,
        terms,
        country: country[0],
        state: country[1],
        retailers,
      },
    });

    return {
      success: true,
      message: "Thanks for contacting us. We will get back to you shortly!",
    };
  } catch (error) {
    console.error("Lead collection error:", error);
    return {
      success: false,
      message:
        "Something went wrong while submitting your lead. Please try again later.",
    };
  }
}
