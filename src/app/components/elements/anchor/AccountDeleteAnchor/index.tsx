import Link from 'next/link';
import { anchorName } from '@/app/_const/buttonAndAnchorName';

export const AccountDeleteAnchor = (): JSX.Element => {

  return (
    <div className="c-anchor__account-delete u-position-flex-center u-my-16">
      <Link href="/delete-account">{ anchorName.toDeleteAccount }</Link>
    </div>
  )
}