import { createClient, SupabaseClientOptions } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const options: SupabaseClientOptions = {
  schema: 'public',
  headers: { 'x-my-custom-header': 'my-app-name' },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  shouldThrowOnError: false,
};

const supabase = createClient(supabaseUrl, supabaseAnonKey, options);

export { supabase };
