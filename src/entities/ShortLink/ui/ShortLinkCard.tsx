import { Link } from 'atomic-router-react';
import { memo, ReactNode } from 'react';

import { ShortLink } from '@/shared/types';

type ShortLinkCardProps = Pick<ShortLink, 'url' | 'fullUrl' | 'original'> & {
  dndNode: ReactNode;
  labelNode: ReactNode;
  actionsNodes?: ReactNode;
};

const ShortLinkCardView = ({
  url,
  fullUrl,
  original,
  dndNode,
  labelNode,
  actionsNodes,
}: ShortLinkCardProps) => {
  return (
    <div className='flex w-full items-center justify-between rounded-xl bg-white pr-4 drop-shadow dark:bg-slate-700 lg:rounded-none lg:pr-2'>
      {dndNode}
      <div className='mr-4 flex w-full flex-col gap-2 overflow-hidden py-4 lg:mr-2'>
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
