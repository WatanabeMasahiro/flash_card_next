"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import "./page.scss";
// import { NextResponse } from "next/server";

export default function Home() {
  const [num, setNum] = useState(0);
  const router = useRouter();

  const pathname = usePathname();
  console.log("URL:", pathname);

  const countUp = () => {
    setNum(num + 1);
  };

  return (
    <>
      <main>
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
              className="btn -test"
              onClick={() => {
                router.push("/test");
              }}
            >
              Testページへ
            </button>
          </div>
          <div>
            <button
              className="btn-test2"
              onClick={() => {
                router.push("/blog/3");
              }}
            >
              Blogページへ
            </button>
          </div>
        </div>

        <div>
          <Link className="btn" href="/chat-copy">Chat-copyページへ</Link>
        </div>
        <div>
          <a className="btn" href="/chat-copy">Chat-copyページへ</a>
        </div>

        <div>
          <h3>カウントアップ</h3>
          <p>{num}</p>
          <button
            className="btn-test2"
            onClick={countUp}
          >プラス１!!!</button>
        </div>
      </main>
    </>
  );
}
