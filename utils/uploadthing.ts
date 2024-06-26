import { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateUploadButton } from "@uploadthing/react";
import { UTApi } from "uploadthing/server";

export const utapi = new UTApi();
export const UploadButton = generateUploadButton<OurFileRouter>();
