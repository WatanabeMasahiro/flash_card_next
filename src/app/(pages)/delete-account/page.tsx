"use client";

import { cardHeaderTitle } from '@/app/_const/card/cardHeaderTitle';
import { cardMessage } from '@/app/_const/card/cardMessage';
import { DeleteAccountButton } from '@/app/components/elements/button/DeleteAccountButton';
import { ToHomeAddBorderButton } from '@/app/components/elements/button/ToHomeAddBorderButton';


const DeleteAccount = (): JSX.Element => {

  return (
    <>
      <main className="l-main">
        <article className="p-card-upper-rounded u-pb-24">
          <div className="p-card-upper-rounded__header">
            <div className="page-icon__bothends-space"></div>
            <div className="page-title page-title--large">
              <h2>{ cardHeaderTitle.deleteAccount }</h2>
            </div>
            <div className="button-side__bothends-space"></div>
          </div>
          <hr className="c-hr" />
          <div className="p-card-upper-rounded__body--margin-32">
            <div className="u-position-flex-center u-mt-24 u-t-bold">
              <p>{ cardMessage.confirmDeleteAccount }</p>
            </div>
            <DeleteAccountButton />
          </div>
          <hr className="c-hr u-mb-16" />
        </article>

        <article className="p-card-lower-rounded u-mt-16">
          <ToHomeAddBorderButton />
        </article>
      </main>
    </>
  );
};

export default DeleteAccount;