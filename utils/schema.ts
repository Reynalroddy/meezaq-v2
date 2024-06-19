import * as z from "zod";
import { ZodSchema } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(100, {
      message: "name must be less than 100 characters.",
    }),
  image: z.string().min(10, {
    message: "img must be at least 10 characters.",
  }),
  price: z.coerce.number().int().min(0, {
    message: "price must be a positive number.",
  }),
  category: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "description must be between 10 and 1000 words.",
    }
  ),
  weight: z.string(),
});
export const loginUserSchema = z.object({
  // firstName: z.string().max(5, { message: 'max length is 5' }),
  email: z.string().email(),
  password: z.string(),
});

export type LoginType = z.infer<typeof loginUserSchema>;
export type ProductType = z.infer<typeof productSchema>;
