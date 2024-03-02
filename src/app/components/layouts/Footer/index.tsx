import Link from "next/link";

export function Footer() {

  return (
    <footer className="styles.footerArea">
      <h1 className="styles.footerText">
        <Link href="/">
          Next.jsの勉強(Footer)
        </Link>
      </h1>
    </footer>
  );
}