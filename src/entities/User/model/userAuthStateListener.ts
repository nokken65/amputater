import { Subscription } from '@supabase/supabase-js';
import { createEvent, createStore } from 'effector';

import { supabase } from '@/shared/lib/supabase';

import { events as userEvents } from './user';

const subscribeUserAuthStateListener = createEvent();
const unsubscribeUserAuthStateListener = createEvent();

const $userAuthStateListener = createStore<Subscription | null>(null)
  .on(
    subscribeUserAuthStateListener,
    () =>
      supabase.auth.onAuthStateChange((_event, session) => {
        userEvents.setUser(session?.user ?? null);
      }).data,
  )
  .on(unsubscribeUserAuthStateListener, (state) => state?.unsubscribe());

export const events = {
  subscribeUserAuthStateListener,
  unsubscribeUserAuthStateListener,
};

export const selectors = {
  $userAuthStateListener,
};
