import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "大漁建設股份有限公司",
  description: "",
  openGraph: {
    images: "https://pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev/p02.jpg",
  },
  icons: {
    icon: "/favicon.ico", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-tw">
      <body className={cn("bg-[#F5F5F5]")}>{children}</body>
    </html>
  );
}
