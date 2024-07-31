type Props = {
  title: string;
  required: string | undefined;
  validation: string;
}

export const InputTypePassword = (props: Props): JSX.Element => {
  const { title, required, validation } = props;

  return (
    <>
      <div className="u-mt-16">
        <div className="c-form__title">
          <label htmlFor="password-form">{ title }</label>
          <span className="required">{ required }</span>
        </div>
        <div className="c-form__input">
          <input id="password-form" type="password"/>
        </div>
        <div className="c-form__validation">
          <p>{ validation }</p>
        </div>
      </div>
    </>
  );
}