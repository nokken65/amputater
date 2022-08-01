import { UserAttributes } from '@supabase/supabase-js';

export type SignInWithEmailInputs = Pick<UserAttributes, 'email' | 'password'>;

export type SignUpWithEmailInputs = Pick<UserAttributes, 'email' | 'password'>;
