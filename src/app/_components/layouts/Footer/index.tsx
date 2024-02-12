"use client";

import styles from "./footer.module.scss";
import { useRouter } from "next/navigation";

export function Footer() {
  const router = useRouter();

  return (
    <div className={styles.footerArea}>
      <h1 className={styles.footerText} onClick={router.replace("/")}>
        Next.jsの勉強(Footer)
      </h1>
    </div>
  );
}
