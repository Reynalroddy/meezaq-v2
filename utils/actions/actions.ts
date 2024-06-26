"use server";

import { redirect } from "next/navigation";
// import { getServerSession } from "next-auth";
import prisma from "../db";
import { ProductType, productSchema, validateWithZodSchema } from "../schema";
import { utapi } from "../uploadthing";
import { revalidatePath } from "next/cache";

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

export const deleteProduct = async (id: string, images: string) => {
  const imgKey = JSON.parse(images);
  const allKeys = imgKey.map((img: any) => {
    return img.key;
  });
  try {
    await utapi.deleteFiles(allKeys);
    await prisma.product.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
    revalidatePath(`/products/[id]`, "page");
    return { status: "true", message: "property deleted" };
  } catch (error) {
    return renderError(error);
  }
  // redirect("/");
};
