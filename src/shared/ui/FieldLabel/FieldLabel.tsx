import clsx from 'clsx';
import { memo } from 'react';

import { Separator } from '../Separator';

type FieldLabelProps = {
  label: string;
  type?: 'vertical' | 'horizontal';
};

const FieldLabelView = ({ label, type = 'horizontal' }: FieldLabelProps) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-between gap-4 p-4 text-base text-slate-400',
        type === 'vertical' && 'flex-col !items-start',
      )}
    >
      {label}
      <Separator type={type === 'vertical' ? 'horizontal' : 'vertical'} />
    </div>
  );
};

export const FieldLabel = memo(FieldLabelView);
