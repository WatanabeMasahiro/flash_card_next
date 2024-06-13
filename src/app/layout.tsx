"use client";

import type { Metadata } from "next";
import { usePathname } from "next/navigation";
// import { Inter } from "next/font/google";
import "ress";
import "./globals.scss";
import { Header } from "./components/layouts/Header";
import { BreadcrumbUserArea } from "./components/layouts/BreadcrumbUserArea";
import { Footer } from "./components/layouts/Footer";

const metadata: Metadata = {
  title: "単語帳_fc",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element => {

  const pathname = usePathname();

  return (
    <html lang="ja">
      <body>
        <Header />
        <BreadcrumbUserArea pathname={pathname} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;