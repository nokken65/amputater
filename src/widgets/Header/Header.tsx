import { reflect } from '@effector/reflect';

import { ProfileCompact, userModel } from '@/entities/User';
import { DarkModeToggler } from '@/features/toggleDarkMode';
import { signInRoute } from '@/shared/config/routes';
import { Button } from '@/shared/ui';

import { Logo } from '../Logo';
import { ProfilePopoverMenu } from './ProfilePopoverMenu';

type HeaderProps = {
  isAuthorized: boolean;
};

const HeaderView = ({ isAuthorized }: HeaderProps) => {
  return (
    <header className='flex h-44 items-center justify-between gap-4 px-4 3xl:h-28 3xl:px-12 xl:px-6'>
      <Logo />
      {isAuthorized ? (
        <ProfileCompact popoverContent={<ProfilePopoverMenu />} />
      ) : (
        <div className='flex gap-4'>
          <DarkModeToggler />
          <Button
            className='!rounded-full px-4 text-xl uppercase'
            onClick={signInRoute.open}
          >
            Log <span className='text-slate-700'>in</span>
          </Button>
        </div>
      )}
    </header>
  );
};

export const Header = reflect({
  view: HeaderView,
  bind: {
    isAuthorized: userModel.selectors.$isAuthorized,
  },
});
