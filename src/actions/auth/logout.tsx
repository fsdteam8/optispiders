"use server";

import { signOut } from "@/auth";

export async function logoutAction() {
  try {
    await signOut({ redirect: false });

    return {
      success: true,
      message: "You have been logged out successfully.",
    };
  } catch (error) {
    console.error("Logout error:", error);

    return {
      success: false,
      message: "Failed to log out. Please try again.",
    };
  }
}
