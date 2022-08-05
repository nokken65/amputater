import { memo } from 'react';

import { DarkModeSwitcher } from '@/features/toggleDarkMode';
import { supabaseApi } from '@/shared/api';
import { linksRoute, profileRoute } from '@/shared/config/routes';
import { Button } from '@/shared/ui';

const ProfilePopoverMenuView = () => {
  return (
    <div className='mt-1 flex min-w-[144px] flex-col overflow-hidden rounded-xl bg-slate-100 font-bold drop-shadow dark:bg-slate-700'>
      <DarkModeSwitcher />
      <Button
        className='py-4 px-6'
        rounded={false}
        type='ghost'
        onClick={profileRoute.open}
      >
        Profile
      </Button>
      <Button
        className='py-4 px-6'
        rounded={false}
        type='ghost'
        onClick={linksRoute.open}
      >
        Links
      </Button>
      <Button
        className='py-4 px-6 text-emerald-500 hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-500'
        rounded={false}
        type='ghost'
        onClick={supabaseApi.auth.signOut}
      >
        Sign out
      </Button>
    </div>
  );
};

export const ProfilePopoverMenu = memo(ProfilePopoverMenuView);
