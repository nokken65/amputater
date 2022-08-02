import { createEffect } from 'effector';

import { shortLinkModel } from '@/entities/ShortLink';
import { DeleteShortLinkParams, workerApi } from '@/shared/api';
import { supabase } from '@/shared/lib/supabase';
import { ShortLink } from '@/shared/types';

const deleteShortLinkFx = createEffect<
  Omit<DeleteShortLinkParams, 'token'>,
  Pick<ShortLink, 'id'>
>(async (props) => {
  const token = supabase.auth.session()?.access_token;
  const { data, error } = await workerApi.deleteShortLink({ ...props, token });

  if (error || !data) {
    throw error;
  }

  return { id: data.id };
});

shortLinkModel.selectors.$shortLinks.on(
  deleteShortLinkFx.doneData,
  (state, payload) => state.filter(({ id }) => id !== payload.id),
);

export const effects = {
  deleteShortLinkFx,
};
