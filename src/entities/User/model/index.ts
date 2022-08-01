import * as profile from './profile';
import * as user from './user';
import * as userAuthStateListener from './userAuthStateListener';

export const selectors = {
  ...profile.selectors,
  ...user.selectors,
  ...userAuthStateListener.selectors,
};

export const events = {
  ...user.events,
  ...userAuthStateListener.events,
};

export const effects = {
  ...profile.effects,
};
