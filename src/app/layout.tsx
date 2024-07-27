"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
// import { Inter } from "next/font/google";
import "ress";
import "./globals.scss";
import { appTitle } from "@/app/_const/appTitle";
import { Header } from "./components/layouts/Header";
import { BreadcrumbUserArea } from "./components/layouts/BreadcrumbUserArea";
import { Footer } from "./components/layouts/Footer";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element => {

  const pathname = usePathname();

  const [scrollPosition, setScrollPosition] = useState(0);
  const onScrollPosition = (event: Event | undefined) => {
    const scrollTop: number = (event?.currentTarget as HTMLElement).scrollTop;
    if (scrollTop !== undefined) {
      setScrollPosition(scrollTop);
    }
  }

  const scrollDivRef = useRef<HTMLDivElement | null>(null);
  
  const scrollTotopFunc = () => {
    if(scrollDivRef.current) {
      scrollDivRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <html lang="ja">
      <head>
        <title>{ appTitle }</title>
        <meta name="description" content="Generated by create next app！！！" />
      </head>
      <body>
        <Header />
        <div
          className="u-scroll"
          ref={scrollDivRef}
          onScroll={ () => onScrollPosition(event) }
        >
          <BreadcrumbUserArea pathname={pathname} />
          {children}
        </div>
        <Footer scrollPosition={scrollPosition} scrollTotopFunc={() => scrollTotopFunc()} />
      </body>
    </html>
  );
}

export default RootLayout;