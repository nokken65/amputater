import { Link } from 'atomic-router-react';
import { memo } from 'react';

import { homeRoute } from '@/shared/config/routes';
import { LogoIcon } from '@/shared/icons';
import { Heading } from '@/shared/ui';

const LogoView = () => {
  return (
    <Link className='flex w-fit items-center gap-6' to={homeRoute}>
      <LogoIcon className='h-9 w-fit' />
      <Heading uppercase className='text-4xl !font-normal' type='h1'>
        amputater
      </Heading>
    </Link>
  );
};

export const Logo = memo(LogoView);
