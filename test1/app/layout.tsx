import type { Metadata } from "next";
import "./globals.css";
import LeftBar from "@/components/LeftBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex  ">
        <LeftBar />
        <div className="flex justify-center h-full w-full">{children}</div>
      </body>
    </html>
  );
}