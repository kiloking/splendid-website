import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "大漁建設股份有限公司",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-tw">
      <body className={cn(
        "bg-[#F5F5F5]",
         )}>
          {children}
      </body>
    </html>
  );
}
