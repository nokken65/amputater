import { handleAddLink } from './handleAddLink';
import { handleDeleteLink } from './handleDeleteLink';

import { handleOptions } from './handleOptions';
import { handleRedirect } from './handleRedirect';

addEventListener('fetch', (event) => {
  const { request } = event;
  const { url } = request;

  if (request.method === 'OPTIONS') {
    return event.respondWith(handleOptions(request));
  }
  if (request.method === 'POST' && url.includes('/links')) {
    return event.respondWith(handleAddLink(request));
  }
  if (request.method === 'DELETE' && url.includes('/links')) {
    return event.respondWith(handleDeleteLink(request));
  }

  return event.respondWith(handleRedirect(request));
});
