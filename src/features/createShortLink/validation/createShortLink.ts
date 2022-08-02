import { object, string } from 'yup';

import { Shape } from '@/shared/types';

import { CreateShortLinkInputs } from '../model/models';

export const createShortLinkSchema = object<Shape<CreateShortLinkInputs>>({
  url: string().url('Enter correct link!').required('Cannot be empty!'),
});
