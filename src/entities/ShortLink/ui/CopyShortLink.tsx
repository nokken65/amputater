import clsx from 'clsx';
import { memo } from 'react';

import { CopyIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';
import { copyToClipBoard } from '@/shared/utils/copyToClipboard';

type CopyShortLinkProps = {
  url: string;
  className?: string;
};

const CopyShortLinkView = ({ url, className }: CopyShortLinkProps) => {
  return (
    <Button
      className={clsx(
        'flex w-fit items-center justify-between gap-4 overflow-hidden text-ellipsis p-4 text-center text-lg font-semibold',
        className,
      )}
      onClick={() => copyToClipBoard(url, () => alert(`Text copied: ${url}`))}
    >
      {url}
      <CopyIcon className='h-7 w-7 shrink-0' />
    </Button>
  );
};

export const CopyShortLink = memo(CopyShortLinkView);
