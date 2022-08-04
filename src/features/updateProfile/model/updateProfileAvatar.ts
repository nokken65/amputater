import { attach, createEffect, sample } from 'effector';

import { userModel } from '@/entities/User';
import { supabaseApi, UpdateProfileAvatarParams } from '@/shared/api';
import { Profile } from '@/shared/types';

const updateProfileAvatarOriginalFx = createEffect<
  UpdateProfileAvatarParams,
  Profile
>(async (props) => {
  const { data, error } = await supabaseApi.profiles.updateProfileAvatar(props);

  if (error || !data) {
    throw error;
  }

  return data;
});

const updateProfileAvatarFx = attach({
  effect: updateProfileAvatarOriginalFx,
  source: userModel.selectors.$userId,
  mapParams: (params: Omit<UpdateProfileAvatarParams, 'id'>, id) => ({
    ...params,
    id: id ?? '',
  }),
});

sample({
  clock: updateProfileAvatarFx.doneData,
  fn: (profile) => ({ id: profile.id }),
  target: userModel.effects.getProfileByIdFx,
});

export const effects = {
  updateProfileAvatarFx,
};
