import { createClient } from '@supabase/supabase-js';

export const handleRedirect = async (req) => {
  const url = new URL(req.url);
  try {
    const id = url.pathname.slice(1);
    const originalLink = await AMPR_LINKS.get(id);

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const { error } = await supabase.rpc('inc-clicks', { rowId: id });
    if (error) {
      throw Error;
    }

    return Response.redirect(originalLink, 302);
  } catch (error) {
    return new Response('Not Found.', {
      status: 404,
    });
  }
};
