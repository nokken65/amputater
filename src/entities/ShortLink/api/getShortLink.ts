import { keysToCamel } from '@/shared/utils/keysToCamel';

import { ShortLinkResponse } from '../model/model';

export const getShortLink = async (
  link: string,
): Promise<ShortLinkResponse> => {
  try {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
    const data = keysToCamel(await res.json()) as ShortLinkResponse;

    return data;
  } catch (err) {
    const error = err as Error;

    return { ok: false, error: error.message };
  }
};
