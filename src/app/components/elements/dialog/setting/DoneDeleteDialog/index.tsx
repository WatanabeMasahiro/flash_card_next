import CloseIcon from '@/app/_asset/icon/close-icon.svg';

export const DoneDeleteDialog = (): JSX.Element => {

  return (
    <article className="p-card-dialog u-mt-16 u-py-60">
      <div className="p-card-dialog__icon c-button__close--icon">
        <button type="button"><CloseIcon /></button>
      </div>
      <div className="p-card-dialog__title">削除しました</div>
      <div className="c-button-field">
        <div className="c-button-field__inner u-mt-36">
          <div className="c-button__close">
            <button type="button">閉じる</button>
          </div>
        </div>
      </div>
    </article>
  )
}