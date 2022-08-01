export type ShortLinkResponse = {
  ok: boolean;
  result?: ShortLink;
  errorCode?: number;
  error?: string;
};

export type ShortLink = {
  code: string;
  shortLink: string;
  fullShortLink: string;
  originalLink: string;
};
