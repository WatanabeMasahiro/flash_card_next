"use client";

import { useRouter } from 'next/navigation';
import Link from "next/link";
import HomeIcon24 from '@/app/_asset/icon/home-icon-24.svg';
import { buttonName, anchorName } from '@/app/_const/buttonAndAnchorName';
import { dialogMessage } from '@/app/_const/dialogMessage';
import { cardHeaderTitle } from '@/app/_const/cardHeaderTitle';

const LogInfoChange = (): JSX.Element => {
  const router = useRouter();

  const onClickLogInfoChange = () => {
    // TODO: ユーザー情報変更処理
    alert(dialogMessage.alertLogInfoChange);
  }

  return (
    <>
      <main className="l-main">
        <article className="p-card-upper-rounded u-pb-24">
            <div className="p-card-upper-rounded__header">
              <div className="page-icon__bothends-space"></div>
              <div className="page-title">
                <h2>{ cardHeaderTitle.logInfoChange }</h2>
              </div>
              <div className="button-side__bothends-space"></div>
            </div>
            <hr className="c-hr" />
            <div className="p-card-upper-rounded__body">
              <div>
                <p>ユーザー名<span>※必須</span></p>
                <div>
                  <input type="text"/>
                </div>
                <p>8文字以内で入力してください</p>
              </div>
              <div className="c-button__log-info-change u-position-flex-center">
                <button
                  className="u-my-20"
                  onClick={() => onClickLogInfoChange()}>{ buttonName.logInfoChange }
                </button>
              </div>
            </div>
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

          <article>
          <div className="c-anchor__account-delete u-position-flex-center u-mt-16">
            <Link href="/delete-account">{ anchorName.toDeleteAccount }</Link>
          </div>
        </article>

        {/* TODO: 「ページ上部へ戻る」ボタンの実装 */}
      </main>
    </>
  );
};

export default LogInfoChange;