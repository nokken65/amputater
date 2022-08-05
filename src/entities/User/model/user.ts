import { User } from '@supabase/supabase-js';
import { createEvent, createStore } from 'effector';

import { supabase } from '@/shared/lib/supabase';

const setUser = createEvent<User | null>();

const $user = createStore<User | null>(supabase.auth.user()).on(
  setUser,
  (_, payload) => payload,
);

const $userId = $user.map((user) => user?.id ?? null);
const $isAuthorized = $user.map((user) => !!user);

export const events = {
  setUser,
};

export const selectors = {
  $user,
  $userId,
  $isAuthorized,
};
