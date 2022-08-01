import { User } from '@supabase/supabase-js';
import { createEffect, sample } from 'effector';

import { SignInWithEmailParams, supabaseApi } from '@/shared/api';
import { homeRoute } from '@/shared/config/routes';

const signInWithEmailFx = createEffect<SignInWithEmailParams, User>(
  async (props) => {
    const { data, error } = await supabaseApi.auth.signInWithEmail(props);

    if (error || !data) {
      throw error;
    }

    return data;
  },
);

sample({
  clock: signInWithEmailFx.doneData,
  target: homeRoute.open,
});

export const effects = {
  signInWithEmailFx,
};
