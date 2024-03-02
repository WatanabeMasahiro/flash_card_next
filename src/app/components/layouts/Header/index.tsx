import Link from "next/link";

export function Header(props:any) {
  const { children, tester } = props;

  return (
    <header className="headerArea">
      <h1 className="headerText">
        <Link href="/">
          Next.jsの勉強({tester})
        </Link>
      </h1>
      <p>{children}</p>
    </header>
  );
}
