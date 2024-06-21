import { createUploadthing, type FileRouter } from "uploadthing/next";
// import { auth } from "@/auth";
// import { getServerSession } from "next-auth";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 20 } })
    // .middleware(async ({ req }) => {
    //   const session = await getServerSession();
    //   const user = session?.user;

    //   if (!user) throw new Error("Unauthorized");

    //   return { userId: user.id };
    // })
    .onUploadComplete(async ({ metadata, file }) => {
      // console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file);

      // return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
