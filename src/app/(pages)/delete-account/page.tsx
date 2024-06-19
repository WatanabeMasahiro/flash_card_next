"use client";

import { useRouter } from 'next/navigation';
import HomeIcon24 from '@/app/_asset/icon/home-icon-24.svg';
import { buttonName } from '@/app/_const/buttonAndAnchorName';
import { dialogMessage } from '@/app/_const/dialogMessage';
import { cardHeaderTitle } from '@/app/_const/cardHeaderTitle';
import { cardMessage } from '@/app/_const/cardMessage';

const DeleteAccount = (): JSX.Element => {
  const router = useRouter();

  const onClickAccountDelete = () => {
    if(confirm(dialogMessage.confirmDeleteAccount)) {
      // TODO: アカウント削除処理
      alert(dialogMessage.alertDeletedAccount);
      router.push('/login');
    }
  }

  return (
    <>
      <main className="l-main">
        <article className="p-card-upper-rounded u-pb-24">
          <div className="p-card-upper-rounded__header">
            <div className="page-icon__bothends-space"></div>
            <div className="page-title">
              <h2>{ cardHeaderTitle.deleteAccount }</h2>
            </div>
            <div className="button-side__bothends-space"></div>
          </div>
          <hr className="c-hr" />
          <div className="p-card-upper-rounded__body">
            <div className="u-position-flex-center u-mt-24 u-t-bold">
              <p>{ cardMessage.confirmDeleteAccount }</p>
            </div>
            <div className="c-button__delete-account u-position-flex-center">
              <button
                className="u-my-24 u-t-letter-spacing-01"
                onClick={() => onClickAccountDelete()}>{ buttonName.accountDelete }
              </button>
            </div>
          </div>
          <hr className="c-hr u-mb-16" />
        </article>

        <article className="p-card-lower-rounded u-mt-16">
          <div className="c-button__to-home--add-border u-position-flex-center">
            <button
              className="u-my-20"
              onClick={() => router.push('/')}>
              <HomeIcon24 /><span className="u-ml-8">{ buttonName.backToHome }</span>
            </button>
          </div>
        </article>
      </main>
    </>
  );
};

export default DeleteAccount;