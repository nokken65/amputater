import { supabase } from '@/shared/lib/supabase';
import { ShortLink } from '@/shared/types';

import { GetShortLinksClicksParams } from './models';

export const getShortLinksClicks = async ({
  id,
}: GetShortLinksClicksParams): Promise<{
  data: number | null;
  error: Error | null;
}> => {
  try {
    const { data, error } = await supabase
      .from<ShortLink>('links')
      .select('clicks')
      .eq('userId', id);

    if (!data || error) {
      return { data: null, error: error ? new Error(error.message) : null };
    }

    return {
      data: data.reduce((acc, item) => acc + item.clicks, 0),
      error: null,
    };
  } catch (err) {
    const error = err as Error;

    return { data: null, error };
  }
};
