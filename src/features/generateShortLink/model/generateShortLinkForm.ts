import { createEffect, sample } from 'effector';
import { createForm } from 'effector-react-form';

import { ShortLink, shortLinkApi } from '@/entities/ShortLink';
import { createValidator } from '@/shared/lib/Form';

import { generateShortLinkSchema } from '../validation';
import { GenerateShortLinkFormValues } from './model';

const generateShortLinkFx = createEffect<
  GenerateShortLinkFormValues,
  ShortLink
>(async ({ link }) => {
  const { result, error } = await shortLinkApi.getShortLink(link);

  if (!result || error) {
    throw new Error(error);
  } else {
    return result;
  }
});

const $generateShortLinkLoading = generateShortLinkFx.pending;

const generateShortLinkForm = createForm<GenerateShortLinkFormValues>({
  initialValues: { link: '' },
  validate: createValidator(generateShortLinkSchema),
});

sample({
  clock: generateShortLinkForm.onSubmit,
  fn: (data) => data.values,
  target: generateShortLinkFx,
});

generateShortLinkFx.fail.watch(({ error, params }) => {
  console.log(error, params);
});
// generateShortLinkForm.$errorsInline.watch(console.log);

export {
  $generateShortLinkLoading,
  generateShortLinkForm,
  generateShortLinkFx,
};
