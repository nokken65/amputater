import { memo } from 'react';

import { ROUTE_PATHS } from '@/shared/constants/routePaths';

import { NavItem } from './NavItem';

const items: import('@/shared/types').NavItem[] = [
  { path: ROUTE_PATHS.home, title: 'Home' },
  { path: ROUTE_PATHS.about, title: 'About' },
];

const NavView = () => {
  return (
    <nav>
      <ul className='flex gap-4'>
        {items.map((item) => (
          <li key={item.title}>
            <NavItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const Nav = memo(NavView);
