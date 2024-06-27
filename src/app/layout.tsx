"use client";

import type { Metadata } from "next";
import { useState } from "react";
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

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (event: Event | undefined) => {
    const scrollTop: number = (event?.currentTarget as HTMLElement).scrollTop;
    if (scrollTop !== undefined) {
      setScrollPosition(scrollTop);
    }
  }

  return (
    <html lang="ja">
      <body>
        <Header />
        <div
        onScroll={ () => handleScroll(event) }
        className="c-scroll"
        role="scrollbar"
        >
          <BreadcrumbUserArea pathname={pathname} />
          {children}
        </div>
        <Footer scrollPosition={scrollPosition} />
      </body>
    </html>
  );
}

export default RootLayout;