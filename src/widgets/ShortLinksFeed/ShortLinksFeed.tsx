import { list, variant } from '@effector/reflect';
import { combine } from 'effector';

import {
  ShortLinkCard,
  ShortLinkLabel,
  shortLinkModel,
} from '@/entities/ShortLink';
import { DeleteShortLinkButton } from '@/features/deleteShortLink';
import {
  UpdateShortLinkLabelForm,
  updateShortLinkLabelModel,
} from '@/features/updateShortLinkLabel';
import {
  CopyIcon,
  EditIcon,
  EmptyIcon,
  LoaderRingIcon,
  StatsIcon,
} from '@/shared/icons';
import { ShortLink } from '@/shared/types';
import { Button } from '@/shared/ui';
import { copyToClipBoard } from '@/shared/utils/copyToClipboard';

type ShortLinksItemProps = ShortLink & {
  isEdittingLabelShortLink: string;
  openLabelForm: (id: string) => void;
  closeLabelForm: () => void;
};

const ShortLinksItem = ({
  isEdittingLabelShortLink,
  openLabelForm,
  closeLabelForm,
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
          <div className='flex items-center gap-2 lg:flex-col lg:items-end'>
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
              onClick={() => copyToClipBoard(fullUrl)}
            >
              <CopyIcon className='h-5 w-5' />
            </Button>
            <DeleteShortLinkButton id={id} />
          </div>
        }
        fullUrl={fullUrl}
        labelNode={
          isEdittingLabelShortLink === id ? (
            <UpdateShortLinkLabelForm label={label} onBlur={closeLabelForm} />
          ) : (
            <div className='flex items-center gap-2'>
              <ShortLinkLabel label={label} />
              <Button type='ghost' onClick={() => openLabelForm(id)}>
                <EditIcon className='h-5 w-5' />
              </Button>
            </div>
          )
        }
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
    isEdittingLabelShortLink: updateShortLinkLabelModel.form.$isOpenId,
    openLabelForm: updateShortLinkLabelModel.form.open,
    closeLabelForm: updateShortLinkLabelModel.form.close,
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
