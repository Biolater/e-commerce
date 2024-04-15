"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });
import { SessionProvider } from "next-auth/react";
import AddedProducts from "@/components/AddedProducts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = async () => {
    return await getServerSession();
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session as any}>
          <AddedProducts>{children}</AddedProducts>
        </SessionProvider>
      </body>
    </html>
  );
}
