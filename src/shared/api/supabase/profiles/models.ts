import { User } from '@supabase/supabase-js';

export type GetProfileByIdParams = Pick<User, 'id'>;
