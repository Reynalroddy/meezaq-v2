import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Providers from "./providers";
import Whatsapp from "@/components/Home/Whatsapp";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meezaq",
  description: "MEEZAQ,Home of LUXURY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="w-full max-w-[1440px] mx-auto ">
            <Header />
            <main className=" w-full">{children}</main>
          </div>
          <Footer />
          <Whatsapp />
        </Providers>
      </body>
    </html>
  );
}
