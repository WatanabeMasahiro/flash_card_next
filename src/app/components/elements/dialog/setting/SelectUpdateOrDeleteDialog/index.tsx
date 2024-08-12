import { DoneDeleteDialog } from '../DoneDeleteDialog/index';

export const SelectUpdateOrDeleteDialog = (): JSX.Element => {

  return (
    <>
      <article className="p-card-dialog u-mt-16">
        <div className="p-card-dialog__title u-pt-48"><span className="select-word">「英語_動物」</span>について</div>
        <div className="c-button-field">
          <div className="c-button-field__inner u-my-24">
            <div className="c-button__update">
              <button type="button">更新</button>
            </div>
            <div className="c-button__delete">
              <button type="button">削除</button>
            </div>
          </div>
          <div className="c-button-field__inner u-pb-16">
            <div className="c-button__cancel">
              <button type="button">キャンセル</button>
            </div>
          </div>
        </div>
      </article>

      <DoneDeleteDialog />
    </>
  )
}