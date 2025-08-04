import { formConst } from '../../../_const/form/index';
import { cardHeaderTitle } from '../../../_const/card/cardHeaderTitle';
import { InputTypeText } from  '../../../components/elements/input/type/text/index';
import { InputTypeEmail } from '../../../components/elements/input/type/email/index';
import { InputTypePassword } from '../../../components/elements/input/type/password/index';
import { UserRegisterButton } from '../../../components/elements/button/UserRegisterButton/index';
import { ToHomeButton } from '../../../components/elements/button/ToHomeButton/index';

const Signup = (): JSX.Element => {
  return (
    <>
      <main className="l-main">
        <article className="p-card-upper-rounded">
          <div className="p-card-upper-rounded__header">
            <div className="page-icon__bothends-space"></div>
            <div className="page-title page-title--medium">
              <h2>{ cardHeaderTitle.signup }</h2>
            </div>
            <div className="button-side__bothends-space"></div>
          </div>
          <hr className="c-hr" />
          <div className="p-card-upper-rounded__body--margin-16">
            <form className="c-form">
              <InputTypeText 
                title={formConst.title.userName}
                required={formConst.required}
                validation={formConst.validation.lessThanOrEqualTo8}
              />
              <InputTypeEmail 
                title={formConst.title.email}
                required={formConst.required}
                validation={formConst.validation.emailFormat}
              />
              <InputTypePassword 
                title={formConst.title.password}
                required={formConst.required}
                validation={formConst.validation.least8AlphanumericCharacters}
              />
              <UserRegisterButton />

            </form>
          </div>
        </article>

        <article className="p-card-lower-rounded u-mt-16 u-mb-32">
          <ToHomeButton />
        </article>

      </main>
    </>
  );
};

export default Signup;