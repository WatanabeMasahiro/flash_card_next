import { useRouter } from 'next/navigation';
import ArrowIcon from '@/app/_asset/icon/browserback-arrow.svg';

export function BrowserbackArrow() {
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