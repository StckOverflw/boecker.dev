import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import Blob from "@/components/static/blob";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL("https://" + process.env.VERCEL_URL)
    : process.env.BASE_URL
    ? new URL(process.env.BASE_URL)
    : process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL("https://boecker.dev"),

  title: "Emma Böcker | Full-stack developer, political activist and student",
  description:
    "Emma Böcker is a full-stack developer, political activist and student from germany.",
  keywords: ["Emma Böcker", "Full-stack developer", "Political activist"],
  icons: ["/meta/icon-rounded.png"],
  openGraph: {
    title: "Emma Böcker",
    description:
      "Emma Böcker is a full-stack developer, political activist and student from germany.",
    type: "website",
    url: "https://boecker.dev",
    images: "/images/meta/og-image.png",
  },
  twitter: {
    images: "/images/meta/og-image.png",
    site: "@EmmaBoecker",
    creator: "@EmmaBoecker",
  },
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
        <div className="fixed h-[100svh] w-full" id="home">
          <div className="flex flex-col gap-4 2xl:container w-[90%] mx-auto justify-center h-full select-none">
            <Blob />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
