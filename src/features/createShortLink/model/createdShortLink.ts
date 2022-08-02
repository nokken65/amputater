import { createStore } from 'effector';

import { router } from '@/shared/lib/atomic-router';
import { ShortLink } from '@/shared/types';

import { effects } from './createShortLink';

const $createdShortLinkUrl = createStore<ShortLink | null>(null)
  .on(effects.createShortLinkFx.doneData, (_, payload) => payload)
  .reset(router.$path);

export const selectors = {
  $createdShortLinkUrl,
};
