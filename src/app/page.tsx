"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import ReactPaginate from 'react-paginate';
import HomeIcon40 from '@/app/_asset/icon/home-icon-40.svg';
import GearIcon24 from '@/app/_asset/icon/gear-icon-24.svg';
import { buttonName, anchorName } from '@/app/_const/buttonAndAnchorName';
import { paginateItemsPerPage } from '@/app/_const/paginateItemsPerPage';
import "./page.scss";
// import { NextResponse } from "next/server";

const Home = (): JSX.Element => {
  const flashcardTitles = [
    '英語_動物', '英語_食べ物', '英語_動詞', '数学_公式', '理科_化学式',
    '英語_動物2', '英語_食べ物2', '英語_動詞2', '数学_公式2', '理科_化学式2',
    '英語_動物3', '英語_食べ物3', '英語_動詞3', '数学_公式3', '理科_化学式3',
    '英語_動物4', '英語_食べ物4', '英語_動詞4', '数学_公式4', '理科_化学式4',
    '英語_動物5', '英語_食べ物5', '英語_動詞5', '数学_公式5', '理科_化学式5',
    '英語_動物6', '英語_食べ物6', '英語_動詞6',
  ];

  const [isWordRegisted, setIsWordRegisted] = useState<boolean>(false);
  const isWordRegistedClick = () => setIsWordRegisted((isWordRegistedPrev) => !isWordRegistedPrev);
  // TODO: 単語帳の登録有無の表示処理
  console.log(isWordRegisted);

  const router = useRouter();

  // ページネーション（アイテム番号は0スタート）
  const itemsPerPage = paginateItemsPerPage; // 1ページ毎に表示するアイテム数
  const [itemsOffset, setItemsOffset] = useState(0); // ページ毎の、最初のアイテム番号
  const endOffset = itemsOffset + itemsPerPage; // ページ毎の、最後の配列の添字
  const currentFlashcardTitles = flashcardTitles.slice(itemsOffset, endOffset); // ページ毎の、表示アイテム
  const pageCount = Math.ceil(flashcardTitles.length / itemsPerPage); // 総ページ数
  const handlePageItemClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % flashcardTitles.length; // クリックされたページ番号に伴ったitemsOffsetの更新
    setItemsOffset(newOffset);
  }

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
              {currentFlashcardTitles.map((item, index) => (
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
          <div className="p-pagination u-position-flex-center">
            <ReactPaginate
              pageCount={ pageCount } //総ページ数。
              marginPagesDisplayed={ 2 } //先頭と末尾に表示するページの数。
              pageRangeDisplayed={ 5 } //上記の「今いるページの前後」の番号をいくつ表示させるかを決めます。
              onPageChange={ handlePageItemClick } //ページネーションのリンクをクリックしたときのイベント
              containerClassName='pagination' //ページネーションリンクの親要素(ul要素)のクラス名
              pageClassName='page-item' //各子要素(li要素)のクラス名
              pageLinkClassName='page-link' //ページネーションのリンクのクラス名
              activeClassName='active' //現在のページ番号のクラス名
              previousLabel='<' //前ページ番号に戻すリンクのテキスト
              nextLabel='>' //次ページに進むリンクのテキスト
              previousClassName='page-item' // '<'の親要素(li)のクラス名
              nextClassName='page-item' //'>'の親要素(li)のクラス名
              previousLinkClassName='page-link'  //'<'のリンクのクラス名
              nextLinkClassName='page-link'　//'>'のリンクのクラス名
              disabledClassName='disabled' //先頭 or 末尾に行ったときにそれ以上戻れ(進め)なくするためのクラス
              breakLabel='...' // ページがたくさんあるときに表示しない番号に当たる部分をどう表示するか
              breakClassName='page-item' // 上記の「…」のクラス名
              breakLinkClassName='page-link' // 「…」の中のリンクにつけるクラス
              renderOnZeroPageCount={ null } // 総ページ数が0の場合の呼び出しレンダリング関数
            />
          </div>
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