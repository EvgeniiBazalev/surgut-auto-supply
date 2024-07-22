import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DefaultHeaderNavigation from "@/components/UI/navbar/DefaultHeaderNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Surgut auto supply",
  description: "Магазин автозапчастей в г. Сургут",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DefaultHeaderNavigation></DefaultHeaderNavigation>
        {children}
      </body>
    </html>
  );
}
