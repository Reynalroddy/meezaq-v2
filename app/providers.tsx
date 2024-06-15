"use client";
import { ThemeProvider } from "./theme-provider";
// import { Toaster } from "@/components/ui/toaster";
// import { SessionProvider } from "next-auth/react";
function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <SessionProvider>
    // <Toaster />
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
    // </SessionProvider>
  );
}
export default Providers;
