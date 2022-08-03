import { memo } from 'react';

import { CopyIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

type CopyShortLinkProps = {
  url: string;
  onClick: () => void;
};

const CopyShortLinkView = ({ url, onClick }: CopyShortLinkProps) => {
  return (
    <Button
      className='flex w-fit max-w-full items-center justify-between gap-4 p-4 text-center text-lg font-semibold drop-shadow lg:w-full lg:rounded-none'
      onClick={onClick}
    >
      <p className='w-full overflow-hidden overflow-ellipsis'>{url}</p>
      <CopyIcon className='h-7 w-7 shrink-0' />
    </Button>
  );
};

export const CopyShortLink = memo(CopyShortLinkView);
