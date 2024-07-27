import { useRouter } from 'next/navigation';
import { buttonName } from '@/app/_const/buttonAndAnchorName';

export const StartButton = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="button-field c-button__start">
      <button onClick={() => router.push('/study')}>{ buttonName.start }</button>
    </div>
  )
}