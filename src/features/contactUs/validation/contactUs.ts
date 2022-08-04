import { object, string } from 'yup';

import { Shape } from '@/shared/types';

import { ContactUsInputs } from '../model/models';

export const contactUsSchema = object<Shape<ContactUsInputs>>({
  email: string()
    .max(40, 'Too long!')
    .email('Not correct email')
    .required('Cannot be empty!'),
  name: string()
    .min(3, 'Too short!')
    .max(40, 'Too long!')
    .required('Cannot be empty!'),
  message: string()
    .min(10, 'Too short!')
    .max(140, 'Too long!')
    .required('Cannot be empty!'),
});
