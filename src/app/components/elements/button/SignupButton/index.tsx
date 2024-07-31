"use client";

import { useRouter } from 'next/navigation';
import { buttonName } from '../../../../_const/buttonAndAnchorName';

export const SignupButton = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="c-button__user-register u-position-flex-center">
      <button
        type="button"
        className="u-my-40"
        onClick={() => router.push('/')}>{ buttonName.userRegister }
      </button>
    </div>
  )
}