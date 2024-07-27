import Link from 'next/link';
import { anchorName } from '@/app/_const/buttonAndAnchorName';

export const LoginInfoChangeAnchor = (): JSX.Element => {

  return (
    <div className="c-anchor__login-info-change u-position-flex-center u-my-16">
      <Link href="/log-info-change">{ anchorName.toLogInfoChange }</Link>
    </div>
  )
}