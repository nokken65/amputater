const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,DELETE,OPTIONS',
  'Access-Control-Max-Age': '86400',
};

export const handleOptions = (request) => {
  const { headers } = request;
  if (
    headers.get('Origin') !== null &&
    headers.get('Access-Control-Request-Method') !== null &&
    headers.get('Access-Control-Request-Headers') !== null
  ) {
    const respHeaders = {
      ...corsHeaders,
      'Access-Control-Allow-Headers': request.headers.get(
        'Access-Control-Request-Headers',
      ),
    };

    return new Response(null, {
      headers: respHeaders,
    });
  }

  return new Response(null, {
    headers: {
      Allow: 'GET, HEAD, POST, DELETE, OPTIONS',
    },
  });
};
