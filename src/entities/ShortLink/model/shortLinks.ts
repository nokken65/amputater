import { createEffect, createStore, sample } from 'effector';

import { userModel } from '@/entities/User';
import { GetAllShortLinksParams, supabaseApi } from '@/shared/api';
import { linksRoute } from '@/shared/config/routes';
import { ShortLink } from '@/shared/types';

const getAllShortLinksFx = createEffect<GetAllShortLinksParams, ShortLink[]>(
  async (props) => {
    const { data, error } = await supabaseApi.links.getAllShortLinks(props);

    if (error || !data) {
      throw error;
    }

    return data;
  },
);

const $shortLinks = createStore<ShortLink[]>([]).on(
  getAllShortLinksFx.doneData,
  (_, payload) => payload,
);

const $shortLinksIsLoading = getAllShortLinksFx.pending;
const $shortLinksIsEmpty = $shortLinks.map((links) => !links.length);

sample({
  clock: [linksRoute.opened],
  source: userModel.selectors.$userId,
  filter: Boolean,
  fn: (userId) => ({ userId }),
  target: getAllShortLinksFx,
});

export const effects = {
  getAllShortLinksFx,
};

export const events = {};

export const selectors = {
  $shortLinks,
  $shortLinksIsLoading,
  $shortLinksIsEmpty,
};
