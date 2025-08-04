"use client";

import { useRouter } from 'next/navigation';
import { buttonName } from '../../../../_const/buttonAndAnchorName';

export const BundleRegisterButton = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="c-button__bundle-register u-position-flex-center">
      <button
        type="button"
        className="u-my-24"
        onClick={() => router.push('/settings')}>{ buttonName.register }
      </button>
    </div>
  )
}