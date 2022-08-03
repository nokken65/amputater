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
    <Button className='px-3' type='ghost' onClick={toggleDarkMode}>
      {isDarkMode ? (
        <DarkThemeIcon className='h-5 w-5' />
      ) : (
        <LightThemeIcon className='h-5 w-5' />
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
