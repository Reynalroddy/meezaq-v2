"use server";

// import { getServerSession } from "next-auth";
import prisma from "../db";

export const renderError = (
  error: unknown
): { message: string; status: string } => {
  console.log(error);
  return {
    status: "false",
    message: error instanceof Error ? error.message : "An error occurred",
  };
};
