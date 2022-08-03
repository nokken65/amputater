import { reflect } from '@effector/reflect';
import { ReactNode } from 'react';

import { LoaderRingIcon } from '@/shared/icons';
import { Popover } from '@/shared/lib/Popover';
import { Profile } from '@/shared/types';
import { Button } from '@/shared/ui';

import { selectors } from '../model';

type ProfileCompactProps = {
  profile: Profile | null;
  popoverContent?: ReactNode;
};

const ProfileCompactView = ({
  profile,
  popoverContent,
}: ProfileCompactProps) => {
  return (
    <Popover
      contentNode={popoverContent}
      placement='bottom-end'
      triggerBehavior='click'
    >
      {profile ? (
        <Button className='!rounded-full p-0 drop-shadow'>
          <p className='ml-4 lg:hidden'>{profile.name}</p>
          <img
            alt='profile'
            className='h-12 w-12 rounded-full'
            src={profile.avatarUrl}
          />
        </Button>
      ) : (
        <LoaderRingIcon className='h-10 w-fit' />
      )}
    </Popover>
  );
};

export const ProfileCompact = reflect({
  view: ProfileCompactView,
  bind: {
    profile: selectors.$profile,
  },
});
