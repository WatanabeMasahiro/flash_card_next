import { buttonName } from '@/app/_const/buttonAndAnchorName';

type Props = {
  onClickLogInfoChange: VoidFunction;
}

export const LogInfoChangeButton = (props: Props): JSX.Element => {
  const { onClickLogInfoChange } = props;

  return (
    <div className="c-button__log-info-change u-position-flex-center">
      <button
        type="button"
        className="u-my-40"
        onClick={() => onClickLogInfoChange()}>{ buttonName.logInfoChange }
      </button>
    </div>
  )
}