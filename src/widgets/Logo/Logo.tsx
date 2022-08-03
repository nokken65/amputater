import { Link } from 'atomic-router-react';
import { memo } from 'react';

import { homeRoute } from '@/shared/config/routes';
import { LogoIcon } from '@/shared/icons';
import { Heading } from '@/shared/ui';

const LogoView = () => {
  return (
    <Link className='flex items-center gap-4' to={homeRoute}>
      <LogoIcon className='h-9 w-9' />
      <Heading uppercase className='text-4xl lg:text-2xl' type='h1'>
        amputater
      </Heading>
    </Link>
  );
};

export const Logo = memo(LogoView);
