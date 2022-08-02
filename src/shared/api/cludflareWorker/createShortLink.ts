import { ShortLink } from '@/shared/types';

import { workerRequest } from './base';
import { CreateShortLinkParams } from './models';

export const createShortLink = async ({
  url,
  token,
}: CreateShortLinkParams): Promise<{
  data: ShortLink | null;
  error: Error | null;
}> => {
  try {
    const { data, error } = await workerRequest<ShortLink>({
      route: 'links',
      method: 'POST',
      body: { url },
      headers: {
        token: token ?? '',
      },
    });

    return { data, error: error ? new Error(error.message) : null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
};
