"use client";
import "./header.scss";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  return (
    <div className="headerArea">
      <h1 className="headerText" onClick={router.push("/")}>
        Next.jsの勉強(Header)
      </h1>
    </div>
  );
}
