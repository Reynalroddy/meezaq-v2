"use server";

// import { getServerSession } from "next-auth";
import prisma from "../db";
import { ProductType, productSchema, validateWithZodSchema } from "../schema";

export const renderError = (
  error: unknown
): { message: string; status: string } => {
  console.log(error);
  return {
    status: "false",
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

export const createProductAction = async (
  values: ProductType
): Promise<{ message: string; status: string }> => {
  try {
    const validatedFields = validateWithZodSchema(productSchema, values);
    //   const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    //   const fullPath = await uploadImage(validatedFile.image);

    await prisma.product.create({
      data: {
        ...validatedFields,
        // userId: userid,
        // name: validatedFields.name,
      },
    });
    return { status: "true", message: "property created" };
  } catch (error) {
    return renderError(error);
  }
  //   redirect("/");
};

export const fetchProducts = async ({
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const properties = await prisma.product.findMany({
    where: {
      category,
    },
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return properties;
};

export const fetchProductDetails = (id: string) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
    },
    // include: {
    //   profile: true,
    //   bookings: {
    //     select: {
    //       checkIn: true,
    //       checkOut: true,
    //     },
    //   },
    // },
  });
};
