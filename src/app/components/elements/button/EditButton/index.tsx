import { buttonName } from '../../../../_const/buttonAndAnchorName';

type Props = {
  wordNumber: number;
  selectWord: string;
}

export const EditButton = (props: Props): JSX.Element => {
  // TODO: onClickで<SelectUpdateOrDeleteDialog wordNumber={wordNumber} selectWord={selectWord} />を画面全体にグラスモーフィズムで表示
  const { wordNumber, selectWord } = props;
  return (
    // ※クラスネームのbutton-fieldは、c-listの分類
    <div className="button-field c-button__edit">
      <button type="button" onClick={() => alert('「更新」「削除」「キャンセル」の作成')}>{ buttonName.edit }</button>
    </div>
  )
}