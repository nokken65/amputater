import { supabase } from '@/shared/lib/supabase';
import { ShortLink } from '@/shared/types';

import { UpdateShortLinkLabelParams } from './models';

export const updateShortLinkLabel = async ({
  id,
  label,
}: UpdateShortLinkLabelParams): Promise<{
  data: ShortLink | null;
  error: Error | null;
}> => {
  try {
    const { data, error } = await supabase
      .from<ShortLink>('links')
      .update({ label })
      .eq('id', id)
      .single();

    return { data, error: error ? new Error(error.message) : null };
  } catch (err) {
    const error = err as Error;

    return { data: null, error };
  }
};
