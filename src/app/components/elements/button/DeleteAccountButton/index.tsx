import { useRouter } from 'next/navigation';
import { buttonName } from '@/app/_const/buttonAndAnchorName';
import { dialogMessage } from '@/app/_const/dialogMessage';

export const DeleteAccountButton = (): JSX.Element => {
  const router = useRouter();

  const onClickAccountDelete = () => {
    if(confirm(dialogMessage.confirmDeleteAccount)) {
      // TODO: アカウント削除処理
      alert(dialogMessage.alertDeletedAccount);
      router.push('/login');
    }
  }

  return (
    <div className="c-button__delete-account u-position-flex-center">
      <button
        type="button"
        className="u-my-24 u-t-letter-spacing-01"
        onClick={() => onClickAccountDelete()}>{ buttonName.accountDelete }
      </button>
    </div>
  )
}