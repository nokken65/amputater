import { createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';

const toggleDarkMode = createEvent<void>();

const $isDarkMode = createStore<boolean>(false).on(
  toggleDarkMode,
  (state) => !state,
);

sample({
  clock: $isDarkMode,
  fn: () => document.documentElement.classList.toggle('dark'),
  target: [],
});

persist({ store: $isDarkMode, key: 'dark.mode' });

export const events = {
  toggleDarkMode,
};

export const selectors = {
  $isDarkMode,
};
