import { RealtimeSubscription } from '@supabase/supabase-js';

import { supabase } from '@/shared/lib/supabase';
import { ShortLink } from '@/shared/types';

import { GetStatsRealtimeParams } from './models';

export const getStatsRealtime = async ({
  id,
  handleNewStats,
}: GetStatsRealtimeParams): Promise<{
  sub: RealtimeSubscription | null;
  error: Error | null;
}> => {
  try {
    const sub = supabase
      .from<ShortLink>(`links:userId=eq.${id}`)
      .on('*', handleNewStats)
      .subscribe();

    return { sub, error: null };
  } catch (err) {
    const error = err as Error;

    return { sub: null, error };
  }
};
