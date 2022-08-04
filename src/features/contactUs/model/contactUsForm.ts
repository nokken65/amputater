import { sample } from 'effector';
import { createForm } from 'effector-react-form';

import { createValidator } from '@/shared/lib/Form';

import { contactUsSchema } from '../validation';
import { effects } from './contactUs';
import { ContactUsInputs } from './models';

const contactUsForm = createForm<ContactUsInputs>({
  initialValues: { email: '', name: '', message: '' },
  validate: createValidator(contactUsSchema),
});

sample({
  clock: contactUsForm.onSubmit,
  filter: Boolean,
  fn: (data) => data.values,
  target: effects.contactUsFx,
});

sample({
  clock: effects.contactUsFx.doneData,
  target: contactUsForm.reset,
});

export { contactUsForm };
