import { reflect } from '@effector/reflect';

import { CopyShortLink } from '@/entities/ShortLink';
import { ShortLink } from '@/shared/types';

import { selectors } from '../model';

type CopyCreatedShortLinkProps = {
  link: ShortLink | null;
};

const CopyCreatedShortLinkView = ({ link }: CopyCreatedShortLinkProps) => {
  return link ? <CopyShortLink url={link.url} /> : null;
};

export const CopyCreatedShortLink = reflect({
  view: CopyCreatedShortLinkView,
  bind: {
    link: selectors.$createdShortLinkUrl,
  },
});
