import { useRouter } from 'next/navigation';
import { buttonName } from '@/app/_const/buttonAndAnchorName';

type Props = {
  isNonShadow: boolean;
}

export const ToWordRegisterButton = (props: Props): JSX.Element => {
  const { isNonShadow } = props;
  const router = useRouter();

  return (
    <div className={`${isNonShadow ? 'c-button__to-word-register--non-shadow' : 'c-button__to-word-register' } u-position-flex-center`}>
      <button
        className="u-my-24"
        onClick={() => router.push('/settings/registration')}>{ buttonName.wordRegister }
      </button>
    </div>
  )
}