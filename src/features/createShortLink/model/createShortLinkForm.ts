import { sample } from 'effector';
import { createForm } from 'effector-react-form';

import { userModel } from '@/entities/User';
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
  source: userModel.selectors.$isAuthorized,
  filter: Boolean,
  fn: (_, data) => data.values,
  target: effects.createShortLinkFx,
});

export { createShortLinkForm };
