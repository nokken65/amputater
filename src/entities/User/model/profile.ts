import { createEffect, createStore, sample } from 'effector';

import { GetProfileByIdParams, supabaseApi } from '@/shared/api';
import { router } from '@/shared/lib/atomic-router';
import { Profile } from '@/shared/types';

import { selectors as userSelectors } from './user';

const getProfileByIdFx = createEffect<GetProfileByIdParams, Profile>(
  async (props) => {
    const { data, error } = await supabaseApi.profiles.getProfileById(props);

    if (error || !data) {
      throw error;
    }

    return data;
  },
);

const $profile = createStore<Profile | null>(null).on(
  getProfileByIdFx.doneData,
  (_, payload) => payload,
);

const $hasProfile = $profile.map((is) => !!is);

sample({
  clock: [router.initialized, userSelectors.$userId],
  source: userSelectors.$userId,
  filter: Boolean,
  fn: (id) => ({ id }),
  target: getProfileByIdFx,
});

sample({
  clock: userSelectors.$user,
  filter: (user) => !user,
  fn: () => null,
  target: $profile,
});

$profile.watch((state) => console.log('profile', state));

export const effects = {
  getProfileByIdFx,
};

export const selectors = {
  $profile,
  $hasProfile,
};
