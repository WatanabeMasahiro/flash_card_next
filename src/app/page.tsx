"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import UserIcon from '@/app/_asset/icon/user-icon.svg'
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
      <main className="l-main">
        <div className="l-breadcrumb-user-area">
          <div className="breadcrumbList">
            <p>HOME</p>
            <p>/</p>
            <p>詳細</p>
          </div>
          {/* ユーザー名は、ホーム画面と退会画面のみ */}
          <div className="userName">　
            <i><UserIcon /></i>
            <p>ハチモジトシトウ</p>
          </div>
        </div>
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
              className={`btn -test`}
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
