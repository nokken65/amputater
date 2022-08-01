import clsx from 'clsx';
import { memo } from 'react';

import { CopyIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';
import { copyToClipBoard } from '@/shared/utils/copyToClipboard';

type CopyShortLinkProps = {
  text: string;
  className?: string;
};

const CopyShortLinkView = ({ text, className }: CopyShortLinkProps) => {
  return (
    <Button
      className={clsx('flex w-fit items-center justify-between p-4', className)}
      onClick={() => copyToClipBoard(text, () => alert(`Text copied: ${text}`))}
    >
      <p className='w-[532px] overflow-hidden text-ellipsis text-center text-2xl font-semibold '>
        {text}
      </p>
      <CopyIcon className='h-7 w-7 shrink-0' />
    </Button>
  );
};

export const CopyShortLink = memo(CopyShortLinkView);
