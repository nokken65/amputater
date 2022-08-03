import { createEffect } from 'effector';

import { shortLinkModel } from '@/entities/ShortLink';
import { CreateShortLinkParams, workerApi } from '@/shared/api';
import { supabase } from '@/shared/lib/supabase';
import { ShortLink } from '@/shared/types';

const createShortLinkFx = createEffect<
  Omit<CreateShortLinkParams, 'token'>,
  ShortLink
>(async (props) => {
  const token = supabase.auth.session()?.access_token;
  const { data, error } = await workerApi.createShortLink({
    ...props,
    token,
  });

  if (error || !data) {
    throw error;
  }

  return data;
});

const $createShortLinkIsSubmitting = createShortLinkFx.pending;

shortLinkModel.selectors.$shortLinks.on(
  createShortLinkFx.doneData,
  (state, payload) => [payload, ...state],
);

export const effects = {
  createShortLinkFx,
};

export const selectors = {
  $createShortLinkIsSubmitting,
};
