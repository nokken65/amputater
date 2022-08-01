import * as createProfileForm from './createProfileForm';
import * as createProfile from './createProfile';

export const forms = {
  ...createProfileForm,
};

export const selectors = {};

export const events = {};

export const effects = {
  ...createProfile.effects,
};
