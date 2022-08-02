import { list } from '@effector/reflect';

import { ShortLinkCard, shortLinkModel } from '@/entities/ShortLink';
import {
  CopyCreatedShortLink,
  CreateShortLinkForm,
} from '@/features/createShortLink';
import { deleteShortLinkModel } from '@/features/deleteShortLink';
import { CopyIcon, RemoveIcon } from '@/shared/icons';
import { ShortLink } from '@/shared/types';
import { Button } from '@/shared/ui';
import { copyToClipBoard } from '@/shared/utils/copyToClipboard';

const LinkItem = ({ id, label, url, fullUrl, clicks, original }: ShortLink) => (
  <li>
    <ShortLinkCard
      actionsNodes={
        <div className='flex items-center gap-2'>
          <Button
            className='h-10 w-10 rounded-full text-gray-200'
            type='ghost'
            onClick={() => copyToClipBoard(fullUrl)}
          >
            <CopyIcon className='h-5 w-5' />
          </Button>
          <Button
            className='h-10 w-10 rounded-full text-gray-200'
            type='ghost'
            onClick={() =>
              deleteShortLinkModel.effects.deleteShortLinkFx({ id })
            }
          >
            <RemoveIcon className='h-4 w-4' />
          </Button>
        </div>
      }
      clicks={clicks}
      fullUrl={fullUrl}
      label={label}
      original={original}
      url={url}
    />
  </li>
);

const LinkItems = list({
  source: shortLinkModel.selectors.$shortLinks,
  view: LinkItem,
  getKey: ({ id }) => id,
});

const Links = () => {
  return (
    <div className='my-8 flex w-full flex-col items-center justify-start gap-16'>
      <div className='flex w-full flex-col items-center justify-between gap-10'>
        <CreateShortLinkForm />
        <CopyCreatedShortLink />
      </div>
      <ul className='flex w-4/5 flex-col gap-6'>
        <LinkItems />
      </ul>
    </div>
  );
};

export default Links;
