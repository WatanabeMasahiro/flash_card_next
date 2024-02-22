import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "ress";
import "./globals.scss";
import { Header } from "./_components/layouts/Header";
import { Footer } from "./_components/layouts/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "⭐️スターサイト⭐️",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header tester="Header">これはchildrenのテスト</Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
