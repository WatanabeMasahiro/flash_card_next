import { buttonName } from '../../../../_const/buttonAndAnchorName';

type Props = {
  wordNumber: number;
  selectWord: string;
}

const onClickDialog = () => {
  console.log();
}

export const EditButton = (props: Props): JSX.Element => {
  // TODO: onClickで<SelectUpdateOrDeleteDialog wordNumber={wordNumber} selectWord={selectWord} />を画面全体にグラスモーフィズムで表示 
  const { wordNumber, selectWord } = props;
  return (
    // ※クラスネームのbutton-fieldは、c-listの分類
    <div className="button-field c-button__edit">
      <button type="button" onClick={() => onClickDialog()}>{ buttonName.edit }</button>
    </div>
  )
}