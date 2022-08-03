import { memo } from 'react';

import { Logo } from '../Logo';
import { SocialsLinks } from '../Socials';

const FooterView = () => {
  return (
    <footer className='flex flex-col items-center justify-between gap-6 p-4'>
      <Logo />
      <SocialsLinks />
      <p className='text-center'>
        © 2022 Amputater.at - Tool to shorten a long link.
      </p>
    </footer>
  );
};

export const Footer = memo(FooterView);
