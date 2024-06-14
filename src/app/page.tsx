"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import HomeIcon40 from '@/app/_asset/icon/home-icon-40.svg';
import GearIcon24 from '@/app/_asset/icon/gear-icon-24.svg';
import { buttonName, anchorName } from '@/app/_const/buttonAndAnchorName'
import "./page.scss";
// import { NextResponse } from "next/server";

const Home = (): JSX.Element => {
  const flashcardTitle = ['英語_動物', '英語_食べ物', '英語_動詞', '数学_公式', '理科_化学式'];

  const [isWordRegisted, setIsWordRegisted] = useState(false);
  const isWordRegistedClick = () => setIsWordRegisted((isWordRegistedPrev) => !isWordRegistedPrev);
  // TODO: 単語帳の登録有無の表示処理
  console.log(isWordRegisted);

  const router = useRouter();


  return (
    <>
      <main className="l-main">
        <article className="p-card-upper-rounded u-pb-25">
          <div className="p-card-upper-rounded__header">
            <HomeIcon40 />
          </div>
          <hr className="c-hr" />
          <div className="p-card-upper-rounded__body">
          {isWordRegisted ? 
            <div className="c-button__word-register u-position-flex-center">
              <button
                className="u-my-24"
                onClick={() => router.push('/settings/registration')}>{ buttonName.wordRegister }
              </button>
            </div>
          :
            <div className="c-list">
              <ul className="c-list-flashcard">
              {flashcardTitle.map((item, index) => (
                <li className="c-list-flashcard__item" key={index}>
                  <div className="u-position-flex-between">
                    <h2 className="title u-t-bold">{item}</h2>
                    <div className="button-field c-button__start">
                      <button className="" onClick={() => router.push('/study')}>スタート</button>
                    </div>
                  </div>
                  <hr className="c-hr--inner" />
                </li>
              ))}
              </ul>
            </div>
          }
          </div>
          <hr className="c-hr u-mb-25" />

          {isWordRegisted || 
          <div className="pagination u-position-flex-center">ここにページネーション</div>
          }
        </article>

        <article className="p-card-lower-rounded u-mt-16">
          <div className={`${!isWordRegisted ? 'c-button__setting' : 'c-button__setting-disabled'} u-position-flex-center`}>
            <button
              className="u-my-24"
              disabled={isWordRegisted}
              onClick={() => router.push('/settings')}>
              <GearIcon24 className={isWordRegisted && 'u-t-opacity-05'} /><span className="u-ml-8">{ buttonName.setting }</span>
            </button>
          </div>
        </article>

        <div className="c-anchor__login-info-change u-position-flex-center u-mt-16">
          <Link href="/log-info-change">{ anchorName.toLogInfoChange }</Link>
        </div>

        {/* TODO: 不要になり次第削除。単語登録済か切替るボタン */}
        <div className="c-button__dammy u-position-flex-center">
          <button
            className="u-my-24"
            onClick={isWordRegistedClick}
          >単語登録の切替ボタン</button>
        </div>


        {/** TODO: 削除
          * <Link className="btn" href="/chat-copy">Chat-copyページへ</Link>
          */}
      </main>
    </>
  );
}

export default Home;