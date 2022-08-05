import { attach, createEffect, createEvent, createStore } from 'effector';

import { userModel } from '@/entities/User';
import { GetShortLinksCountParams, supabaseApi } from '@/shared/api';

const getShortLinksCountOriginalFx = createEffect<
  GetShortLinksCountParams,
  number
>(async (props) => {
  const { data, error } = await supabaseApi.stats.getShortLinksCount(props);

  if (error || !data) {
    throw error;
  }

  return data;
});

const getShortLinksCountFx = attach({
  effect: getShortLinksCountOriginalFx,
  source: userModel.selectors.$userId,
  mapParams: (_, id) => ({ id: id ?? '' }),
});

const addCount = createEvent<number>();
const removeCount = createEvent<number>();

const $count = createStore<number>(0)
  .on(getShortLinksCountFx.doneData, (_, payload) => payload)
  .on(addCount, (state, payload) => state + payload)
  .on(removeCount, (state, payload) => state - payload);

export const effects = {
  getShortLinksCountFx,
};

export const events = {
  addCount,
  removeCount,
};

export const selectors = {
  $count,
};
