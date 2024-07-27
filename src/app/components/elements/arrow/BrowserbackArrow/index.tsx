import { useRouter } from 'next/navigation';
import ArrowIcon from '@/app/_asset/icon/browserback-arrow.svg';

export const BrowserbackArrow = (): JSX.Element => {
  const router = useRouter();
  
  return (
    <i
      className="c-arrow-browserback"
      onClick={() => router.back()}
    >
      <ArrowIcon />
    </i>
  )
}