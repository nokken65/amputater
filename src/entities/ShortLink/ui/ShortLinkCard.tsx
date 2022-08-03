import { Link } from 'atomic-router-react';
import { memo, ReactNode } from 'react';

import { DnDIcon } from '@/shared/icons';
import { ShortLink } from '@/shared/types';

type ShortLinkCardProps = Pick<ShortLink, 'url' | 'fullUrl' | 'original'> & {
  labelNode: ReactNode;
  actionsNodes?: ReactNode;
};

const ShortLinkCardView = ({
  url,
  fullUrl,
  original,
  labelNode,
  actionsNodes,
}: ShortLinkCardProps) => {
  return (
    <div className='flex w-full items-center justify-between gap-4 rounded-xl bg-white px-4 py-4 drop-shadow dark:bg-slate-700 lg:gap-2 lg:rounded-none lg:px-2'>
      <div className='flex w-8 justify-center'>
        <DnDIcon className='h-fit w-4' />
      </div>
      <div className='flex w-full flex-col gap-2 overflow-hidden'>
        {labelNode}
        <Link
          className='text-xl font-bold text-emerald-500 hover:underline'
          target='_blank'
          to={fullUrl}
        >
          {url}
        </Link>
        <Link target='_blank' to={original}>
          <p className='overflow-hidden overflow-ellipsis whitespace-nowrap hover:underline'>
            <span className='mr-2 rounded-full bg-emerald-500 px-2 py-0.5 text-sm font-bold text-white'>
              origin
            </span>
            {original}
          </p>
        </Link>
      </div>
      {actionsNodes}
    </div>
  );
};

export const ShortLinkCard = memo(ShortLinkCardView);
