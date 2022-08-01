import { createStore } from 'effector';

import { ShortLink } from '@/entities/ShortLink';

import { generateShortLinkFx } from './generateShortLinkForm';

const $generatedShortLink = createStore<ShortLink | null>(null).on(
  generateShortLinkFx.doneData,
  (_, payload) => payload,
);

export { $generatedShortLink };
