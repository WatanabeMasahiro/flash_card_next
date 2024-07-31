import { DoneDeleteDialog } from '../DoneDeleteDialog/index';

export const SelectUpdateOrDeleteDialog = (): JSX.Element => {

  return (
    <>
      <article className="p-card-dialog u-mt-16">
        <div className="">仮）「英語_動物」について</div>
        <div className="button-field">
          <button className="">変更</button>
          <button className="">削除</button>
          <div className="">
          <button className="button-field__cancel">キャンセル</button>
          </div>
        </div>
      </article>

      <DoneDeleteDialog />
    </>
  )
}