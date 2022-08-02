import { ShortLink } from '@/shared/types';

import { workerRequest } from './base';
import { DeleteShortLinkParams } from './models';

export const deleteShortLink = async ({
  id,
  token,
}: DeleteShortLinkParams): Promise<{
  data: ShortLink | null;
  error: Error | null;
}> => {
  try {
    const { data, error } = await workerRequest<ShortLink>({
      route: 'links',
      method: 'DELETE',
      body: { id },
      headers: {
        token: token ?? '',
      },
    });

    return { data, error: error ? new Error(error.message) : null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
};
