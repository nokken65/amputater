import { User } from '@supabase/supabase-js';

import { supabase } from '@/shared/lib/supabase';

import { SignInWithEmailParams } from './models';

type SignInWithEmailProps = SignInWithEmailParams;

export const signInWithEmail = async ({
  email,
  password,
}: SignInWithEmailProps): Promise<{
  data: User | null;
  error: Error | null;
}> => {
  try {
    const { user, error } = await supabase.auth.signIn({ email, password });

    return { data: user, error: error ? new Error(error.message) : null };
  } catch (err) {
    const error = err as Error;

    return { data: null, error };
  }
};
