import { supabase } from '@/shared/lib/supabase';
import { Profile } from '@/shared/types';

import { UpdateProfileNameParams } from './models';

export const updateProfileName = async ({
  id,
  name,
}: UpdateProfileNameParams): Promise<{
  data: Profile | null;
  error: Error | null;
}> => {
  try {
    const { data, error } = await supabase
      .from<Profile>('profiles')
      .update({ name })
      .eq('id', id)
      .single();

    return { data, error: error ? new Error(error.message) : null };
  } catch (err) {
    const error = err as Error;

    return { data: null, error };
  }
};
