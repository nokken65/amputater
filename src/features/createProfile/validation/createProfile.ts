import { mixed, object, string } from 'yup';

import { Shape } from '@/shared/types';
import { CreateProfileInputs } from '../model/model';
import { SUPPORTED_IMAGE_FORMATS } from '@/shared/constants';

export const createProfileSchema = object<Shape<CreateProfileInputs>>({
  name: string()
    .max(40, 'Too long!')
    .min(3, 'Too short!')
    .required('Cannot be empty!')
    .trim(),
  avatarFile: mixed()
    .test('fileSize', 'The file is too large', (value: File | null) => {
      if (value) {
        return value.size <= 200000;
      }
      return true;
    })
    .test('fileType', 'The file is not image', (value: File | null) => {
      if (value) {
        return SUPPORTED_IMAGE_FORMATS.includes(value.type);
      }
      return true;
    }),
});
