import { supabase } from '@/shared/lib/supabase';
import { ShortLink } from '@/shared/types';

import { GetShortLinksCountParams } from './models';

export const getShortLinksCount = async ({
  id,
}: GetShortLinksCountParams): Promise<{
  data: number | null;
  error: Error | null;
}> => {
  try {
    const { count, error } = await supabase
      .from<ShortLink>('links')
      .select('*', { count: 'exact' })
      .eq('userId', id);

    return { data: count, error: error ? new Error(error.message) : null };
  } catch (err) {
    const error = err as Error;

    return { data: null, error };
  }
};
