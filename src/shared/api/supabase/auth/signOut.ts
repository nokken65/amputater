import { supabase } from '@/shared/lib/supabase';

export const signOut = async (): Promise<{ error: Error | null }> => {
  try {
    const { error } = await supabase.auth.signOut();

    return { error: error ? new Error(error.message) : null };
  } catch (err) {
    const error = err as Error;

    return { error };
  }
};
