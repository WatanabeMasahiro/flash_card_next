'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { headerTitle } from '@/app/_const/headerTitle';
import { BrowserbackArrow } from '@/app/components/elements/arrow/BrowserbackArrow';

export const Header = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <header className="l-header">
      <div className="l-header-inner">
        {(pathname !== '/') ? <BrowserbackArrow /> : <div className="l-header-inner__bothends-space"></div>}
        <h1 className="l-header-inner__title">
          <Link href="/">
            { headerTitle.firstSpelling }<span className="l-header-inner__title--fontfamily-niconne">{ headerTitle.lastSpelling }</span>
          </Link>
        </h1>
        <div className="l-header-inner__bothends-space"></div>
      </div>
    </header>
  );
}