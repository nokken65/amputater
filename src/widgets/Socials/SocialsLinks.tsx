import { Link } from 'atomic-router-react';
import { memo, ReactNode, useMemo } from 'react';

import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from '@/shared/icons';

type SocialLinks = {
  href: string;
  icon: ReactNode;
};

const SocialsLinksView = () => {
  const items = useMemo<SocialLinks[]>(
    () => [
      { href: '/', icon: <GithubIcon /> },
      { href: '/', icon: <TelegramIcon /> },
      { href: '/', icon: <FacebookIcon /> },
      { href: '/', icon: <TwitterIcon /> },
      { href: '/', icon: <InstagramIcon /> },
    ],
    [],
  );

  return (
    <ul className='flex gap-4'>
      {items.map((item, index) => (
        <li key={`id-${index.toString()}`}>
          <div>
            <Link
              className='transition-colors duration-150 ease-in-out hover:text-primary'
              to={item.href}
            >
              {item.icon}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const SocialsLinks = memo(SocialsLinksView);
