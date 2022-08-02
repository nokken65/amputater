import { reflect } from '@effector/reflect';

import { DarkThemeIcon, LightThemeIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

import { events, selectors } from '../model';

type DarkModeTogglerProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeTogglerView = ({
  isDarkMode,
  toggleDarkMode,
}: DarkModeTogglerProps) => {
  return (
    <Button
      className='ml-auto text-gray hover:text-white'
      type='ghost'
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <DarkThemeIcon className='h-6 w-6' />
      ) : (
        <LightThemeIcon className='h-6 w-6' />
      )}
    </Button>
  );
};

export const DarkModeToggler = reflect({
  view: DarkModeTogglerView,
  bind: {
    isDarkMode: selectors.$isDarkMode,
    toggleDarkMode: events.toggleDarkMode,
  },
});
