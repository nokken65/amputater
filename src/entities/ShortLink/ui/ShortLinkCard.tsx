import { Link } from 'atomic-router-react';
import { memo, ReactNode } from 'react';

import { DnDIcon, StatsIcon } from '@/shared/icons';
import { ShortLink } from '@/shared/types';
import { Button, Heading } from '@/shared/ui';

type ShortLinkCardProps = Pick<
  ShortLink,
  'label' | 'url' | 'fullUrl' | 'original' | 'clicks'
> & {
  actionsNodes?: ReactNode;
};

const ShortLinkCardView = ({
  label,
  url,
  fullUrl,
  original,
  clicks,
  actionsNodes,
}: ShortLinkCardProps) => {
  return (
    <div className='flex w-full items-center justify-between gap-4 rounded-xl bg-white px-4 py-4 drop-shadow dark:bg-gray-400'>
      <div className='flex w-8 justify-center'>
        <DnDIcon className='h-fit w-4 text-gray-200' />
      </div>
      <div className='flex w-full flex-col gap-2 overflow-hidden'>
        <Heading type='h3'>{label}</Heading>
        <Link
          className='text-xl font-bold text-primary hover:underline'
          target='_blank'
          to={fullUrl}
        >
          {url}
        </Link>
        <Link target='_blank' to={original}>
          <p className='overflow-hidden overflow-ellipsis whitespace-nowrap text-gray-200 hover:text-gray dark:hover:text-white'>
            <span className='mr-2 rounded-full bg-primary px-2 py-0.5 text-sm font-bold text-white'>
              origin
            </span>
            {original}
          </p>
        </Link>
      </div>
      <Button
        className='flex items-center gap-2 text-lg font-bold text-gray-200'
        type='ghost'
      >
        <span>{clicks}</span>
        <StatsIcon className='h-4 w-fit' />
      </Button>
      {actionsNodes}
    </div>
  );
};

export const ShortLinkCard = memo(ShortLinkCardView);
