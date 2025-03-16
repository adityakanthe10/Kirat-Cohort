"use server";

import { prisma } from "@/db";

export async function solve(username: string, password: string) {
  try {
    await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
}
