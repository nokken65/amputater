import * as createdShortLink from './createdShortLink';
import * as createShortLink from './createShortLink';
import * as createShortLinkForm from './createShortLinkForm';

export const forms = {
  ...createShortLinkForm,
};

export const selectors = {
  ...createShortLink.selectors,
  ...createdShortLink.selectors,
};

export const events = {};

export const effects = {
  ...createShortLink.effects,
};
