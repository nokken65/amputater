import { sample } from 'effector';
import { createForm } from 'effector-react-form';

import { createValidator } from '@/shared/lib/Form';

import { createShortLinkSchema } from '../validation';
import { effects } from './createShortLink';
import { CreateShortLinkInputs } from './models';

const createShortLinkForm = createForm<CreateShortLinkInputs>({
  initialValues: { url: '' },
  validate: createValidator(createShortLinkSchema),
});

sample({
  clock: createShortLinkForm.onSubmit,
  fn: (data) => data.values,
  target: effects.createShortLinkFx,
});

export { createShortLinkForm };
