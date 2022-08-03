import { object, string } from 'yup';

import { Shape } from '@/shared/types';

import { UpdateShortLinkLabelInputs } from '../model/models';

export const updateShortLinkLabelSchema = object<
  Shape<UpdateShortLinkLabelInputs>
>({
  label: string()
    .min(3, 'Too short!')
    .max(30, 'Too long!')
    .required('Cannot be empty!'),
});
