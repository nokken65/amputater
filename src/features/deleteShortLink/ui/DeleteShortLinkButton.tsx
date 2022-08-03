import { reflect } from '@effector/reflect';

import { LoaderRingIcon, RemoveIcon } from '@/shared/icons';
import { ShortLink } from '@/shared/types';
import { Button } from '@/shared/ui';

import { events, selectors } from '../model';

type DeleteShortLinkButtonProps = Pick<ShortLink, 'id'> & {
  isDeletingIds: string[];
  onDelete: (id: string) => void;
};

const DeleteShortLinkButtonView = ({
  id,
  isDeletingIds,
  onDelete,
}: DeleteShortLinkButtonProps) => {
  return isDeletingIds.includes(id) ? (
    <LoaderRingIcon className='h-10 w-10 p-2' />
  ) : (
    <Button
      className='h-10 w-10 hover:text-red-400 dark:hover:text-red-400'
      type='ghost'
      onClick={() => onDelete(id)}
    >
      <RemoveIcon className='h-4 w-4' />
    </Button>
  );
};

export const DeleteShortLinkButton = reflect({
  view: DeleteShortLinkButtonView,
  bind: {
    isDeletingIds: selectors.$isDeletingIds,
    onDelete: events.add,
  },
});
