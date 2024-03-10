import { useRouter } from 'next/navigation'
import ArrowIcon from '@/app/_asset/icon/browserback-arrow.svg'

export function BrowserbackArrow() {
  const router = useRouter();
  
  return (
    <i
      className="l-header__browserback--icon"
      onClick={() => router.back()}
    >
      <ArrowIcon />
  </i>
  )
}