import { list, variant } from '@effector/reflect';
import { combine } from 'effector';

import {
  AddNotificationParams,
  notificationModel,
} from '@/entities/Notification';
import { ShortLinkCard, shortLinkModel } from '@/entities/ShortLink';
import { DeleteShortLinkButton } from '@/features/deleteShortLink';
import {
  CopyIcon,
  DnDIcon,
  EmptyIcon,
  LoaderRingIcon,
  StatsIcon,
} from '@/shared/icons';
import { ShortLink } from '@/shared/types';
import { Button } from '@/shared/ui';
import { copyToClipBoard } from '@/shared/utils/copyToClipboard';

import { ShortLinkLabelNode } from './ShortLinkLabelNode';

type ShortLinksItemProps = ShortLink & {
  notify: (props: AddNotificationParams) => void;
};

const ShortLinksItem = ({
  notify,
  url,
  original,
  fullUrl,
  clicks,
  label,
  id,
}: ShortLinksItemProps) => {
  return (
    <li>
      <ShortLinkCard
        actionsNodes={
          <div className='flex items-center gap-2 py-2 lg:flex-col lg:items-end'>
            <Button
              className='flex items-center gap-2 text-lg font-bold'
              type='ghost'
            >
              <span>{clicks}</span>
              <StatsIcon className='h-4 w-fit' />
            </Button>
            <Button
              className='h-10 w-10'
              type='ghost'
              onClick={() =>
                copyToClipBoard(fullUrl, () =>
                  notify({
                    text: `Copied: ${fullUrl}`,
                    type: 'info',
                    duration: 8000,
                  }),
                )
              }
            >
              <CopyIcon className='h-5 w-5' />
            </Button>
            <DeleteShortLinkButton id={id} />
          </div>
        }
        dndNode={
          <div className='flex min-h-[112px] cursor-move items-center px-4'>
            <DnDIcon className='h-fit w-4' />
          </div>
        }
        fullUrl={fullUrl}
        labelNode={<ShortLinkLabelNode id={id} label={label} />}
        original={original}
        url={url}
      />
    </li>
  );
};

const ShortLinksItems = list({
  source: shortLinkModel.selectors.$shortLinks,
  view: ShortLinksItem,
  getKey: ({ id }) => id,
  bind: {
    notify: notificationModel.events.addNotification,
  },
});

const ShortLinksFeedView = () => {
  return (
    <ul className='flex flex-col gap-6'>
      <ShortLinksItems />
    </ul>
  );
};

export const ShortLinksFeed = variant({
  source: combine(
    {
      isLoading: shortLinkModel.selectors.$shortLinksIsLoading,
      isEmpty: shortLinkModel.selectors.$shortLinksIsEmpty,
    },
    ({ isLoading, isEmpty }) => {
      if (isLoading) return 'loading';
      if (isEmpty) return 'empty';

      return 'ready';
    },
  ),
  cases: {
    loading: () => (
      <div className='flex h-full w-full items-center justify-center'>
        <LoaderRingIcon className='h-20 w-20 animate-spin-fast' />
      </div>
    ),
    empty: () => (
      <div className='flex h-full w-full flex-col items-center justify-center gap-4'>
        <EmptyIcon className='h-20 w-20' />
        <p className='text-xl'>Not found any short links :(</p>
      </div>
    ),
    ready: ShortLinksFeedView,
  },
});
