import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emma Böcker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(outfit.className, "dark bg-background text-text text-lg")}
      >
        {children}
      </body>
    </html>
  );
}
