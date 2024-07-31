import { useRouter } from 'next/navigation';
import { buttonName } from '@/app/_const/buttonAndAnchorName';

export const ToWordRegisterButton = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="c-button__to-word-register u-position-flex-center">
      <button
        className="u-my-24"
        onClick={() => router.push('/settings/registration')}>{ buttonName.wordRegister }
      </button>
    </div>
  )
}