"use client";

import { formConst } from '@/app/_const/form';
import { dialogMessage } from '@/app/_const/dialogMessage';
import { cardHeaderTitle } from '@/app/_const/card/cardHeaderTitle';
import { InputTypeText } from  '@/app/components/elements/input/type/text';
import { InputTypeEmail } from '../../../components/elements/input/type/email/index';
import { InputTypePassword } from '../../../components/elements/input/type/password/index';
import { LogInfoChangeButton } from '@/app/components/elements/button/LogInfoChangeButton';
import { ToHomeButton } from '../../../components/elements/button/ToHomeButton/index';
import { AccountDeleteAnchor } from '@/app/components/elements/anchor/AccountDeleteAnchor';

const LogInfoChange = (): JSX.Element => {

  const onClickLogInfoChange = () => {
    // TODO: ユーザー情報変更処理
    // TODO: 押下するたびリロードしないようにしたい
    alert(dialogMessage.alertLogInfoChange);
  }

  return (
    <>
      <main className="l-main">
        <article className="p-card-upper-rounded">
          <div className="p-card-upper-rounded__header">
            <div className="page-icon__bothends-space"></div>
            <div className="page-title page-title--medium">
              <h2>{ cardHeaderTitle.logInfoChange }</h2>
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

              <LogInfoChangeButton
                onClickLogInfoChange={() => onClickLogInfoChange()}
              />

            </form>
          </div>
        </article>

        <article className="p-card-lower-rounded u-mt-16">
          <ToHomeButton />
        </article>

        <article>
          <AccountDeleteAnchor />
        </article>

      </main>
    </>
  );
};

export default LogInfoChange;