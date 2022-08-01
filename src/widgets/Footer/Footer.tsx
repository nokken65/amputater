import { memo } from 'react';

import { CopyrightsString } from '../Copyrights';
import { Logo } from '../Logo';
import { SocialsLinks } from '../Socials';

const FooterView = () => {
  return (
    <footer className='flex flex-col items-center justify-between gap-6 p-4'>
      <Logo />
      <SocialsLinks />
      <CopyrightsString />
    </footer>
  );
};

export const Footer = memo(FooterView);
