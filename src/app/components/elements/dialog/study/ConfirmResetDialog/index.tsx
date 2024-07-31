
import { DoneResetDialog } from '../DoneResetDialog/index';

export const ConfirmResetDialog = (): JSX.Element => {

  return (
    <>
      <article className="p-card-dialog u-mt-16">
        <div className="">確認回数をリセットしますか</div>
        <div className="button-field">
          <button className="">はい</button>
          <button className="">いいえ</button>
        </div>
      </article>

      <DoneResetDialog />
    </>
  )
}