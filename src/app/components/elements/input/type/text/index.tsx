type Props = {
  title: string;
  required: string | undefined;
  validation: string;
}

export const InputTypeText = (props: Props): JSX.Element => {
  const { title, required, validation } = props;

  return (
    <>
      <div className="u-mt-16">
        <div className="c-form__title">
          <label htmlFor="user-name">{ title }</label>
          <span className="required">{ required }</span>
        </div>
        <div className="c-form__input">
          <input id="user-name" type="text"/>
        </div>
        <div className="c-form__validation">
          <p>{ validation }</p>
        </div>
      </div>
    </>
  );
}