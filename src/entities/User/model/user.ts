import { User } from '@supabase/supabase-js';
import { createEvent, createStore, sample } from 'effector';

import { homeRoute } from '@/shared/config/routes';
import { supabase } from '@/shared/lib/supabase';

const setUser = createEvent<User | null>();

const $user = createStore<User | null>(supabase.auth.user()).on(
  setUser,
  (_, payload) => payload,
);

const $userId = $user.map((user) => user?.id ?? null);
const $isAuthorized = $user.map((user) => !!user);

$user.watch((state) => console.log('user', state));

export const events = {
  setUser,
};

export const selectors = {
  $user,
  $userId,
  $isAuthorized,
};
