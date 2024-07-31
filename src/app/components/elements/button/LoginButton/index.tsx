"use client";

import { useRouter } from 'next/navigation';
import { buttonName } from '@/app/_const/buttonAndAnchorName';

export const LoginButton = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="c-button__login u-position-flex-center">
      {/* TODO: ログイン情報が正しいかで判別 */}
      <button
        type="button"
        className="u-my-40"
        onClick={() => router.push('/')}>{ buttonName.login }
      </button>
    </div>
  )
}