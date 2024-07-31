"use client";

import { useRouter } from 'next/navigation';
import { buttonName } from '@/app/_const/buttonAndAnchorName';


export const ToSignupButton = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="c-button__to-signup u-position-flex-center">
      <button
        className="u-my-20"
        onClick={() => router.push('/signup')}>{ buttonName.toSignup }
      </button>
    </div>
  )
}