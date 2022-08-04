import { createApi, createEffect, createStore, sample } from 'effector';

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

const $isDeletingIds = createStore<string[]>([]);

const { add, remove } = createApi($isDeletingIds, {
  add: (state, id: string) => [...state, id],
  remove: (state, id: string) => state.filter((linkId) => linkId !== id),
});

sample({
  clock: add,
  fn: (id) => ({ id }),
  target: deleteShortLinkFx,
});

sample({
  clock: deleteShortLinkFx.doneData,
  fn: ({ id }) => id,
  target: remove,
});

sample({
  clock: deleteShortLinkFx.fail,
  fn: ({ params: { id } }) => id,
  target: remove,
});

shortLinkModel.selectors.$shortLinks.on(
  deleteShortLinkFx.doneData,
  (state, payload) => state.filter(({ id }) => id !== payload.id),
);

export const effects = {
  deleteShortLinkFx,
};

export const events = {
  add,
  remove,
};

export const selectors = {
  $isDeletingIds,
};
