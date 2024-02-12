"use client";

import { useRouter, usePathname } from "next/navigation";
import "./page.scss";
// import { NextResponse } from "next/server";

export default function Home() {
  const router = useRouter();

  const pathname = usePathname();
  console.log("URL:", pathname);

  return (
    <>
      <h1>TOPページ</h1>
      <div className="btnField">
        <div>
          <button
            className="btn"
            onClick={() => {
              router.push("/chat");
            }}
          >
            Chatページへ
          </button>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              router.push("/test");
            }}
          >
            Testページへ
          </button>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              router.push("/blog/3");
            }}
          >
            Blogページへ
          </button>
        </div>
      </div>
    </>
  );
}
