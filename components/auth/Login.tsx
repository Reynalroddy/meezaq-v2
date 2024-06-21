"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "../form/input";
// import CustomButton from "../Button";
import { useToast } from "../ui/use-toast";
import { LoginType, loginUserSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomButton from "../Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<LoginType>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginType) {
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (res?.url) {
      setLoading(false);
      router.push("/");
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "invalid credentials",
      });
      setLoading(false);
    }
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-16 sm:px-6 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CustomFormField
                  type="email"
                  name="email"
                  label="Email"
                  control={form.control}
                  required
                />
                <CustomFormField
                  type="password"
                  name="password"
                  label="Password"
                  control={form.control}
                  required
                />
                <div className="mt-6">
                  <CustomButton
                    type="submit"
                    label={"Submit"}
                    fullWidth={true}
                    loading={loading}
                    // variant={btnType}
                    // onClick={handleSubmit}
                  />
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
