import { createEffect } from 'effector';

import { ContactUsInputs } from './models';

const contactUsFx = createEffect<ContactUsInputs, ContactUsInputs>(
  async (props) => {
    // TODO
    return props;
  },
);

const $contactUsIsSubmitting = contactUsFx.pending;

export const effects = {
  contactUsFx,
};

export const selectors = {
  $contactUsIsSubmitting,
};
