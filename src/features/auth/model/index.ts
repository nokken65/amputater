import * as signInWithEmail from './signInWithEmail';
import * as signInWithEmailForm from './signInWithEmailForm';
import * as signUpWithEmail from './signUpWithEmail';
import * as signUpWithEmailForm from './signUpWithEmailForm';

export const forms = {
  ...signInWithEmailForm,
  ...signUpWithEmailForm,
};

export const selectors = {};

export const events = {};

export const effects = {
  ...signInWithEmail.effects,
  ...signUpWithEmail.effects,
};
