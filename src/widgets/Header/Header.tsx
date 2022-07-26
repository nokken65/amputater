import { Link } from 'react-router-dom';

import { ROUTE_PATHS } from '@/shared/constants/routePaths';

import { Nav } from './Nav';

const Header = () => {
  return (
    <header className='flex items-center justify-between gap-2 bg-blue-100 p-4'>
      <Link to={ROUTE_PATHS.home}>
        <h1 className='text-2xl font-black'>Task Manager</h1>
      </Link>

      <Nav />
    </header>
  );
};

export { Header };
