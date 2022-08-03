import { memo } from 'react';

import { Separator } from '../Separator';

type FieldLabelProps = {
  label: string;
};

const FieldLabelView = ({ label }: FieldLabelProps) => {
  return (
    <div className='flex items-center justify-between gap-4 p-4 text-base text-slate-400'>
      {label}
      <Separator type='vertical' />
    </div>
  );
};

export const FieldLabel = memo(FieldLabelView);
