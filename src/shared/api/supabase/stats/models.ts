import { SupabaseRealtimePayload } from '@supabase/supabase-js';

import { Profile, ShortLink } from '@/shared/types';

export type GetStatsRealtimeParams = Pick<Profile, 'id'> & {
  handleNewStats: (payload: SupabaseRealtimePayload<ShortLink>) => void;
};
export type GetShortLinksClicksParams = Pick<Profile, 'id'>;
export type GetShortLinksCountParams = Pick<Profile, 'id'>;
