import { variant } from '@effector/reflect';
import { Link } from 'atomic-router-react';
import { combine } from 'effector';
import { ReactNode } from 'react';

import { profileRoute } from '@/shared/config/routes';
import { Popover } from '@/shared/lib/Popover';
import { Profile } from '@/shared/types';

import { selectors } from '../model';
import { UserLoginLink } from './UserLoginLink';

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
      triggerNode={
        <Link
          className='flex h-fit items-center justify-between gap-2 rounded-full bg-primary pl-4 text-base font-bold normal-case text-white drop-shadow'
          to={profileRoute}
        >
          {profile?.name}
          <img
            alt='profile'
            className='h-12 w-12 rounded-full'
            src={profile?.avatarUrl}
          />
        </Link>
      }
    />
  );
};

export const ProfileCompact = variant({
  source: combine(
    {
      hasProfile: selectors.$hasProfile,
      isAuthorized: selectors.$isAuthorized,
    },
    ({ hasProfile, isAuthorized }) => {
      if (!isAuthorized) return 'unauthorized';
      if (!hasProfile) return 'loading';

      return 'ready';
    },
  ),
  cases: {
    unauthorized: () => <UserLoginLink />,
    loading: () => <div className='h-12 w-12 rounded-full bg-primary' />,
    ready: ProfileCompactView,
  },
  bind: {
    profile: selectors.$profile,
  },
});
