"use client";

import { useRouter } from 'next/navigation';
import HomeIcon24 from '@/app/_asset/icon/home-icon-24.svg';
import { buttonName } from '@/app/_const/buttonAndAnchorName';


export const ToHomeButton = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="c-button__to-home u-position-flex-center">
      <button
        className="u-my-20"
        onClick={() => router.push('/')}>
        <HomeIcon24 /><span className="u-ml-8">{ buttonName.backToHome }</span>
      </button>
    </div>
  )
}