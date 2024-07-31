"use client";

import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import HomeIcon40 from '@/app/_asset/icon/home-icon-40.svg';
import { paginateItemsPerPage, marginPagesDisplayed, pageRangeDisplayed } from '@/app/_const/pagination';
import { ToWordRegisterButton } from './components/elements/button/ToWordRegisterButton/index';
import { StartButton } from './components/elements/button/StartButton/index';
import { SettingButton } from './components/elements/button/SettingButton/index';
import { LoginInfoChangeAnchor } from './components/elements/anchor/LoginInfoChangeAnchor/index';
import "./page.scss";
// import { NextResponse } from "next/server";

const Home = (): JSX.Element => {
  const flashcardTitles = [
    '英語_動物', '英語_食べ物', '英語_動詞', '数学_公式', '理科_化学式',
    '英語_動物2', '英語_食べ物2', '英語_動詞2', '数学_公式2', '理科_化学式2',
    '英語_動物3', '英語_食べ物3', '英語_動詞3', '数学_公式3', '理科_化学式3',
    '英語_動物4', '英語_食べ物4', '英語_動詞4', '数学_公式4', '理科_化学式4',
    '英語_動物5', '英語_食べ物5', '英語_動詞5', '数学_公式5', '理科_化学式5',
    '英語_動物6', '英語_食べ物6', '英語_動詞6', '数学_公式6', '理科_化学式6',
    '英語_動物7', '英語_食べ物7', '英語_動詞7', '数学_公式7', '理科_化学式7',
    '英語_動物8', '英語_食べ物8', '英語_動詞8', '数学_公式8', '理科_化学式8',
    '英語_動物9', '英語_食べ物9', '英語_動詞9', '数学_公式9', '理科_化学式9',
    '英語_動物10', '英語_食べ物10', '英語_動詞10', '数学_公式10', '理科_化学式10',
    '英語_動物11', '英語_食べ物11', '英語_動詞11', '数学_公式11', '理科_化学式11',
    '英語_動物12', '英語_食べ物12', '英語_動詞12', '数学_公式12', '理科_化学式12',
    '英語_動物13', '英語_食べ物13', '英語_動詞13', '数学_公式13', '理科_化学式13',
    '英語_動物14', '英語_食べ物14', '英語_動詞14', '数学_公式14', '理科_化学式14',
    '英語_動物15', '英語_食べ物15', '英語_動詞15', '数学_公式15', '理科_化学式15',
    '英語_動物16', '英語_食べ物16', '英語_動詞16', '数学_公式16', '理科_化学式16',
    '英語_動物17', '英語_食べ物17', '英語_動詞17', '数学_公式17', '理科_化学式17',
    '英語_動物18', '英語_食べ物18', '英語_動詞18', '数学_公式18', '理科_化学式18',
    '英語_動物19', '英語_食べ物19', '英語_動詞19', '数学_公式19', '理科_化学式19',
    '英語_動物20', '英語_食べ物20', '英語_動詞20', '数学_公式20', '理科_化学式20',
  ];

  // 単語帳の登録有無
  const [isWordRegisted, setIsWordRegisted] = useState<boolean>(false);
  // TODO(削除): 切り替えボタンのメソッド
  const isWordRegistedClick = () => setIsWordRegisted((isWordRegistedPrev) => !isWordRegistedPrev);
  // TODO: 単語帳の登録有無の表示処理
  console.log(isWordRegisted);


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
        <article className="p-card-upper-rounded u-pb-24">
          <div className="p-card-upper-rounded__header">
            <HomeIcon40 />
          </div>
          <hr className="c-hr" />
          <div className="p-card-upper-rounded__body--margin-32">
          {isWordRegisted ? 
            <ToWordRegisterButton />
          :
            <div className="c-list">
              <ul className="c-list-flashcard">
              {currentFlashcardTitles.map((item, index) => (
                <li className="c-list-flashcard__item" key={index}>
                  <div className="u-position-flex-between">
                    <h2 className="title u-t-bold">{item}</h2>
                    <StartButton />
                  </div>
                  <hr className="c-hr--inner" />
                </li>
              ))}
              </ul>
            </div>
          }
          </div>
          
          <hr className="c-hr u-mb-24" />

          {isWordRegisted || 
          <div className="p-pagination u-position-flex-center u-t-bold">
            <ReactPaginate
              pageCount={ pageCount } //総ページ数。
              marginPagesDisplayed={ marginPagesDisplayed } //先頭と末尾に表示するページの数。
              pageRangeDisplayed={ pageRangeDisplayed } //上記の「今いるページの前後」の番号をいくつ表示させるかを決めます。
              onPageChange={ handlePageItemClick } //ページネーションのリンクをクリックしたときのイベント
              containerClassName='ui-item' //ページネーションリンクの親要素(ul要素)のクラス名
              pageClassName='li-item' //各子要素(li要素)のクラス名
              pageLinkClassName='page-link' //ページネーションのリンクのクラス名
              activeClassName='active' //現在のページ番号のクラス名
              previousLabel='<' //前ページ番号に戻すリンクのテキスト
              nextLabel='>' //次ページに進むリンクのテキスト
              previousClassName='prev-li-item' // '<'の親要素(li)のクラス名
              nextClassName='next-li-item' //'>'の親要素(li)のクラス名
              previousLinkClassName='prex-page-link'  //'<'のリンクのクラス名
              nextLinkClassName='next-page-link'　//'>'のリンクのクラス名
              disabledClassName='disabled' //先頭 or 末尾に行ったときにそれ以上戻れ(進め)なくするためのクラス
              breakLabel='...' // ページがたくさんあるときに表示しない番号に当たる部分をどう表示するか
              breakClassName='breaklabel-li-item' // 上記の「…」のクラス名
              breakLinkClassName='breaklabel-page-link' // 「…」の中のリンクにつけるクラス
              renderOnZeroPageCount={ null } // 総ページ数が0の場合の呼び出しレンダリング関数
            />
          </div>
          }
        </article>

        <article className="p-card-lower-rounded u-mt-16">
          <SettingButton 
            isWordRegisted={isWordRegisted}
          />
        </article>

        <article>
          <LoginInfoChangeAnchor />
        </article>

        {/* TODO: 不要になり次第削除。単語登録済か切替るボタン */}
        <div className="c-button__dammy u-position-flex-center">
          <button
            className="u-my-24"
            onClick={() => isWordRegistedClick()}
          >単語登録の切替ボタン</button>
        </div>

      </main>
    </>
  );
}

export default Home;