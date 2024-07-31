import { useRouter } from 'next/navigation';
import GearIcon24 from '@/app/_asset/icon/gear-icon-24.svg';
import { buttonName } from '@/app/_const/buttonAndAnchorName';

type Props = {
  isWordRegisted: boolean;
}

export const SettingButton = (props: Props): JSX.Element => {
  const { isWordRegisted } = props;
  const router = useRouter();

  return (
    <div className={`${!isWordRegisted ? 'c-button__setting' : 'c-button__setting--disabled'} u-position-flex-center`}>
      <button
        type="button"
        className="u-my-24"
        disabled={isWordRegisted}
        onClick={() => router.push('/settings')}>
        <GearIcon24 className={isWordRegisted && 'u-t-opacity-05'} /><span className="u-ml-8">{ buttonName.setting }</span>
      </button>
  </div>
  )
}