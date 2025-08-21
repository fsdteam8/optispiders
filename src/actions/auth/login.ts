"use server";

import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import { LoginFormValues, loginSchema } from "@/schemas/auth";
import bcrypt from "bcryptjs";

export async function loginAction(reqBody: LoginFormValues) {
  try {
    // 1. Validate input
    const parsed = loginSchema.safeParse(reqBody);
    if (!parsed.success) {
      return {
        success: false,
        message: parsed.error.message,
      };
    }

    const { email, password } = parsed.data;

    // 2. Find user by email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return {
        success: false,
        message: "No account found with this email address.",
      };
    }

    // 3. Restrict to admin role
    if (user.role !== "admin") {
      return {
        success: false,
        message: "Access denied. Only administrators can log in.",
      };
    }

    // 4. Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return {
        success: false,
        message: "Incorrect password. Please try again.",
      };
    }

    // 5. Sign in with credentials provider
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return {
      success: true,
      message: "Login successful. Redirecting to dashboard...",
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
