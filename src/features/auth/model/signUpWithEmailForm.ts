import { sample } from 'effector';
import { createForm, Message } from 'effector-react-form';

import { createValidator } from '@/shared/lib/Form';

import { signUpWithEmailSchema } from '../validation';
import { SignUpWithEmailInputs } from './models';
import { effects } from './signUpWithEmail';

const signUpWithEmailForm = createForm<SignUpWithEmailInputs>({
  initialValues: { email: '', password: '' },
  validate: createValidator(signUpWithEmailSchema),
});

sample({
  clock: signUpWithEmailForm.onSubmit,
  fn: (data) => data.values,
  target: effects.signUpWithEmailFx,
});

sample({
  clock: effects.signUpWithEmailFx.fail,
  source: signUpWithEmailForm.$values,
  fn: (values, { error }) => {
    const err: Record<string, Message> = {};
    Object.keys(values).forEach((key) => {
      err[key] = error.message;
    });

    return err;
  },
  target: signUpWithEmailForm.setErrorsInlineState,
});

export { signUpWithEmailForm };
