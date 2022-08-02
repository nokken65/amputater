import { User } from '@supabase/supabase-js';
import { createEffect, sample } from 'effector';

import { SignInWithEmailParams, supabaseApi } from '@/shared/api';
import { linksRoute } from '@/shared/config/routes';

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
  target: linksRoute.open,
});

export const effects = {
  signInWithEmailFx,
};
