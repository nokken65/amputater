import { Link } from 'atomic-router-react';
import { memo } from 'react';

import { signInRoute } from '@/shared/config/routes';
import { Heading } from '@/shared/ui';

const UserLoginLinkView = () => {
  return (
    <Link
      activeClassName='underline'
      className='transition-colors duration-150 ease-in-out hover:text-primary'
      to={signInRoute}
    >
      <Heading uppercase bold={false} className='!text-lg'>
        Log <mark>in</mark>
      </Heading>
    </Link>
  );
};

export const UserLoginLink = memo(UserLoginLinkView);
