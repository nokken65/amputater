import { Link } from 'atomic-router-react';
import { memo } from 'react';

import { ProfileCompact } from '@/entities/User';
import { supabaseApi } from '@/shared/api';
import { linksRoute, settingsRoute } from '@/shared/config/routes';
import { Button } from '@/shared/ui';

import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

const HeaderView = () => {
  return (
    <header className='flex h-44 items-center justify-between gap-4 px-4 3xl:h-28 3xl:px-12'>
      <Logo />
      <Navigation />
      <ProfileCompact
        popoverContent={
          <div className='mt-1 flex flex-col overflow-hidden rounded-xl bg-gray/20 text-white drop-shadow'>
            <Link
              className='flex w-full justify-center px-4 py-2 hover:bg-primary'
              to={linksRoute}
            >
              Links
            </Link>
            <Link
              className='flex w-full justify-center px-4 py-2 hover:bg-primary'
              to={settingsRoute}
            >
              Settings
            </Link>
            <Button
              className='h-10'
              rounded={false}
              onClick={supabaseApi.auth.signOut}
            >
              Sign out
            </Button>
          </div>
        }
      />
    </header>
  );
};

export const Header = memo(HeaderView);
