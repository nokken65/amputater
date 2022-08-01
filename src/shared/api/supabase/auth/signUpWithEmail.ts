import { User } from '@supabase/supabase-js';

import { supabase } from '@/shared/lib/supabase';

import { SignUpWithEmailParams } from './models';

type SignUpWithEmailProps = SignUpWithEmailParams;

export const signUpWithEmail = async ({
  email,
  password,
}: SignUpWithEmailProps): Promise<{
  data: User | null;
  error: Error | null;
}> => {
  try {
    const { user, error } = await supabase.auth.signUp({ email, password });

    return { data: user, error: error ? new Error(error.message) : null };
  } catch (err) {
    const error = err as Error;

    return { data: null, error };
  }
};
