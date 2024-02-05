"use client";

import styles from "./header.module.scss";
import { userRouter } from "next/navigation";

export function Header() {
  const router = userRouter();

  return (
    <div className="headerArea">
      <h1 className="headerText" onClick={router.push("/")}>
        Next.jsの勉強
      </h1>
    </div>
  )
}