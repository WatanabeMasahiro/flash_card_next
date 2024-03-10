'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { BrowserbackArrow } from '@/app/components/elements/arrow/BrowserbackArrow'

export function Header() {
  const pathname = usePathname();

  return (
    <header className="l-header">
      <div className="l-header__inner">
        {(pathname === '/') || <BrowserbackArrow />}
        <h1 className="l-header__title">
          <Link href="/">
            単語帳<span className="l-header__title--fontfamily-niconne">_fc</span>
          </Link>
        </h1>
      </div>
    </header>
  );
}
