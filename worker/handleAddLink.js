import { createClient } from '@supabase/supabase-js';
import { nanoid } from 'nanoid';
import { addLinkToKV } from './addLinkToKV';
const jwt = require('jsonwebtoken');

export const handleAddLink = async (req) => {
  try {
    const reqData = await req.json();
    if (!reqData) {
      throw Error;
    }

    const token = req.headers.get('token');

    if (!token) {
      throw Error;
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    supabase.auth.setAuth(token);

    const decodedToken = jwt.decode(token);

    const id = nanoid(10);

    const label = `Link ${id}`;

    const { hostname, origin } = new URL(req.url);

    const { data, error } = await supabase
      .from('links')
      .insert({
        id,
        userId: decodedToken.sub,
        label,
        url: hostname + '/' + id,
        fullUrl: origin + '/' + id,
        original: reqData.url,
      })
      .single();

    if (error || !data) {
      throw error ?? Error;
    }

    const err = await addLinkToKV(id, reqData.url);
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
        error: new Error('Worker: error while adding link.'),
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
