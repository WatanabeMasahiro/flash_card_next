type Props = {
  title: string;
}

export const InputTypeCheckbox = (props: Props): JSX.Element => {
  const { title } = props;

  return (
    <>
      <div className="u-mt-16">
        <div className="c-form__input">
          <input id="checkbox-form" type="checkbox"/>
          <label htmlFor="checkbox-form"><span className="checkmark"></span>{ title }</label>
        </div>
      </div>
    </>
  );
}