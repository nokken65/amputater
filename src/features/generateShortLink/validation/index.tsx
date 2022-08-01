import { object, string } from 'yup';

import { Shape } from '@/shared/types';

import { GenerateShortLinkFormValues } from '../model/model';

export const generateShortLinkSchema = object<
  Shape<GenerateShortLinkFormValues>
>({
  link: string().url('Enter correct link!').required('Cannot be empty!'),
});
