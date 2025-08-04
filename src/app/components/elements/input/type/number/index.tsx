type Props = {
  title: string;
  required: string | undefined;
  validation: string;
}

export const InputTypeNumber = (props: Props): JSX.Element => {
  const { title, required, validation } = props;

  return (
    <>
      <div className="u-mt-16">
        <div className="c-form__title">
          <label htmlFor="number-form">{ title }</label>
          <span className="required">{ required }</span>
        </div>
        <div className="c-form__input">
          {/* TODO: 右寄せ・幅半分(Gridで実現！) */}
          <input id="number-form" type="number"/>
        </div>
        <div className="c-form__validation">
          <p>{ validation }</p>
        </div>
      </div>
    </>
  );
}