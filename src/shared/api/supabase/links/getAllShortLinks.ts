import { supabase } from '@/shared/lib/supabase';
import { ShortLink } from '@/shared/types';

import { GetAllShortLinksParams } from './models';

export const getAllShortLinks = async ({
  userId,
}: GetAllShortLinksParams): Promise<{
  data: ShortLink[] | null;
  error: Error | null;
}> => {
  try {
    const { data, error } = await supabase
      .from<ShortLink>('links')
      .select('*')
      .eq('userId', userId)
      .order('createdAt', { ascending: false });

    return { data, error: error ? new Error(error.message) : null };
  } catch (err) {
    const error = err as Error;

    return { data: null, error };
  }
};
