import { reflect } from '@effector/reflect';
import clsx from 'clsx';

import { DarkThemeIcon, LightThemeIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

import { events, selectors } from '../model';

type DarkModeSwitcherProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeSwitcherView = ({
  isDarkMode,
  toggleDarkMode,
}: DarkModeSwitcherProps) => {
  return (
    <div className='flex w-full'>
      <Button
        className={clsx(
          'w-1/2',
          isDarkMode && 'text-emerald-500 dark:text-emerald-500',
        )}
        rounded={false}
        type='ghost'
        onClick={!isDarkMode ? toggleDarkMode : undefined}
      >
        <DarkThemeIcon className='h-5 w-5' />
      </Button>
      <Button
        className={clsx(
          'w-1/2',
          !isDarkMode && 'text-emerald-500 dark:text-emerald-500',
        )}
        rounded={false}
        type='ghost'
        onClick={isDarkMode ? toggleDarkMode : undefined}
      >
        <LightThemeIcon className='h-5 w-5' />
      </Button>
    </div>
  );
};

export const DarkModeSwitcher = reflect({
  view: DarkModeSwitcherView,
  bind: {
    isDarkMode: selectors.$isDarkMode,
    toggleDarkMode: events.toggleDarkMode,
  },
});
