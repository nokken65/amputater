import { memo } from 'react';

import { ShortLink } from '@/shared/types';
import { Heading } from '@/shared/ui';

type ShortLinkLabelProps = Pick<ShortLink, 'label'>;

const ShortLinkLabelView = ({ label }: ShortLinkLabelProps) => {
  return (
    <Heading
      capitalize={false}
      className='overflow-hidden overflow-ellipsis whitespace-nowrap text-xl'
    >
      {label}
    </Heading>
  );
};

export const ShortLinkLabel = memo(ShortLinkLabelView);
