import { createClient } from '@supabase/supabase-js';
import { deleteLinkFromKV } from './deleteLinkFromKV';

export const handleDeleteLink = async (req) => {
  try {
    const reqData = await req.json();
    if (!reqData) {
      throw Error;
    }
    const token = req.headers.get('token');
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    supabase.auth.setAuth(token);

    const { data, error } = await supabase
      .from('links')
      .delete()
      .eq('id', reqData.id)
      .single();

    if (error || !data) {
      throw error ?? Error;
    }

    const err = await deleteLinkFromKV(reqData.id);

    if (err) {
      throw err;
    }

    const response = new Response(JSON.stringify({ data, error: null }), {
      status: 200,
    });
    response.headers.set(
      'Access-Control-Allow-Origin',
      new URL(req.headers.get('origin')),
    );

    return response;
  } catch (error) {
    const response = new Response(
      JSON.stringify({
        data: null,
        error: new Error(new Error('Worker: while deleting link.')),
      }),
      {
        status: 500,
      },
    );
    response.headers.set(
      'Access-Control-Allow-Origin',
      new URL(req.headers.get('origin')),
    );
    return response;
  }
};
