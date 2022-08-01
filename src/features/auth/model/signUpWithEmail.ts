import { User } from '@supabase/supabase-js';
import { createEffect, sample } from 'effector';

import { SignUpWithEmailParams, supabaseApi } from '@/shared/api';
import { homeRoute } from '@/shared/config/routes';

const signUpWithEmailFx = createEffect<SignUpWithEmailParams, User>(
  async (props) => {
    const { data, error } = await supabaseApi.auth.signUpWithEmail(props);

    if (error || !data) {
      throw error;
    }

    return data;
  },
);

sample({
  clock: signUpWithEmailFx.doneData,
  target: homeRoute.open,
});

export const effects = {
  signUpWithEmailFx,
};
