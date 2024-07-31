import { useRouter } from 'next/navigation';
import { buttonName } from '@/app/_const/buttonAndAnchorName';

export const ToWordRegisterNonShadowButton = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="c-button__to-word-register--non-shadow">
      <button type="button" onClick={() => router.push('/settings/registration')}>{ buttonName.wordRegister }</button>
    </div>
  )
}