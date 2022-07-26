import { memo } from 'react';
import { Link } from 'react-router-dom';

import { ROUTE_PATHS } from '@/shared/constants/routePaths';
import { LogoIcon } from '@/shared/icons';
import { Heading } from '@/shared/ui';

const LogoView = () => {
  return (
    <Link className='flex w-fit items-center gap-6' to={ROUTE_PATHS.home}>
      <LogoIcon className='h-9 w-fit' />
      <Heading uppercase className='text-4xl font-normal' type='h1'>
        amputater
      </Heading>
    </Link>
  );
};

export const Logo = memo(LogoView);
