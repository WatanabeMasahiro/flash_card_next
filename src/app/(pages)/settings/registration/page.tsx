"use client";

import { formConst } from '../../../_const/form/index';
import { InputTypeText } from  '../../../components/elements/input/type/text/index';
import { InputTypeNumber } from '../../../components/elements/input/type/number/index';
import { BundleRegisterButton } from '../../../components/elements/button/BundleRegisterButton/index';

const Registration = (): JSX.Element => {
  return (
    <>
      <main className="l-main">
        <article className="p-card-upper-rounded u-pt-8 u-pb-24">
          <form className="c-form--margin-16">
            <InputTypeText 
              title={formConst.title.bundleName}
              required={formConst.required}
              validation={formConst.validation.lessThanOrEqualTo12}
            />
          </form>
        </article>

        <article className="p-card-lower-rounded u-pt-8 u-pb-24 u-mt-16">
          <form className="c-form--margin-16">
            <InputTypeText 
              title={formConst.title.word}
              required={formConst.required}
              validation={formConst.validation.lessThanOrEqualTo12}
            />
            <InputTypeText 
              title={formConst.title.answer}
              required={formConst.required}
              validation={formConst.validation.lessThanOrEqualTo12}
            />
            <InputTypeNumber 
              title={formConst.title.order}
              required={formConst.required}
              validation={formConst.validation.numberOtherThanRegistration}
            />
          </form>
        </article>

        <article>
          <BundleRegisterButton />
        </article>

      </main>
    </>
  );
};

export default Registration;