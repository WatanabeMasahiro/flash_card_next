"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import GearIcon40 from '@/app/_asset/icon/gear-icon-40.svg';
import HomeIcon24 from '@/app/_asset/icon/home-icon-24.svg';
import { buttonName } from '@/app/_const/buttonAndAnchorName'

const Settings = (): JSX.Element => {
  const flashcardTitle = ['英語_動物', '英語_食べ物', '英語_動詞', '数学_公式', '理科_化学式'];

  const [isWordRegisted, setIsWordRegisted] = useState(false);

  const router = useRouter();

  return (
    <>
      <main className="l-main">
        <article className="p-card-upper-rounded u-pb-25">
          <div className="p-card-upper-rounded__header">
            <GearIcon40 />
            <div className="c-button__word-register-non-shadow">
              <button onClick={() => router.push('/settings/registration')}>{ buttonName.wordRegister }</button>
            </div>
          </div>
          <hr className="c-hr" />
          <div className="p-card-upper-rounded__body">
            <div className="c-list">
              <ul className="c-list-flashcard">
              {flashcardTitle.map((item, index) => (
                <li className="c-list-flashcard__item" key={index}>
                  <div className="u-position-flex-between">
                    <h2 className="title u-t-bold">{item}</h2>
                    <div className="button-field c-button__edit">
                      <button onClick={() => alert('「更新」「削除」「キャンセル」の作成')}>{ buttonName.edit }</button>
                    </div>
                  </div>
                  <hr className="c-hr--inner" />
                </li>
              ))}
              </ul>
            </div>
          </div>
          <hr className="c-hr u-mb-25" />
          {isWordRegisted || 
          <div className="pagination u-position-flex-center">ここにページネーション</div>
          }
        </article>

        <article className="p-card-lower-rounded u-mt-16">
          <div className="c-button__back-to-home u-position-flex-center">
            <button className="u-my-24" onClick={() => router.push('/')}>
              <HomeIcon24 /><span className="u-ml-8">{ buttonName.backToHome }</span>
            </button>
          </div>
        </article>

      </main>
    </>
  );
};

export default Settings;