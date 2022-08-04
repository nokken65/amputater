import { mixed, object } from 'yup';

import { SUPPORTED_IMAGE_FORMATS } from '@/shared/constants';
import { Shape } from '@/shared/types';

import { UpdateProfileAvatarInputs } from '../model/model';

export const updateProfileAvatarSchema = object<
  Shape<UpdateProfileAvatarInputs>
>({
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
