import { sample } from 'effector';
import { createForm } from 'effector-react-form';

import { createValidator } from '@/shared/lib/Form';

import { updateProfileAvatarSchema } from '../validation';
import { UpdateProfileAvatarInputs } from './model';
import { effects } from './updateProfileAvatar';

const updateProfileAvatarForm = createForm<UpdateProfileAvatarInputs>({
  initialValues: {
    avatarFile: null,
  },
  validate: createValidator(updateProfileAvatarSchema),
});

sample({
  clock: updateProfileAvatarForm.onSubmit,
  filter: ({ values: { avatarFile } }) => !!avatarFile,
  fn: ({ values: { avatarFile } }) => ({ avatarFile }),
  target: effects.updateProfileAvatarFx,
});

export { updateProfileAvatarForm };
