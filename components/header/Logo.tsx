"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={100}
        height={45}
        className="h-auto w-auto"
      />
    </Link>
  );
};

export default Logo;
