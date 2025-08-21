"use server";
import { prisma } from "@/lib/prisma";

export const getUserById = async (id: string) => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  return user;
};
