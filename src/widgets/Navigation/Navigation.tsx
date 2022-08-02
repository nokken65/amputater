import { RouteInstance, RouteParams } from 'atomic-router';
import { Link } from 'atomic-router-react';
import { memo, PropsWithChildren } from 'react';

import { aboutRoute, contactRoute } from '@/shared/config/routes';
import { Heading } from '@/shared/ui';

type NavItemProps = PropsWithChildren<{
  to: RouteInstance<RouteParams>;
  params?: RouteParams;
}>;

const NavItem = ({ to, params = {}, children }: NavItemProps) => {
  return (
    <Link
      activeClassName='underline'
      className='transition-colors duration-150 ease-in-out hover:text-primary'
      params={params}
      to={to}
    >
      <Heading uppercase bold={false} className='!text-lg'>
        {children}
      </Heading>
    </Link>
  );
};

const Items = () => {
  return (
    <>
      <NavItem to={aboutRoute}>About</NavItem>
      <NavItem to={contactRoute}>Contact</NavItem>
    </>
  );
};

const NavigationView = () => {
  return (
    <nav className='flex items-center gap-4'>
      <Items />
    </nav>
  );
};

export const Navigation = memo(NavigationView);
