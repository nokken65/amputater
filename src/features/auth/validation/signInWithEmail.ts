import { object, string } from 'yup';

import { Shape } from '@/shared/types';

import { SignInWithEmailInputs } from '../model/models';

export const signInWithEmailSchema = object<Shape<SignInWithEmailInputs>>({
  email: string()
    .max(40, 'Too long!')
    .email('Not correct email')
    .required('Cannot be empty!')
    .trim(),
  password: string()
    .max(40, 'Too long!')
    .min(8, 'Too short!')
    .required('Cannot be empty!'),
});
