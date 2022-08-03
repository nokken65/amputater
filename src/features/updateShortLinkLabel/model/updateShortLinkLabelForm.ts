import { createApi, createStore, sample } from 'effector';
import { createForm } from 'effector-react-form';

import { userModel } from '@/entities/User';
import { createValidator } from '@/shared/lib/Form';

import { updateShortLinkLabelSchema } from '../validation';
import { UpdateShortLinkLabelInputs } from './models';
import { effects } from './updateShortLinkLabel';

const updateShortLinkLabelForm = createForm<UpdateShortLinkLabelInputs>({
  initialValues: { label: '' },
  validate: createValidator(updateShortLinkLabelSchema),
});

const $isOpenId = createStore<string>('');

const { open, close } = createApi($isOpenId, {
  open: (state, id: string) => id,
  close: () => '',
});

sample({
  clock: updateShortLinkLabelForm.onSubmit,
  source: {
    isOpenId: $isOpenId,
    isAuthorized: userModel.selectors.$isAuthorized,
  },
  filter: Boolean,
  fn: ({ isOpenId }, data) => ({ id: isOpenId, ...data.values }),
  target: effects.updateShortLinkLabelFx,
});

sample({
  clock: effects.updateShortLinkLabelFx.doneData,
  fn: ({ id }) => id,
  target: close,
});

export { $isOpenId, close, open, updateShortLinkLabelForm };
