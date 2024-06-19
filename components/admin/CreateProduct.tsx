"use client";
// import useCurrentUser from "@/hooks/useCurrentUser";
import { ProductType, productSchema } from "@/utils/schema";
import React, { useEffect, useState } from "react";
// import { useToast } from "../ui/use-toast";
import { Form } from "../ui/form";
import {
  CustomFormField,
  CustomFormSelect,
  CustomTextArea,
} from "../form/input";
// import CustomButton from "../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { createPropertyAction } from "@/utils/actions/actions";
import { redirect, useRouter } from "next/navigation";
import { UploadButton } from "@/utils/uploadthing";
import { categoriesFilter } from "@/utils/data";
import CustomButton from "../Button";
function CreateProduct() {
  const [loading, setLoading] = useState(false);
  //   const { user, setUser } = useCurrentUser();
  const router = useRouter();
  const [imgSrc, setImgSrc] = useState("");
  //   console.log(user);
  // const currentUser = auth.user;
  const form = useForm<ProductType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      image: "",
      price: 1000,
      category: categoriesFilter[0].name,
      description: "",
      weight: "",
    },
    // errors
  });
  //   const { toast } = useToast();
  // console.log(form);
  async function onSubmit(values: ProductType) {
    setLoading(true);
    console.log(values);

    //     try {
    //       const result: any = await createPropertyAction(values);
    //       console.log(result);
    //       if (!result || result?.status === "false") {
    //         toast({
    //           variant: "destructive",
    //           description: result.message || "rental not created",
    //         });
    //         // toast({ description: "user not updated" });
    //         return;
    //       }
    //       toast({ description: "rental created" });
    //       router.push("/");
    //     } catch (error: any) {
    //       console.log(error);
    //       toast({
    //         variant: "destructive",
    //         description: error?.message || "something went wrong",
    //       });
    //     } finally {
    //       setLoading(false);
    //     }
  }
  return (
    <section className="container mx-auto pb-10 pt-24">
      <h1 className="text-2xl font-semibold mb-8 capitalize ">
        create product
      </h1>
      <div className="border p-8 rounded-md">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-8 mb-4">
              <CustomFormField
                name="name"
                type="text"
                control={form.control}
                label="Name (20 limit)"
                // defaultValue="Cabin in Latvia"
              />
              <CustomFormField
                name="weight"
                type="text"
                control={form.control}
                label="weight"
                // defaultValue="Cabin in Latvia"
              />

              {/* price */}
              <CustomFormField
                name="price"
                type="number"
                control={form.control}
                label="Price"
                // defaultValue="Dream Getaway Awaits You Here!"
              />
              {/* categories */}
              <CustomFormSelect
                control={form.control}
                name="category"
                labelText="Categories"
                items={categoriesFilter}
              />
            </div>
            {/* text area / description */}
            <CustomTextArea
              name="description"
              control={form.control}
              label="Description)"
            />
            <div className="grid sm:grid-cols-2 gap-8 mt-4">
              {/* <ImageInput /> */}
              <div className="space-y-2">
                <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize">
                  Select Images(min 1 ,max3)
                </span>
                <div className="flex justify-between  items-center border border-zinc-300 rounded-md px-3 h-9 self-center">
                  <UploadButton
                    className="text-sm  ut-button:bg-transparent  dark:border-neutral-700 ut-button:text-blue-500 ut-button:font-bold ut-allowed-content:hidden ut-button:ring-0 ut-button:focus-visible:ring-0 ut-button:ring-offset-0 ut-button:w-full"
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      // Do something with the response
                      console.log(res);
                      form.setValue("image", res[0].url);
                      setImgSrc(res[0].url);
                      console.log("Files: ", res);
                    }}
                    onUploadError={(error: Error) => {
                      console.log(error);
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                  {imgSrc && <span className="text-xs">{imgSrc}</span>}
                </div>
                {form.formState.errors.image && (
                  <span className="text-sm text-red-600 ">
                    image is required
                  </span>
                )}
              </div>
            </div>

            <div className="mt-8">
              <CustomButton
                type="submit"
                label={"create product"}
                fullWidth={true}
                loading={loading}
              />
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
export default CreateProduct;
