import { formConst } from '@/app/_const/form';
import { cardHeaderTitle } from '../../../_const/card/cardHeaderTitle';
import { InputTypeText } from  '@/app/components/elements/input/type/text';
import { InputTypeEmail } from '../../../components/elements/input/type/email/index';
import { InputTypePassword } from '../../../components/elements/input/type/password/index';
import { InputTypeCheckbox } from '../../../components/elements/input/type/checkbox/index';
import { LoginButton } from '../../../components/elements/button/LoginButton/index';
import { ToSignupButton } from '../../../components/elements/button/ToSignupButton/index';

const Login = (): JSX.Element => {
  return (
    <>
      <main className="l-main">
        <article className="p-card-upper-rounded">
          <div className="p-card-upper-rounded__header">
            <div className="page-icon__bothends-space"></div>
            <div className="page-title page-title--large">
              <h2>{ cardHeaderTitle.login }</h2>
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
              <InputTypeCheckbox 
                title={formConst.title.rememberMe}
              />
              <LoginButton />

            </form>
          </div>
        </article>

        <article className="p-card-lower-rounded u-mt-16 u-mb-32">
          <ToSignupButton />
        </article>

      </main>
    </>
  );
};

export default Login;