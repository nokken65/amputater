import { memo } from 'react';

import { CopyShortLink } from '@/entities/ShortLink';
import { copyToClipBoard } from '@/shared/utils/copyToClipboard';

const DummyCopyCreatedShortLinkView = () => {
  const url = 'ampr.unknown65182.workers.dev/nBLqhodB9t';

  return (
    <CopyShortLink
      url={url}
      onClick={() => copyToClipBoard(url, () => alert(`copied: ${url}`))}
    />
  );
};

export const DummyCopyCreatedShortLink = memo(DummyCopyCreatedShortLinkView);
