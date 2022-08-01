import { sample } from 'effector';
import { createForm, Message } from 'effector-react-form';

import { createValidator } from '@/shared/lib/Form';

import { signInWithEmailSchema } from '../validation';
import { SignInWithEmailInputs } from './models';
import { effects } from './signInWithEmail';

const signInWithEmailForm = createForm<SignInWithEmailInputs>({
  initialValues: { email: '', password: '' },
  validate: createValidator(signInWithEmailSchema),
});

sample({
  clock: signInWithEmailForm.onSubmit,
  fn: (data) => data.values,
  target: effects.signInWithEmailFx,
});

sample({
  clock: effects.signInWithEmailFx.fail,
  source: signInWithEmailForm.$values,
  fn: (values, { error }) => {
    const err: Record<string, Message> = {};
    Object.keys(values).forEach((key) => {
      err[key] = error.message;
    });

    return err;
  },
  target: signInWithEmailForm.setErrorsInlineState,
});

export { signInWithEmailForm };
