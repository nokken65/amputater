import { createValidator } from '@/shared/lib/Form';
import { createForm } from 'effector-react-form';
import { createProfileSchema } from '../validation';
import { CreateProfileInputs } from './model';
import { createEvent, sample } from 'effector';
import { effects } from './createProfile';

const createProfileForm = createForm<CreateProfileInputs>({
  initialValues: {
    name: '',
    avatarFile: null,
  },
  validate: createValidator(createProfileSchema),
});

const ef = createEvent<CreateProfileInputs>();

sample({
  clock: createProfileForm.onSubmit,
  fn: (data) => data.values,
  target: effects.createProfileFx,
});

export { createProfileForm };
