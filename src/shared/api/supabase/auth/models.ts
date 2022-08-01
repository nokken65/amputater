import { UserAttributes } from '@supabase/supabase-js';

export type SignInWithEmailParams = Pick<UserAttributes, 'email' | 'password'>;

export type SignUpWithEmailParams = Pick<UserAttributes, 'email' | 'password'>;
