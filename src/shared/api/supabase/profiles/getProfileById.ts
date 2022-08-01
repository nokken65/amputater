import { supabase } from '@/shared/lib/supabase';
import { Profile } from '@/shared/types';

import { GetProfileByIdParams } from './models';

export const getProfileById = async ({
  id,
}: GetProfileByIdParams): Promise<{
  data: Profile | null;
  error: Error | null;
}> => {
  try {
    const { data, error } = await supabase
      .from<Profile>('profiles')
      .select('*')
      .eq('id', id)
      .single();

    return { data, error: error ? new Error(error.message) : null };
  } catch (err) {
    const error = err as Error;

    return { data: null, error };
  }
};
