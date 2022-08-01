import { object, string } from 'yup';

import { Shape } from '@/shared/types';

import { SignUpWithEmailInputs } from '../model/models';

export const signUpWithEmailSchema = object<Shape<SignUpWithEmailInputs>>({
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
