import clsx from 'clsx';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { NavItem as NavItemType } from '@/shared/types';

type NavItemProps = NavItemType;

const NavItemView = ({ title, path }: NavItemProps) => {
  return (
    <NavLink
      className={({ isActive }) => clsx('', isActive && 'underline')}
      to={path}
    >
      {title}
    </NavLink>
  );
};

export const NavItem = memo(NavItemView);
