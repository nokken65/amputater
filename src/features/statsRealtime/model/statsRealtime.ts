import { RealtimeSubscription } from '@supabase/supabase-js';
import { attach, createEffect, createEvent, createStore } from 'effector';

import { userModel } from '@/entities/User';
import { GetStatsRealtimeParams, supabaseApi } from '@/shared/api';
import { supabase } from '@/shared/lib/supabase';

import { events as clicksEvents } from './statsClicks';
import { events as countEvents } from './statsCount';

const getStatsRealtimeOriginalFx = createEffect<
  Omit<GetStatsRealtimeParams, 'handleNewStats'>,
  RealtimeSubscription
>(async ({ id }) => {
  const { sub, error } = await supabaseApi.stats.getStatsRealtime({
    id,
    handleNewStats: (payload) => {
      switch (payload.eventType) {
        case 'INSERT':
          clicksEvents.addClicks(payload.new.clicks);
          countEvents.addCount(1);
          break;
        case 'DELETE':
          clicksEvents.removeClicks(payload.old.clicks);
          countEvents.removeCount(1);
          break;
        case 'UPDATE':
          clicksEvents.addClicks(payload.new.clicks - payload.old.clicks);
          break;
        default:
          break;
      }
    },
  });

  if (error || !sub) {
    throw error;
  }

  return sub;
});

const getStatsRealtimeFx = attach({
  effect: getStatsRealtimeOriginalFx,
  source: userModel.selectors.$userId,
  mapParams: (_, id) => ({ id: id ?? '' }),
});

const unsubscribeStatsRealtimeListener = createEvent();

const $statsRealtimeListener = createStore<RealtimeSubscription | null>(null)
  .on(getStatsRealtimeFx.doneData, (_, payload) => payload)
  .on(unsubscribeStatsRealtimeListener, (state) => {
    if (state) {
      supabase.removeSubscription(state);
    }

    return null;
  });

export const effects = {
  getStatsRealtimeFx,
};

export const selectors = {
  $statsRealtimeListener,
};
