import { userModel } from '@/entities/User';
import { homeRoute } from '@/shared/config/routes';
import { Profile } from '@/shared/types';
import { User } from '@supabase/supabase-js';
import { attach, createEffect, sample } from 'effector';
import { createProfile } from '../api';
import { CreateProfileInputs } from './model';

const createProfileOriginalFx = createEffect<
  CreateProfileInputs & Pick<User, 'id'>,
  Profile
>(async (props) => {
  const { profile, error } = await createProfile(props);

  if (error || !profile) {
    throw new Error(error?.message ?? 'error while creating profile');
  }

  return profile;
});

const createProfileFx = attach({
  effect: createProfileOriginalFx,
  source: userModel.selectors.$userId,
  mapParams: (params: CreateProfileInputs, id) => ({
    ...params,
    id: id ?? '',
  }),
});

sample({
  clock: createProfileFx.doneData,
  target: [userModel.events.setProfile, homeRoute.open],
});

createProfileFx.fail.watch(console.log);

export const effects = {
  createProfileFx,
};
