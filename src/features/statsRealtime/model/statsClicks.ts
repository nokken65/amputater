import { attach, createEffect, createEvent, createStore } from 'effector';

import { userModel } from '@/entities/User';
import { GetShortLinksClicksParams, supabaseApi } from '@/shared/api';

const getShortLinksClicksOriginalFx = createEffect<
  GetShortLinksClicksParams,
  number
>(async (props) => {
  const { data, error } = await supabaseApi.stats.getShortLinksClicks(props);

  if (error || !data) {
    throw error;
  }

  return data;
});

const getShortLinksClicksFx = attach({
  effect: getShortLinksClicksOriginalFx,
  source: userModel.selectors.$userId,
  mapParams: (_, id) => ({ id: id ?? '' }),
});

const addClicks = createEvent<number>();
const removeClicks = createEvent<number>();

const $clicks = createStore<number>(0)
  .on(getShortLinksClicksFx.doneData, (_, payload) => payload)
  .on(addClicks, (state, payload) => state + payload)
  .on(removeClicks, (state, payload) => state - payload);

export const effects = {
  getShortLinksClicksFx,
};

export const events = {
  addClicks,
  removeClicks,
};

export const selectors = {
  $clicks,
};
